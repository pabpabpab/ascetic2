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
    /**
     * Display a listing of products with SEO data.
     *
     * @param \App\Services\Product\ListService $service
     * @param string $whichProducts
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAll(ListService $service, string $whichProducts): JsonResponse
    {
        $products = $service->getAll($whichProducts)->get();
        return response()->json([
            'products' => $products,
            'seo' => ProductSEOText::query()->get()
        ]);
    }

    /**
     * Display a listing of products with SEO data of the specified category.
     *
     * @param \App\Services\Product\ListService $service
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByCategory(ListService $service, Category $category): JsonResponse
    {
        // $category определена в роуте как {category:slug}
        return response()->json([
            'category' => $category,
            'products' => $service->getAll('active')->get(), // все товары
            'seo' => ProductSEOText::query()->get()
        ]);
    }

    /**
     * Display a listing of products with SEO data of the specified category of material.
     *
     * @param \App\Services\Product\ListService $service
     * @param \App\Models\Material $material
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByMaterial(ListService $service, Material $material): JsonResponse
    {
        // $material определена в роуте как {material:slug}
        return response()->json([
            'category' => $material,
            'products' => $service->getAll('active')->get(), // все товары
            'seo' => ProductSEOText::query()->get()
        ]);
    }

    /**
     * Display a listing of products with SEO data of the specified category of color.
     *
     * @param \App\Services\Product\ListService $service
     * @param \App\Models\Color $color
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByColor(ListService $service, Color $color): JsonResponse
    {
        // $color определена в роуте как {color:slug}
        return response()->json([
            'category' => $color,
            'products' => $service->getAll('active')->get(), // все товары
            'seo' => ProductSEOText::query()->get()
        ]);
    }

    /**
     * Get count of products.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCount(): JsonResponse
    {
        return response()->json(
            Product::count()
        );
    }

    /**
     * Get the specified product data with its SEO data.
     *
     * @param \App\Services\PhotoManager\PhotoSeoService $service
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function getOne(PhotoSeoService $service, Product $product): JsonResponse
    {
        return response()->json([
            'product' => $product,
            'description' => $product->description,
            'seo' => $product->seoText,
            'photoSeo' => $service->getProductPhotoSeoList($product->id),
            // get seo фото при открытии photoManager
        ]);
    }

    /**
     * Creating a single product.
     *
     * @param  \App\Http\Requests\Admin\ProductSaveRequest  $request
     * @param \App\Services\Product\SaveService $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(ProductSaveRequest $request, SaveService $service): JsonResponse
    {
        // instance товара в роуте как {product?}
        return response()->json(
            $service->saveOne($request)
        );
    }

    /**
     * Update the specified product.
     *
     * @param  \App\Http\Requests\Admin\ProductSaveRequest  $request
     * @param \App\Services\Product\SaveService $service
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function save(ProductSaveRequest $request, SaveService $service, Product $product): JsonResponse
    {
        // instance товара в роуте как {product?}
        return response()->json(
            $service->saveOne($request, $product)
        );
    }

    /**
     * Deleting the specified product.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function delete(Request $request, Product $product): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json([
            'deleteSuccess' => $product->delete(),
            'product' => $product
        ]);
    }

    /**
     * Restore the specified product.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function restore(int $id): JsonResponse
    {
        $product = Product::onlyTrashed()->find($id);
        return response()->json([
            'restoreSuccess' => $product->restore(),
            'product' => $product
        ]);
    }

    /**
     * Force deleting the specified product.
     *
     * @param \App\Services\Product\ForceDeleteService $service
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function forceDelete(ForceDeleteService $service, int $id): JsonResponse
    {
        return response()->json(
            $service->forceDeleteOne($id)
        );
    }

    /**
     * Update position of the specified product by drag-and-drop.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Services\Product\MoveService $service
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function move(Request $request, MoveService $service, Product $product): JsonResponse
    {
        // instance категории в роуте как {category}
        $result = $service->move($product);

        return response()->json(['moveSuccess' => $result['success']]);
    }

    /**
     * Deleting the specified photo of specified product.
     *
     * @param \App\Services\PhotoManager\PhotoRemover $manager
     * @param \App\Models\Product $product
     * @param string $photoName
     * @return \Illuminate\Http\JsonResponse
     */
    public function deletePhoto(PhotoRemover $manager, Product $product, string $photoName): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $manager->deletePhoto($product, $photoName)
        );
    }

    /**
     * Rotating the specified photo of specified product.
     *
     * @param \App\Services\PhotoManager\PhotoRotator $manager
     * @param \App\Models\Product $product
     * @param string $photoName
     * @param int $angle
     * @return \Illuminate\Http\JsonResponse
     */
    public function rotatePhoto(PhotoRotator $manager, Product $product, string $photoName, int $angle): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $manager->rotatePhoto($product, $photoName, $angle)
        );
    }

    /**
     * Update position of the specified photo of specified product.
     *
     * @param \App\Services\PhotoManager\PhotoMover $manager
     * @param \App\Models\Product $product
     * @param string $photoName
     * @param string $to
     * @return \Illuminate\Http\JsonResponse
     */
    public function movePhoto(PhotoMover $manager, Product $product, string $photoName, string $to): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $manager->movePhoto($product, $photoName, $to)
        );
    }

    /**
     * Append new photo to specified product.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Services\PhotoManager\PhotoAppender $manager
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function addPhoto(Request $request, PhotoAppender $manager, Product $product): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $manager->appendPhoto($product, $request)
        );
    }

    /**
     * Update position of the specified photo of specified product by drag-and-drop.
     *
     * @param \App\Services\PhotoManager\PhotoMoverByDragAndDrop $manager
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function movePhotoByDragAndDrop(PhotoMoverByDragAndDrop $manager, Product $product): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $manager->movePhotoByDragAndDrop($product)
        );
    }

    /**
     * Get the specified product seo data.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSeoData(Product $product): JsonResponse
    {
        return response()->json([
            'product' => $product,
            'description' => $product->description,
            'seo' => $product->seoText,
        ]);
    }

    /**
     * Update the specified product seo data.
     *
     * @param \App\Services\Product\SeoService $service
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveSeoData(SeoService $service, Product $product): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $service->saveSeoData($product)
        );
    }

    /**
     * Get the specified photo seo data of specified product.
     *
     * @param \App\Services\PhotoManager\PhotoSeoService $service
     * @param \App\Models\Product $product
     * @param string $photoName
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPhotoSeoData(PhotoSeoService $service, Product $product, string $photoName): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json([
            'product' => $product,
            'photoName' => $photoName,
            'seo' => $service->getPhotoSeoModel($product, $photoName),
        ]);
    }

    /**
     * Update the specified photo seo data of specified product.
     *
     * @param \App\Services\PhotoManager\PhotoSeoService $service
     * @param \App\Models\Product $product
     * @param string $photoName
     * @return \Illuminate\Http\JsonResponse
     */
    public function savePhotoSeoData(PhotoSeoService $service, Product $product, string $photoName): JsonResponse
    {
        // instance товара в роуте как {product}
        return response()->json(
            $service->saveSeoData($product, $photoName)
        );
    }

}
