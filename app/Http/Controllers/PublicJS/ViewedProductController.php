<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Product\ViewedProductsService;
use App\Services\Settings\SettingsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ViewedProductController extends Controller
{

    /**
     * Add product to viewed products.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Services\Product\ViewedProductsService $service
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * Get list of viewed products summary.
     *
     * @param \App\Services\Product\ViewedProductsService $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSummaryList(ViewedProductsService $service): JsonResponse
    {
        return response()->json([
            'products' => $service->getSummaryOfViewed()
        ]);
    }

    /**
     * Get count of viewed products.
     *
     * @param \App\Services\Product\ViewedProductsService $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTotalCount(ViewedProductsService $service): JsonResponse
    {
        return response()->json([
            'value' => $service->getAllViewedCount(),
        ]);
    }

    /**
     * Get list of viewed products.
     * /public-js/viewed-products/offset/${settings.startOffset}
     *
     * @param \App\Services\Product\ViewedProductsService $service
     * @param int $startOffset
     * @return \Illuminate\Http\JsonResponse
     */
    public function getViewedProductsForJS(ViewedProductsService $service, int $startOffset): JsonResponse
    {
        $perPage = (new SettingsService())->getSettings('pagination')['perPage'];
        $products = $service->getAllViewed()->offset($startOffset)->limit($perPage)->get();

        $allViewedIdsStr = $service->getAllViewedIdsStr();

        return response()->json([
            'products' => $products,
            'sectionProductsCount' => count(explode(",", $allViewedIdsStr)),
            'allViewedIdsStr' => $allViewedIdsStr
        ]);
    }
}

// php artisan make:controller PublicJS/ViewedProductController
