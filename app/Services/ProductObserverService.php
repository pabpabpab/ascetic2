<?php


namespace App\Services;


use App\Models\Product;

class ProductObserverService
{

    // функции вызываются из App\Listeners\ProductModifiedListener

    // сохранить Количество товаров в категории
    static public function saveProductsCountForCategory(Product $product)
    {
        // using One-to-many (Inverse) / Belongs To
        $category = $product->category;
        // using One-To-Many $category->products
        $category->products_count = $category->products()->count();
        // сохранить модель category
        $category->save();
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
