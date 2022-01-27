<?php


namespace App\Services\Product;


use App\Models\Product;

class AggregateValuesService
{
    public function getMinPrice() {
        $minPrice = Product::query()->min('price');
        return floor($minPrice);
    }

    public function getMaxPrice() {
        $maxPrice = Product::query()->max('price');
        return ceil($maxPrice);
    }
}
