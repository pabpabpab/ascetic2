<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Product\SearchService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductSearchController extends Controller
{

    //product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/offset/{startOffset}
    public function search(SearchService $service, int $minPrice, int $maxPrice, string $categoriesIds, string $sortValue, int $startOffset): JsonResponse
    {
        $perPage = config("my_site.pagination.perPage");
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



