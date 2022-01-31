<?php


namespace App\Services\Product;


use App\Models\Product;
use Illuminate\Support\Facades\DB;

class SearchService
{

    public function getSearched($params)
    {
        $minPrice = (int) $params['minPrice'];
        $maxPrice = (int) $params['maxPrice'];
        $categoriesIdsArr = $this->_getArrayOfIntegers((string) $params['categoriesIds']);
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

        } else {
            // указаны поля для экономии трафика (для js)
            $queryBuilder = $queryBuilder->select('products.id', 'name', 'price', 'parameters', 'photo_set', 'slug');
            $productsCount = $queryBuilder->count();
        }

        $queryBuilder = $queryBuilder->orderBy('position', 'desc');
        $queryBuilder = $queryBuilder->offset($startOffset)->limit($perPage);

        return [
            'products' => $queryBuilder->get(),
            'sectionProductsCount' => $productsCount
        ];
    }


    protected function _getArrayOfIntegers(String $dashSeparatedNumbers): array
    {
        return array_map(
            function ($value) {
                return (int) $value;
            },
            explode("-", $dashSeparatedNumbers)
        );
    }

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
