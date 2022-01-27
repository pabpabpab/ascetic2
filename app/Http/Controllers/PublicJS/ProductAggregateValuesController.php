<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Product\AggregateValuesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductAggregateValuesController extends Controller
{
    public function getPriceRange(AggregateValuesService $service): JsonResponse
    {
        return response()->json([
            'minPrice' => $service->getMinPrice(),
            'maxPrice' => $service->getMaxPrice(),
        ]);
    }
}

// php artisan make:controller PublicJS/ProductAggregateValuesController
