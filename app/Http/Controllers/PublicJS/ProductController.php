<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Product\ListService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

class ProductController extends Controller
{

    public function entireList(ListService $service): JsonResponse
    {
        $products = $service->getAll('active')->get();

        return response()->json([
            'products' => $products
        ]);
    }
}



// php artisan make:controller PublicJS/ProductController
