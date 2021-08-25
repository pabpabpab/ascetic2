<?php


namespace App\Services\Product;

use App\Services\ExceptionService;
use App\Services\PhotoManager\PhotoTrait;
use App\Services\PhotoManager\PhotoUploader;
use App\Events\ProductModifiedEvent;
use App\Models\Product;
use App\Models\ProductDescription;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class SaveService
{

    use PhotoTrait;


    public function saveOne($request, $product): array
    {
        // info($request->input());

        DB::beginTransaction();

        try {

            // $action = $product->id > 0 ? 'edit' : 'create';

            // СОХРАНИТЬ ОСНОВНЫЕ ДАННЫЕ
            $product->fill($request->input());
            $product->save(); // теперь у $product есть id

            // ВСТАВКА ДАННЫХ В СВЯЗАННЫЕ ТАБЛИЦЫ
            $this->_saveDataIntoRelatedTables($product, $request);
            // СОХРАНИТЬ ДОП. ПАРАМЕТРЫ В поле parameters (В ВИДЕ JSON)
            $this->_saveParametersInJson($product);
        }
        catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\SaveProductException',
                'SaveProductException occurs (block 1).'
            );
        }


        // ЕСЛИ НЕТ ФОТО, ТО КОММИТ И ВЫХОДИМ
        if (empty($request->file('photos'))) {
            // Если всё хорошо - фиксируем
            DB::commit();
            // подсчет кол-ва продуктов для категорий (конечные действия в ProductModifiedListener)
            event(new ProductModifiedEvent($product));
            // выходим
            return [
                'saveSuccess' => true,
                'product' => $product
            ];
        }


        // СОХРАНИТЬ НА ДИСКЕ ФОТКИ И ПОЛУЧИТЬ МАССИВ ИХ ИМЕН
        try {
            $photoNameArr = (new PhotoUploader())->saveUploadedFiles(
                $request->file('photos'),
                $product->id
            );
        }
        catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\SaveUploadedPhotoException',
                'SaveUploadedPhotoException occurs.'
            );
        }


        // СОХРАНИТЬ ДАННЫЕ О ФОТО В СВЯЗАННУЮ ТАБЛИЦУ И В ГЛАВНУЮ ТАБЛИЦУ В ВИДЕ JSON
        try {
            // вставить имена фоток в таблицу photo
            $this->_insertPhotoNamesIntoPhotoTable($product, $photoNameArr);

            // упаковать пути до фоток и сохранить
            $product->photo_set = json_encode($photoNameArr);
            $product->save();
        }
        catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\SaveProductException',
                'SaveProductException occurs (block 3).'
            );
        }

        // Если всё хорошо - фиксируем
        DB::commit();

        // подсчет кол-ва продуктов для категорий (конечные действия в ProductModifiedListener)
        event(new ProductModifiedEvent($product));

        return [
            'saveSuccess' => true,
            'product' => $product
        ];
    }



    // ВСТАВКА ДАННЫХ В СВЯЗАННЫЕ ТАБЛИЦЫ
    protected function _saveDataIntoRelatedTables($product, $request)
    {
        // вставка description using save method on relationship (one-to-one)
        if ($request->id) {
            $productDescriptionModel = $product->description;
            $productDescriptionModel->description = $request->description;
        } else {
            $productDescriptionModel = new ProductDescription([
                'description' => $request->description
            ]);
        }
        $product->description()->save($productDescriptionModel);


        // вставка colors_ids (или синхронизация) в pivot table
        $product->colors()->sync(
            $this->_getArrayOfIntegers($request->color_ids)
        );
        // вставка materials_ids (или синхронизация) в pivot table
        $product->materials()->sync(
            $this->_getArrayOfIntegers($request->material_ids)
        );
    }


    // СОХРАНИТЬ ДОП. ПАРАМЕТРЫ В parameters (В ВИДЕ JSON)
    protected function _saveParametersInJson($product)
    {

        // взять название категории (через relationship one-to-many (belongs to))
        $category = $product->category;
        // взять только нужную инфу о category
        $categoryData = [
            'id' => $category->id,
            'name' => $category->name,
        ];

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
            'price' => $this->_getFormattedPrice($product->price),
            'category' => $categoryData,
            'colors' => $colors,
            'materials' => $materials,
        ]);
        // сохранить parameters
        $product->save();

    }




    protected function _getArrayOfIntegers(String $commaSeparatedNumbers): array
    {
        return array_map(
            function ($value) {
                return (int) $value;
            },
            explode(",", $commaSeparatedNumbers)
        );
    }

    protected function _getFormattedPrice($price): String
    {
        if ($price == 0) {
            return '';
        }

        $priceString = trim((string) (int) $price);
        $formattedPrice = '';
        $symbolCounter = 0;
        $priceLength = strlen($priceString);

        for ($k = $priceLength - 1; $k >= 0; $k--)
        {
            $symbolCounter++;

            if (($symbolCounter % 3) == 0) {
                $formattedPrice = " " . $priceString[$k] . $formattedPrice;
            } else {
                $formattedPrice = $priceString[$k] . $formattedPrice;
            }
        }

        return $formattedPrice;
    }


}

