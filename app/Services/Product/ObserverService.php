<?php


namespace App\Services\Product;


use App\Models\Product;

class ObserverService
{
    // методы вызываются из App\Listeners\ProductModifiedListener

    /**
     * Сохранить Количество товаров для каждой категории.
     *
     * @param \App\Models\Product $product
     * @return void
     */
    static public function saveProductsCountForCategory(Product $product): void
    {
        // using relationship many-to-many ($product->categories)
        foreach ($product->categories as $category) {
            $category->products_count = $category->products()->count();
            $category->save();
        }
    }

    /**
     * Сохранить Количество товаров для каждого материала.
     *
     * @param \App\Models\Product $product
     * @return void
     */
    static public function saveProductsCountForMaterial(Product $product): void
    {
        // using relationship many-to-many ($product->materials)
        foreach ($product->materials as $material) {
            $material->products_count = $material->products()->count();
            $material->save();
        }
    }

    /**
     * Сохранить Количество товаров для каждого цвета.
     *
     * @param \App\Models\Product $product
     * @return void
     */
    static public function saveProductsCountForColor(Product $product)
    {
        // using relationship many-to-many ($product->materials)
        foreach ($product->colors as $color) {
            $color->products_count = $color->products()->count();
            $color->save();
        }
    }
}
