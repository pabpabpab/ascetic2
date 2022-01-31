<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Product\SearchService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductSearchController extends Controller
{


    //product-search/price/{minPrice}-{maxPrice}/categories/{categories}/offset/{startOffset}

    public function search(SearchService $service, int $minPrice, int $maxPrice, string $categoriesIds, int $startOffset): JsonResponse
    {
        $perPage = 3;
        $result = $service->getSearched([
            'minPrice' => $minPrice,
            'maxPrice' => $maxPrice,
            'categoriesIds' => $categoriesIds,
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


