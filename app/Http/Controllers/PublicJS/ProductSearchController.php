<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Product\ListService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductSearchController extends Controller
{

    public function search(ListService $service, int $minPrice, int $maxPrice, string $categories, int $startOffset): JsonResponse
    {
        $products = $service->getAll('active')->get();

        return response()->json([
            'products' => $products
        ]);
    }
}
