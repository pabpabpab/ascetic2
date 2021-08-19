<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductSaveRequest;
use App\Models\Product;
use App\Services\PhotoManager\PhotoAppender;
use App\Services\PhotoManager\PhotoMover;
use App\Services\PhotoManager\PhotoRemover;
use App\Services\PhotoManager\PhotoRotator;
use App\Services\ProductSaveService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

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
        return response()->json([
            'product' => $product,
            'description' => $product->description
        ]);
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
        // instance товара в роуте как {product}
        $result = $product->delete();

        return response()->json([
            'deleteSuccess' => $result,
            'product' => $product
        ]);
    }

    public function deletePhoto(PhotoRemover $manager, Product $product, $photoName): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $manager->deletePhoto($product, $photoName)
        );
    }

    public function rotatePhoto(PhotoRotator $manager, Product $product, $photoName, $angle): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $manager->rotatePhoto($product, $photoName, $angle)
        );
    }

    public function movePhoto(PhotoMover $manager, Product $product, $photoName, $to): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $manager->movePhoto($product, $photoName, $to)
        );
    }

    public function addPhoto(Request $request, PhotoAppender $manager, Product $product): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $manager->appendPhoto($product, $request)
        );
    }

}
