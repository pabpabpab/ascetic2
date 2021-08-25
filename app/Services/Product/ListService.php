<?php


namespace App\Services\Product;


use App\Models\Product;

class ListService
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
