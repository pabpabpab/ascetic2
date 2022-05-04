<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Product\SearchService;
use App\Services\Settings\SettingsService;
use Illuminate\Http\JsonResponse;

class ProductSearchController extends Controller
{
    /**
     * Search for products by filter parameters.
     * /public-js/product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/offset/{startOffset}
     *
     * @param \App\Services\Product\SearchService $service
     * @param int $minPrice
     * @param int $maxPrice
     * @param string $categoriesIds
     * @param string $sortValue
     * @param int $startOffset
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(SearchService $service, int $minPrice, int $maxPrice, string $categoriesIds, string $sortValue, int $startOffset): JsonResponse
    {
        $perPage = (new SettingsService())->getSettings('pagination')['perPage'];
        $result = $service->getSearched([
            'minPrice' => $minPrice,
            'maxPrice' => $maxPrice,
            'categoriesIds' => $categoriesIds,
            'sortValue' => $sortValue,
            'startOffset' => $startOffset,
            'perPage' => $perPage,
        ]);

        return response()->json([
            'products' => $result['products'],
            'sectionProductsCount' => $result['sectionProductsCount'],
        ]);
    }

}

// php artisan make:controller PublicJS/ProductSearchController



