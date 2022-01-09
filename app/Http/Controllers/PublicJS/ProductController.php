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
        $products = $service->getAll('active')->get();

        return response()->json([
            'products' => $products
        ]);
    }

    public function getOneDescription(Product $product): JsonResponse
    {
        return response()->json([
            'description' => $product->description
        ]);
    }
}



// php artisan make:controller PublicJS/ProductController
