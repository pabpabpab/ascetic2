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
            ->orderBy('position', 'desc');
            //->get() вынесено в контроллер (т.к. paginate() не работает после get())
    }

    protected function trashedProducts()
    {
        return Product::onlyTrashed()
            ->orderBy('position', 'desc');
            //->get() вынесено в контроллер (т.к. paginate() не работает после get())
    }

    public function getEntireListForJSCache()
    {
        // указаны поля для экономии трафика
        return Product::query()
            ->select('id', 'name', 'price', 'parameters', 'photo_set', 'slug')
            ->orderBy('position', 'desc')
            ->get();
    }

}
