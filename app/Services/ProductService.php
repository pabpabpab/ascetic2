<?php


namespace App\Services;


use App\Models\Product;
use App\Models\ProductDescription;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProductService
{

    public function __construct(PhotoUploadService $uploadService)
    {
        $this->uploadService = $uploadService;
    }



    public function saveOne($request, $product) {

        info($request->input());

        // старт транзакции
        DB::beginTransaction();


        try {

            $action = $product->id > 0 ? 'edit' : 'create';

            // СОХРАНИТЬ ОСНОВНЫЕ ДАННЫЕ
            $product->fill($request->input());
            $product->save(); // теперь у $product есть id


            // ВСТАВКА ДАННЫХ В СВЯЗАННЫЕ ТАБЛИЦЫ
            // вставка description using save method on relationship (one-to-one)
            $product->description()->save(
                new ProductDescription([
                    'description' => $request->description
                ])
            );
            // вставка colors_ids (или синхронизация) в pivot table
            $product->colors()->sync(
                $this->_getArrayOfIntegers($request->color_ids)
            );
            // вставка materials_ids (или синхронизация) в pivot table
            $product->materials()->sync(
                $this->_getArrayOfIntegers($request->material_ids)
            );


            // СОХРАНИТЬ ДОП. ПАРАМЕТРЫ В parameters (В ВИДЕ JSON)
            // взять название категории (через relationship one-to-many (belongs to))
            $category = $product->category;

            // взять только нужную инфу о colors (через relationship many-to-many)
            $colors = [];
            foreach ($product->colors as $color) {
                $colors[] = [
                    'id' => $color->id,
                    'name' => $color->name,
                ];
            }
            // взять только нужную инфу о $materials (через relationship many-to-many)
            $materials = [];
            foreach ($product->materials as $material) {
                $materials[] = [
                    'id' => $material->id,
                    'name' => $material->name,
                ];
            }
            // упаковать все параметры товара, кроме фото
            $product->parameters = json_encode([
                'category' => $category,
                'colors' => $colors,
                'materials' => $materials,
            ]);
            // сохранить parameters
            $product->save();

        }
        catch (\Exception $e) {
            DB::rollback();
            Log::emergency($e->getMessage()."\nin ".$e->getFile()."\n#");
            throw new \App\Exceptions\SaveProductException(
                'SaveProductException occurs (block 1).'
            );

        }


        // ЕСЛИ НЕТ ФОТО, ТО КОММИТ И ВЫХОДИМ
        if (empty($request->file('photos'))) {
            // Если всё хорошо - фиксируем
            DB::commit();

            return [
                'saveSuccess' => true,
                'product' => $product
            ];
        }





        // СОХРАНИТЬ НА ДИСКЕ ФОТКИ И ПОЛУЧИТЬ МАССИВ ИХ ИМЕН
        try {
            $timeNameArr = $this->uploadService->saveUploadedFiles(
                $request->file('photos'),
                $product->id
            );
        }
        catch (\Exception $e) {
            DB::rollback();
            Log::emergency($e->getMessage()."\nin ".$e->getFile()."\n#");
            throw new \App\Exceptions\SaveUploadedPhotoException(
                'SaveUploadedPhotoException occurs.'
            );
        }


        // СОХРАНИТЬ ДАННЫЕ О ФОТО В ГЛАВНУЮ ТАБЛИЦУ В ВИДЕ JSON И В СВЯЗАННУЮ ТАБЛИЦУ
        try {
            // упаковать пути до фоток
            $product->photo_set = json_encode($timeNameArr);

            // сохранить photo_set
            $product->save();

            // подготовить массив имен фоток, для вставки в таблицу photo через one-to-many
            $photos = [];
            foreach ($timeNameArr as $timeName) {
                $photos[] = ['filename' => $timeName];
            }

            // вставить фотки в таблицу photo, используя photo() relationship
            $product->photo()->createMany($photos);

        }
        catch (\Exception $e) {
            DB::rollback();
            Log::emergency($e->getMessage()."\nin ".$e->getFile()."\n#");
            throw new \App\Exceptions\SaveProductException(
                'SaveProductException occurs (block 3).'
            );
        }


        // Если всё хорошо - фиксируем
        DB::commit();


        return [
            'saveSuccess' => true,
            'product' => $product
        ];
    }





    /*
     public function saveProduct() {
     {
        DB::beginTransaction();

        try {
            // ...
        } catch (\Exception $e) {
            DB::rollback();
            throw new \App\Exceptions\SaveProductException('SaveProductException occurs (block 1).');
        }


        try {
            // ...
        } catch (\Exception $e) {
            DB::rollback();
            throw new \App\Exceptions\SaveProductException('SaveProductException occurs (block 2).');
        }


        DB::commit();

        return $product->id;
    }


    class SaveProductException extends Exception
    {
        public function render($request): JsonResponse
        {
         return response()->json('save product fail');
        }
    }
    */



    protected function _getArrayOfIntegers(String $commaSeparatedNumbers): array {
        return array_map(
            function ($value) {
                return (int) $value;
            },
            explode(",", $commaSeparatedNumbers)
        );
    }


}
