<?php


namespace App\Services\Product;

use App\Services\ExceptionService;
use App\Services\PhotoManager\PhotoTrait;
use App\Services\PhotoManager\PhotoUploader;
use App\Events\ProductModifiedEvent;
use App\Models\Product;
use App\Models\ProductDescription;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class SaveService
{
    use PhotoTrait;

    /**
     * Create/update one product.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Product $product
     * @return array
     */
    public function saveOne(Request $request, $product = null): array
    {
        // info($request->input());

        DB::beginTransaction();

        try {
            $action = blank($product) ? 'create' : 'edit';

            // клон прежней версии товара, для обсчета потом категорий
            $formerProduct = null;
            if ($action === 'edit' && !$product->trashed()) {
                $formerProduct = Product::with(['categories', 'materials', 'colors'])->find($product->id)->replicate();
            }

            if ($action === 'create') {
                $product = new Product();
            }

            // СОХРАНИТЬ ОСНОВНЫЕ ДАННЫЕ
            $product->fill($request->input());

            if ($action === 'create') {
                $product->position = $this->_calcNewAddedPosition();
            }

            $product->slug = Str::slug($product->name, '_');
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


        // ЕСЛИ НЕТ ФОТО, ТО КОММИТ И ВЫХОД
        if (empty($request->file('photos'))) {
            // Если всё хорошо - фиксируем
            DB::commit();
            // подсчет кол-ва продуктов для категорий, прежней и новой версий продукта
            if ($formerProduct) {
                event(new ProductModifiedEvent($formerProduct));
            }
            event(new ProductModifiedEvent($product));
            // выход
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
        // в этой точки нет редактирования товара, т.к. при редактировании нет фото, поэтому прежнюю версию товара не обсчитываем

        return [
            'saveSuccess' => true,
            'product' => $product
        ];
    }

    /**
     * ВСТАВКА ДАННЫХ В СВЯЗАННЫЕ ТАБЛИЦЫ.
     * Save the product data into related tables.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Product $product
     * @return void
     */
    protected function _saveDataIntoRelatedTables(Product $product, Request $request): void
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


        // вставка categories_ids (или синхронизация) в pivot table
        $product->categories()->sync(
            $this->_getArrayOfIntegers($request->category_ids)
        );
        // вставка colors_ids (или синхронизация) в pivot table
        $product->colors()->sync(
            $this->_getArrayOfIntegers($request->color_ids)
        );
        // вставка materials_ids (или синхронизация) в pivot table
        $product->materials()->sync(
            $this->_getArrayOfIntegers($request->material_ids)
        );
    }

    /**
     * СОХРАНИТЬ ДОП. ПАРАМЕТРЫ В parameters (В ВИДЕ JSON).
     *
     * @param \App\Models\Product $product
     * @return void
     */
    protected function _saveParametersInJson(Product $product): void
    {
        // взять только нужную инфу о categories (через relationship many-to-many)
        $categories = [];
        foreach ($product->categories as $category) {
            $categories[] = [
                'id' => $category->id,
                'slug' => $category->slug,
                'name' => $category->name,
            ];
        }

        // взять только нужную инфу о colors (через relationship many-to-many)
        $colors = [];
        foreach ($product->colors as $color) {
            $colors[] = [
                'id' => $color->id,
                'slug' => $color->slug,
                'name' => $color->name,
            ];
        }

        // взять только нужную инфу о $materials (через relationship many-to-many)
        $materials = [];
        foreach ($product->materials as $material) {
            $materials[] = [
                'id' => $material->id,
                'slug' => $material->slug,
                'name' => $material->name,
            ];
        }

        // упаковать все параметры товара, кроме фото
        $product->parameters = json_encode([
            'price' => $this->_getFormattedPrice($product->price),
            'categories' => $categories,
            'colors' => $colors,
            'materials' => $materials,
        ]);
        // сохранить parameters
        $product->save();
    }

    /**
     * Get array of integers from comma separated numbers.
     *
     * @param string $commaSeparatedNumbers
     * @return array
     */
    protected function _getArrayOfIntegers(String $commaSeparatedNumbers): array
    {
        return array_map(
            function ($value) {
                return (int) $value;
            },
            explode(",", $commaSeparatedNumbers)
        );
    }

    /**
     * Get formatted price.
     *
     * @param int $price
     * @return string
     */
    protected function _getFormattedPrice(int $price): string
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

    /**
     * Calculate the position value for the newly created product.
     *
     * @return int
     */
    protected function _calcNewAddedPosition(): int
    {
        if (Product::count() === 0) {
            return 1;
        }

        $maxModel = Product::query()
            ->orderBy('position', 'desc')
            ->first();

        return $maxModel->position + 1;
    }

}

