<?php


namespace App\Services\Product;


use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;

class FavoriteProductsListService
{
    /**
     * Get builder of list of favorite products.
     *
     * @param string $sortValue
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function getList(string $sortValue = 'position'): Builder
    {
        $frontIdsStr = '';
        if (array_key_exists('favoriteIds', $_COOKIE)) {
            $frontIdsStr = (string) $_COOKIE['favoriteIds'];
        }

        // обезопасить строку приведением элементов к Int
        $frontIdsArr = $this->_getArrayOfIntegers($frontIdsStr);
        $frontIdsArr = array_unique($frontIdsArr, SORT_NUMERIC); // на всякий случай

        $secureIdsStr = implode(",", $frontIdsArr);

        $queryBuilder = Product::select('id', 'name', 'price', 'parameters', 'photo_set', 'slug')
            ->whereRaw("id IN ($secureIdsStr)");
        $queryBuilder = $this->_sortBuilder($queryBuilder, $sortValue);

        return $queryBuilder;
    }

    /**
     * Get sorting part of builder of list of favorite products.
     *
     * @param \Illuminate\Database\Eloquent\Builder $queryBuilder
     * @param string $sortValue
     * @return \Illuminate\Database\Eloquent\Builder
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
     * Get array of integers from comma separated numbers.
     *
     * @param string $commaSeparatedNumbers
     * @return array
     */
    protected function _getArrayOfIntegers(string $commaSeparatedNumbers): array
    {
        return array_map(
            function ($value) {
                return (int) $value;
            },
            explode(",", $commaSeparatedNumbers)
        );
    }
}
