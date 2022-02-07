<?php


namespace App\Services\Product;


use App\Models\Product;

class FavoriteProductsListService
{
    public function getList($sortValue = 'position')
    {
        $frontIdsStr = (string) $_COOKIE['favoriteIds'];

        // обезопасить строку приведением элементов к Int
        $frontIdsArr = $this->_getArrayOfIntegers($frontIdsStr);
        $frontIdsArr = array_unique($frontIdsArr, SORT_NUMERIC); // на всякий случай

        $secureIdsStr = implode(",", $frontIdsArr);

        $queryBuilder = Product::select('id', 'name', 'price', 'parameters', 'photo_set', 'slug')
            ->whereRaw("id IN ($secureIdsStr)");
        $queryBuilder = $this->_sortBuilder($queryBuilder, $sortValue);

        return $queryBuilder;
    }

    protected function _sortBuilder($queryBuilder, String $sortValue)
    {
        if ($sortValue === 'priceUp') {
            return $queryBuilder->orderBy('price', 'asc');
        }
        if ($sortValue === 'priceDown') {
            return $queryBuilder->orderBy('price', 'desc');
        }
        return $queryBuilder->orderBy('position', 'desc');
    }

    protected function _getArrayOfIntegers(String $commaSeparatedNumbers): array
    {
        return array_map(
            function ($value) {
                return (int) $value;
            },
            explode(",", $commaSeparatedNumbers)
        );
    }

}
