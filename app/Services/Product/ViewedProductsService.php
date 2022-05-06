<?php


namespace App\Services\Product;


use App\Models\Product;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class ViewedProductsService
{

    /**
     * Add specifid product to viewed products.
     *
     * @param int $productId
     * @return void
     */
    public function addToViewed(int $productId): void
    {
        $productId = (Integer) $productId;

        $frontIdsArr = $this->_getFrontIdsArr();

        // если нет такого id, то просто добавить в начало
        if (!in_array($productId, $frontIdsArr)) {
            $viewedArr = array_merge([$productId], $frontIdsArr);
            $viewedStr = implode(',', $viewedArr);

            Cookie::queue('viewedIds', $viewedStr, 144000); // в минутах, 100 дней

            return;
        }

        // если есть такой id, то удалить его со старой позиции, и добавить в начало
        $index = array_search($productId, $frontIdsArr);
        unset($frontIdsArr[$index]);
        $viewedArr = array_merge([$productId], $frontIdsArr);
        $viewedStr = implode(',', $viewedArr);

        Cookie::queue('viewedIds', $viewedStr, 144000); // в минутах, 100 дней
    }

    /**
     * Get all viewed products.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function getAllViewed(): Builder
    {
        $frontIdsArr = $this->_getFrontIdsArr();
        $viewedStr = count($frontIdsArr) > 0 ? implode(',', $frontIdsArr) : '0';
        return Product::select('id', 'name', 'price', 'parameters', 'photo_set', 'slug')
            ->whereRaw("id IN ($viewedStr)")->orderByRaw("FIELD(id, $viewedStr)");
    }

    /**
     * Get string of ids of all viewed products.
     *
     * @return string
     */
    public function getAllViewedIdsStr(): string
    {
        $frontIdsArr = $this->_getFrontIdsArr();
        return count($frontIdsArr) > 0 ? implode(',', $frontIdsArr) : '0';
    }

    /**
     * Get summary list of viewed products.
     *
     * @return \Illuminate\Support\Collection
     */
    public function getSummaryOfViewed(): Collection
    {
        $itemCountOfSummary = 8;
        $frontIdsArr = $this->_getFrontIdsArr();
        $summaryIdsArr = array_slice($frontIdsArr, 0, $itemCountOfSummary);
        $summaryIdsStr = count($summaryIdsArr) > 0 ? implode(',', $summaryIdsArr) : '0';
        return Product::select('id', 'name', 'price', 'parameters', 'photo_set', 'slug')
            ->whereRaw("id IN ($summaryIdsStr)")->orderByRaw("FIELD(id, $summaryIdsStr)")->get();
    }

    /**
     * Get count of all viewed products.
     *
     * @return int
     */
    public function getAllViewedCount(): int
    {
        return count($this->_getFrontIdsArr());
    }

    /**
     * Get array of id of all viewed products.
     *
     * @return array
     */
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
