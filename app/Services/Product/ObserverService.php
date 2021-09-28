<?php


namespace App\Services\Product;


use App\Models\Product;

class ObserverService
{

    // функции вызываются из App\Listeners\ProductModifiedListener


    // сохранить Количество товаров для каждой категории
    static public function saveProductsCountForCategory(Product $product)
    {
        // using relationship many-to-many ($product->categories)
        foreach ($product->categories as $category) {
            $category->products_count = $category->products()->count();
            $category->save();
        }
    }

    // сохранить Количество товаров для каждого материала
    static public function saveProductsCountForMaterial(Product $product)
    {
        // using relationship many-to-many ($product->materials)
        foreach ($product->materials as $material) {
            $material->products_count = $material->products()->count();
            $material->save();
        }
    }

    // сохранить Количество товаров для каждого цвета
    static public function saveProductsCountForColor(Product $product)
    {
        // using relationship many-to-many ($product->materials)
        foreach ($product->colors as $color) {
            $color->products_count = $color->products()->count();
            $color->save();
        }
    }
}
