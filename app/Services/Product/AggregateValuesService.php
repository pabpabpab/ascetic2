<?php


namespace App\Services\Product;


use App\Models\Product;

class AggregateValuesService
{
    /**
     * Get min price of products.
     *
     * @return int
     */
    public function getMinPrice(): int
    {
        $minPrice = Product::query()->min('price');
        return floor($minPrice);
    }

    /**
     * Get max price of products.
     *
     * @return int
     */
    public function getMaxPrice(): int
    {
        $maxPrice = Product::query()->max('price');
        return ceil($maxPrice);
    }
}
