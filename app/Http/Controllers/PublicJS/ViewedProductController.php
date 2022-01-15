<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Product\ViewedProductsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ViewedProductController extends Controller
{
    public function addToViewed(Request $request, ViewedProductsService $service): JsonResponse
    {
        $productId = (int) $request->productId ?? 0;

        $viewed = [];
        if ($productId > 0) {
            $viewed = $service->addToViewed($productId);
        }

        return response()->json([
            'success' => true,
            'sessionViewedProductIds' => implode(',', $viewed)
        ]);
    }
}

// php artisan make:controller PublicJS/ViewedProductController
