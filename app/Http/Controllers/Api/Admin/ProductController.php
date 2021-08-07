<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductSaveRequest;
use App\Models\Product;
use App\Services\ProductSaveService;
use App\Services\ProductService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function getAll(): JsonResponse
    {
        // $products = $service->getAll();

        $products = Product::query()
            ->orderBy('id', 'desc')
            ->get();

        return response()->json($products);
    }


    public function getCount(): JsonResponse
    {
        $count = Product::count();
        return response()->json($count);
    }


    public function getOne(Product $product): JsonResponse
    {
        return response()->json($product);
    }

    public function save(ProductSaveRequest $request, ProductSaveService $service, Product $product): JsonResponse
    {
        // instance товара в роуте как {product?}
        return response()->json(
            $service->saveOne($request, $product)
        );
    }

    public function delete(Request $request, Product $product): JsonResponse
    {
        // instance категории в роуте как {category}
        $result = $product->delete();

        return response()->json([
            'deleteSuccess' => $result,
            'product' => $product
        ]);
    }

}
