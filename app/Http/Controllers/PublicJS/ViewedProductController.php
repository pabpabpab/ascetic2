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

        if ($productId > 0) {
            $service->addToViewed($productId);
        }

        return response()->json([
            'success' => true
        ]);
    }

    public function getSummaryList(ViewedProductsService $service): JsonResponse
    {
        return response()->json([
            'products' => $service->getSummaryOfViewed()
        ]);
    }


    // /public-js/viewed-products/offset/${settings.startOffset}
    public function getViewedProductsForJS(ViewedProductsService $service, int $startOffset): JsonResponse
    {
        $perPage = 3;
        $products = $service->getAllViewed()->offset($startOffset)->limit($perPage)->get();
        $sectionProductsCount = $service->getAllViewed()->count();

        return response()->json([
            'products' => $products,
            'sectionProductsCount' => $sectionProductsCount
        ]);
    }

}

// php artisan make:controller PublicJS/ViewedProductController
