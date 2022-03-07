<?php

namespace App\Http\Controllers\AdminJS;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductSaveRequest;
use App\Models\Category;
use App\Models\Color;
use App\Models\Material;
use App\Models\Product;
use App\Models\ProductSEOText;
use App\Services\PhotoManager\PhotoAppender;
use App\Services\PhotoManager\PhotoMover;
use App\Services\PhotoManager\PhotoMoverByDragAndDrop;
use App\Services\PhotoManager\PhotoRemover;
use App\Services\PhotoManager\PhotoRotator;
use App\Services\PhotoManager\PhotoSeoService;
use App\Services\Product\ForceDeleteService;
use App\Services\Product\ListService;
use App\Services\Product\MoveService;
use App\Services\Product\SaveService;
use App\Services\Product\SeoService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function getAll(ListService $service, $whichProducts): JsonResponse
    {
        $products = $service->getAll($whichProducts)->get();
        return response()->json([
            'products' => $products,
            'seo' => ProductSEOText::query()->get()
        ]);
    }

    public function getByCategory(ListService $service, Category $category): JsonResponse
    {
        // $category определена в роуте как {category:slug}
        return response()->json([
            'category' => $category,
            'products' => $service->getAll('active')->get(), // все товары
            'seo' => ProductSEOText::query()->get()
        ]);
    }

    public function getByMaterial(ListService $service, Material $material): JsonResponse
    {
        // $material определена в роуте как {material:slug}
        return response()->json([
            'category' => $material,
            'products' => $service->getAll('active')->get(), // все товары
            'seo' => ProductSEOText::query()->get()
        ]);
    }

    public function getByColor(ListService $service, Color $color): JsonResponse
    {
        // $color определена в роуте как {color:slug}
        return response()->json([
            'category' => $color,
            'products' => $service->getAll('active')->get(), // все товары
            'seo' => ProductSEOText::query()->get()
        ]);
    }

    public function getCount(): JsonResponse
    {
        return response()->json(
            Product::count()
        );
    }

    public function getOne(PhotoSeoService $service, Product $product): JsonResponse
    {
        return response()->json([
            'product' => $product,
            'description' => $product->description,
            'seo' => $product->seoText,
            'photoSeo' => $service->getProductPhotoSeoList($product->id),
            // get seo фоток при открытии photoManager
        ]);
    }


    public function create(ProductSaveRequest $request, SaveService $service): JsonResponse
    {
        // instance товара в роуте как {product?}
        return response()->json(
            $service->saveOne($request)
        );
    }

    public function save(ProductSaveRequest $request, SaveService $service, Product $product): JsonResponse
    {
        // instance товара в роуте как {product?}
        return response()->json(
            $service->saveOne($request, $product)
        );
    }

    public function delete(Request $request, Product $product): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json([
            'deleteSuccess' => $product->delete(),
            'product' => $product
        ]);
    }

    public function restore($id): JsonResponse
    {
        $product = Product::onlyTrashed()->find($id);
        return response()->json([
            'restoreSuccess' => $product->restore(),
            'product' => $product
        ]);
    }

    public function forceDelete(ForceDeleteService $service, $id): JsonResponse
    {
        return response()->json(
            $service->forceDeleteOne($id)
        );
    }

    public function move(Request $request, MoveService $service, Product $product): JsonResponse
    {
        // instance категории в роуте как {category}
        $result = $service->move($product);

        return response()->json(['moveSuccess' => $result['success']]);
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

    public function movePhotoByDragAndDrop(PhotoMoverByDragAndDrop $manager, Product $product): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $manager->movePhotoByDragAndDrop($product)
        );
    }

    public function getSeoData(Product $product): JsonResponse
    {
        return response()->json([
            'product' => $product,
            'description' => $product->description,
            'seo' => $product->seoText,
        ]);
    }

    public function saveSeoData(SeoService $service, Product $product): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $service->saveSeoData($product)
        );
    }

    public function getPhotoSeoData(PhotoSeoService $service, Product $product, $photoName): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json([
            'product' => $product,
            'photoName' => $photoName,
            'seo' => $service->getPhotoSeoModel($product, $photoName),
        ]);
    }

    public function savePhotoSeoData(PhotoSeoService $service, Product $product, $photoName): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $service->saveSeoData($product, $photoName)
        );
    }

}