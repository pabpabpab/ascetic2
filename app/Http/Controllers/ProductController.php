<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Color;
use App\Models\Material;
use App\Models\Product;
use App\Models\ProductSEOText;
use App\Services\PhotoManager\PhotoSeoService;
use App\Services\Product\ListService;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\Paginator;

class ProductController extends Controller
{
    public function index(ListService $service)
    {
        // установить стартовую страницу для пагинатора
        $currentPage = 1;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $products = $service->getAll('active')
            ->paginate(3);
        return view('products.index', ['products' => $products]);
    }


    public function list(ListService $service, $pageNumber)
    {
        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $products = $service->getAll('active')
            ->paginate(3);
        return view('products.index', ['products' => $products]);
    }



    public function getByCategory(ListService $service, Category $category, $pageNumber = 1)
    {
        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        // $category определена в роуте как {category:slug}
        return view('products.index', [
            'category' => $category,
            'categorySeo' => $category->seoText,
            'products' => $category->products()->paginate(1),
        ]);
    }






    public function getOne(PhotoSeoService $service, $slug, Product $product)
    {
        return view('products.single-product', [
            'product' => $product,
            'description' => $product->description,
            'seo' => $product->seoText,
            'photoSeo' => $service->getProductPhotoSeoList($product->id),
        ]);
    }

    public function getSinglePhotoPage(PhotoSeoService $service, Product $product, $photoSlug, $photoName)
    {
        return view('products.single-photo', [
            'product' => $product,
            'photoSeo' => $service->getProductPhotoSeoList($product->id),
            'photoName' => $photoName,
        ]);
    }



/*
    public function getByMaterial(ListService $service, Material $material)
    {
        // $material определена в роуте как {material:slug}
        return view('products.index', [
            'category' => $material,
            'products' => $material->products,
        ]);
    }

    public function getByColor(ListService $service, Color $color)
    {
        // $color определена в роуте как {color:slug}
        return view('products.index', [
            'category' => $color,
            'products' => $color->products,
        ]);
    }
*/

}
