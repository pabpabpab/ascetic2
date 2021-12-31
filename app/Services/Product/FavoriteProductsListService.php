<?php


namespace App\Services\Product;


use App\Models\Product;

class FavoriteProductsListService
{
    public function getList()
    {
        $frontIdsStr = (string) $_COOKIE['favoriteIds'];

        // обезопасить строку приведением элементов к Int
        $frontIdsArr = $this->_getArrayOfIntegers($frontIdsStr);
        $frontIdsArr = array_unique($frontIdsArr, SORT_NUMERIC); // на всякий случай

        $secureIdsStr = implode(",", $frontIdsArr);
        return Product::whereRaw("id IN ($secureIdsStr)")->orderBy('position', 'desc');
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
