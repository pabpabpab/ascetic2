<?php


namespace App\Services\Product;


use App\Models\Product;
use Illuminate\Support\Facades\Cookie;

class ViewedProductsService
{

    public function addToViewed($productId)
    {
        $productId = (Integer) $productId;

        $frontIdsArr = $this->_getFrontIdsArr();

        // если нет такого id, то просто добавить в начало
        if (!in_array($productId, $frontIdsArr)) {
            $viewedArr = array_merge([$productId], $frontIdsArr);
            $viewedStr = implode(',', $viewedArr);

            Cookie::queue('viewedIds', $viewedStr, 144000); // в минутах, 100 дней

            return;
            // return $viewedStr;
        }

        // если есть такой id, то удалить его со старой позиции, и добавить в начало
        $index = array_search($productId, $frontIdsArr);
        unset($frontIdsArr[$index]);
        $viewedArr = array_merge([$productId], $frontIdsArr);
        $viewedStr = implode(',', $viewedArr);

        Cookie::queue('viewedIds', $viewedStr, 144000); // в минутах, 100 дней

        // return $viewedStr;
    }

    public function getAllViewed()
    {
        $frontIdsArr = $this->_getFrontIdsArr();
        $viewedStr = count($frontIdsArr) > 0 ? implode(',', $frontIdsArr) : '0';
        return Product::select('id', 'name', 'price', 'parameters', 'photo_set', 'slug')
            ->whereRaw("id IN ($viewedStr)")->orderByRaw("FIELD(id, $viewedStr)");
    }

    public function getAllViewedIdsStr(): string
    {
        $frontIdsArr = $this->_getFrontIdsArr();
        return count($frontIdsArr) > 0 ? implode(',', $frontIdsArr) : '0';
    }

    public function getSummaryOfViewed()
    {
        $itemCountOfSummary = 8;
        $frontIdsArr = $this->_getFrontIdsArr();
        $summaryIdsArr = array_slice($frontIdsArr, 0, $itemCountOfSummary);
        $summaryIdsStr = count($summaryIdsArr) > 0 ? implode(',', $summaryIdsArr) : '0';
        return Product::select('id', 'name', 'price', 'parameters', 'photo_set', 'slug')
            ->whereRaw("id IN ($summaryIdsStr)")->orderByRaw("FIELD(id, $summaryIdsStr)")->get();
    }

    public function getAllViewedCount(): int
    {
        return count($this->_getFrontIdsArr());
    }

    protected function _getFrontIdsArr(): array
    {
        $frontIdsStr = request()->cookie('viewedIds') ?? '';

        return (Boolean) $frontIdsStr
            ? $this->_getArrayOfIntegers((string) $frontIdsStr)
            : [];
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
