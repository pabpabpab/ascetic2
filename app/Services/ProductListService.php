<?php


namespace App\Services;


use App\Models\Product;

class ProductListService
{
    public function getAll($which)
    {
        $method = $which.'Products';
        return $this->$method();
    }

    protected function activeProducts()
    {
        return Product::query()
            ->orderBy('id', 'desc')
            ->get();
    }

    protected function trashedProducts()
    {
        return Product::onlyTrashed()
            ->orderBy('id', 'desc')
            ->get();
    }
}
