<?php


namespace App\Services\Product;


use App\Models\Product;

class ViewedProductsService
{

    public function addToViewed($productId)
    {
        if (!session()->exists('viewedProductsIds')) {
            session()->put('viewedProductsIds', []);
        }

        $viewed = session('viewedProductsIds');

        // если нет такого id, то просто добавить
        if (!in_array($productId, $viewed)) {
            session()->push('viewedProductsIds', $productId);
            return;
        }

        // если есть такой id, то удалить его со старой позиции, и добавить снова в хвост
        $index = array_search($productId, $viewed);
        unset($viewed[$index]);
        array_push($viewed, $productId);
        session()->put('viewedProductsIds', $viewed);
    }

    public function getViewed()
    {
        // реверс массива id, чтобы последние просмотренные показывались первыми
        $ids = implode(',', array_reverse(session('viewedProductsIds', [0])));
        // dd($ids);
        return Product::whereRaw("id IN ($ids)")->orderByRaw("FIELD(id, $ids)");
    }
}
