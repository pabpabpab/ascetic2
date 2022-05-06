<?php


namespace App\Services\Product;


use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class ListService
{
    /**
     * Get all products.
     *
     * @param string $which
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function getAll(string $which): Builder
    {
        $method = $which.'Products';
        return $this->$method();
    }

    /**
     * Get all active products.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function activeProducts(): Builder
    {
        return Product::query()
            ->orderBy('position', 'desc');
            //->get() вынесено в контроллер (т.к. paginate() не работает после get())
    }

    /**
     * Get all trashed products.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function trashedProducts(): Builder
    {
        return Product::onlyTrashed()
            ->orderBy('position', 'desc');
            //->get() вынесено в контроллер (т.к. paginate() не работает после get())
    }

    /**
     * Get all active products for frontend JS cache with specified fields.
     *
     * @return \Illuminate\Support\Collection
     */
    public function getEntireListForJSCache(): Collection
    {
        // указаны поля для экономии трафика
        return Product::query()
            ->select('id', 'name', 'price', 'parameters', 'photo_set', 'slug', 'position')
            ->orderBy('position', 'desc')
            ->get();
    }
}
