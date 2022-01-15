<?php


namespace App\Services\Product;


use App\Models\Product;

class ViewedProductsService
{

    public function addToViewed($productId)
    {
        //$frontIdsStr = $_COOKIE['viewedIds'] ?? '';
        //info($frontIdsStr);


        $productId = (Integer) $productId; //session()->put('viewedProductsIds', []);

        if (!session()->exists('viewedProductsIds')) {
            session()->put('viewedProductsIds', []);
        }

        $viewed = session('viewedProductsIds');


        // если нет такого id, то просто добавить
        if (!in_array($productId, $viewed)) {
            array_push($viewed, $productId);
            session()->put('viewedProductsIds', $viewed);
            return session('viewedProductsIds');
        }

        // если есть такой id, то удалить его со старой позиции, и добавить снова в хвост
        $index = array_search($productId, $viewed);
        unset($viewed[$index]);
        array_push($viewed, $productId);
        session()->put('viewedProductsIds', $viewed);
        return session('viewedProductsIds');
    }

    public function getViewed()
    {
        // реверс массива id, чтобы последние просмотренные показывались первыми
        $backIdsArr = array_reverse(session('viewedProductsIds', [0]));
        // dd($ids);


        // сессия не всегда работает, добавлю ids из кукис
        $frontIdsStr = $_COOKIE['viewedIds'] ?? '';
        //info($frontIdsStr);
        $frontIdsArr = $this->_getArrayOfIntegers((string) $frontIdsStr); // обезопасить строку приведением элементов к Int
        $mergedIdsArr = array_merge($backIdsArr, $frontIdsArr);
        $uniqueIdsArr = array_unique($mergedIdsArr, SORT_NUMERIC);


        $uniqueIdsStr = implode(',', $uniqueIdsArr);
        return Product::whereRaw("id IN ($uniqueIdsStr)")->orderByRaw("FIELD(id, $uniqueIdsStr)");
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
