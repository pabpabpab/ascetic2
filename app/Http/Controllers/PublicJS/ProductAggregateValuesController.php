<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Product\AggregateValuesService;
use Illuminate\Http\JsonResponse;

class ProductAggregateValuesController extends Controller
{
    /**
     * Get price range of products.
     *
     * @param \App\Services\Product\AggregateValuesService $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPriceRange(AggregateValuesService $service): JsonResponse
    {
        return response()->json([
            'minPrice' => $service->getMinPrice(),
            'maxPrice' => $service->getMaxPrice(),
        ]);
    }
}

// php artisan make:controller PublicJS/ProductAggregateValuesController
