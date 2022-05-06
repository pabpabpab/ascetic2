<?php


namespace App\Services\Product;

use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Eloquent\Builder;

class SearchService
{
    /**
     * Get searched products by filter parameters.
     * /public-js/product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/offset/{startOffset}
     *
     * @param array $params
     * @return array
     */
    public function getSearched(array $params): array
    {
        $minPrice = (int) $params['minPrice'];
        $maxPrice = (int) $params['maxPrice'];
        $categoriesIdsArr = $this->_getArrayOfIntegers((string) $params['categoriesIds']);
        $sortValue = $params['sortValue'];
        $startOffset = (int) $params['startOffset'];
        $perPage = (int) $params['perPage'];


        $queryBuilder = DB::table('products');

        if ($minPrice > 0) {
            $queryBuilder = $queryBuilder->where('price', '>=', $minPrice);
        }
        if ($maxPrice > 0) {
            $queryBuilder = $queryBuilder->where('price', '<=', $maxPrice);
        }

        $productsCount = 0;
        if ($this->_isThereCategoriesIds($categoriesIdsArr)) {
            $categoriesIdsStr = implode(",", $categoriesIdsArr);
            $queryBuilder = $queryBuilder->join(
                'products_categories',
                'products.id',
                '=',
                'products_categories.product_id')
            // указаны поля для экономии трафика (для js) и однозначности id
            ->select('products.id', 'name', 'price', 'parameters', 'photo_set', 'slug')
            ->groupBy('products.id')
            ->whereRaw("products_categories.category_id IN ($categoriesIdsStr)");


            $countQuery = "select count(*) as myRowCount from ({$queryBuilder->toSql()}) as q";
            $productsCount = collect(DB::select($countQuery, $queryBuilder->getBindings()))->pluck('myRowCount')->first();

            /*
            // не работает на mysql 5
            $productsCount = $queryBuilder->clone()
                ->select(DB::raw('count(1) OVER() as myCount'))
                ->value('myCount');
            */
        } else {
            // указаны поля для экономии трафика (для js)
            $queryBuilder = $queryBuilder->select('products.id', 'name', 'price', 'parameters', 'photo_set', 'slug');
            $productsCount = $queryBuilder->count();
        }

        $queryBuilder = $this->_sortBuilder($queryBuilder, $sortValue);
        $queryBuilder = $queryBuilder->offset($startOffset)->limit($perPage);

        return [
            'products' => $queryBuilder->get(),
            'sectionProductsCount' => $productsCount
        ];
    }

    /**
     * Get sorting part of builder of searched products.
     *
     * @param \Illuminate\Database\Query\Builder $queryBuilder
     * @param string $sortValue
     * @return \Illuminate\Database\Query\Builder
     */
    protected function _sortBuilder(Builder $queryBuilder, string $sortValue): Builder
    {
        if ($sortValue === 'priceUp') {
            return $queryBuilder->orderBy('price', 'asc');
        }
        if ($sortValue === 'priceDown') {
            return $queryBuilder->orderBy('price', 'desc');
        }
        return $queryBuilder->orderBy('position', 'desc');
    }

    /**
     * Get array of integers from dash separated numbers.
     *
     * @param string $dashSeparatedNumbers
     * @return array
     */
    protected function _getArrayOfIntegers(string $dashSeparatedNumbers): array
    {
        return array_map(
            function ($value) {
                return (int) $value;
            },
            explode("-", $dashSeparatedNumbers)
        );
    }

    /**
     * Is there categories ids?
     *
     * @param array $categoriesIdsArr
     * @return bool
     */
    protected function _isThereCategoriesIds(array $categoriesIdsArr): bool
    {
        if (count($categoriesIdsArr) === 0) {
            return false;
        }
        if (count($categoriesIdsArr) === 1 && $categoriesIdsArr[0] === 0) {
            return false;
        }
        return true;
    }
}
