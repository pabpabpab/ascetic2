<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Services\Product\ListService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

class ProductController extends Controller
{

    public function getEntireList(ListService $service): JsonResponse
    {
        return response()->json([
            'products' => $service->getEntireListForJSCache()
        ]);
    }

    public function getOneDescription(Product $product): JsonResponse
    {
        return response()->json([
            'description' => $product->description
        ]);
    }

    public function getOneProduct(Product $product): JsonResponse
    {
        $description = $product->description;
        return response()->json([
            'product' => $product
        ]);
    }
}

// php artisan make:controller PublicJS/ProductController

