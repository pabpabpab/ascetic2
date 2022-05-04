<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Services\Product\ListService;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    /**
     * Get all products for js cache.
     *
     * @param \App\Services\Product\ListService $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function getEntireList(ListService $service): JsonResponse
    {
        return response()->json([
            'products' => $service->getEntireListForJSCache()
        ]);
    }

    /**
     * Get description of specified product.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function getOneDescription(Product $product): JsonResponse
    {
        return response()->json([
            'description' => $product->description
        ]);
    }

    /**
     * Get the specified product.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function getOneProduct(Product $product): JsonResponse
    {
        $description = $product->description;
        return response()->json([
            'product' => $product
        ]);
    }
}

// php artisan make:controller PublicJS/ProductController


