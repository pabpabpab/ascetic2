<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Color;
use App\Models\Material;
use App\Models\Product;
use App\Models\ProductSEOText;
use App\Services\PhotoManager\PhotoSeoService;
use App\Services\Product\FavoriteProductsListService;
use App\Services\Product\ListService;
use App\Services\Product\ViewedProductsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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

        $productsCount = Product::count();
        $perPage = 3;
        $products = $service->getAll('active')
            ->paginate($perPage);
        return view('products.list.index', [
            'products' => $products,
            'currentPage' => $currentPage,
            'productsCount' => $productsCount,
            'pageCount' => ceil($productsCount/$perPage)
        ]);
    }


    public function list(ListService $service, $pageNumber)
    {
        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $productsCount = Product::count();
        $perPage = 3;
        $products = $service->getAll('active')
            ->paginate($perPage);
        return view('products.list.index', [
            'products' => $products,
            'currentPage' => $currentPage,
            'productsCount' => $productsCount,
            'pageCount' => ceil($productsCount/$perPage)
        ]);
    }



    public function getByCategory(ListService $service, Category $category, $pageNumber = 1)
    {
        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $productsCount = $category->products()->count();
        $perPage = 3;
        // $category определена в роуте как {category:slug}
        return view('products.list.index', [
            'category' => $category,
            'categorySeo' => $category->seoText,
            'products' => $category->products()->paginate($perPage),
            'currentPage' => $currentPage,
            'productsCount' => $productsCount,
            'pageCount' => ceil($productsCount/$perPage)
        ]);
    }

    public function getViewedProducts(ViewedProductsService $service, $pageNumber = 1)
    {
        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });


        $productsCount = $service->getAllViewed()->count();
        $perPage = 30;
        $products = $service->getAllViewed()->paginate($perPage);
        return view('products.list.index', [
            'products' => $products,
            'currentPage' => $currentPage,
            'productsCount' => $productsCount,
            'pageCount' => ceil($productsCount/$perPage)
        ]);
    }

    public function getFavoriteProducts(FavoriteProductsListService $service, $pageNumber = 1)
    {
        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $productsCount = $service->getList()->count();
        $perPage = 3;
        $products = $service->getList()->paginate($perPage);
        return view('products.list.index', [
            'products' => $products,
            'currentPage' => $currentPage,
            'productsCount' => $productsCount,
            'pageCount' => ceil($productsCount/$perPage)
        ]);
    }


    public function getOne(PhotoSeoService $service, $slug, Product $product)
    {
        (new ViewedProductsService())->addToViewed($product->id);

        return view('products.single.single-product', [
            'product' => $product,
            'description' => $product->description,
            'seo' => $product->seoText,
            'photoSeo' => $service->getProductPhotoSeoListWithFullListOfPhoto($product->id),
        ]);
    }

    public function getSinglePhotoPage(PhotoSeoService $service, Product $product, $photoSlug, $photoId)
    {
        (new ViewedProductsService())->addToViewed($product->id);

        return view('products.single.single-photo', [
            'product' => $product,
            'photoSeo' => $service->getProductPhotoSeoByPhotoId($photoId),
        ]);
    }



/*
    public function getByMaterial(ListService $service, Material $material)
    {
        // $material определена в роуте как {material:slug}
        return view('products.list.index', [
            'category' => $material,
            'products' => $material->products,
        ]);
    }

    public function getByColor(ListService $service, Color $color)
    {
        // $color определена в роуте как {color:slug}
        return view('products.list.index', [
            'category' => $color,
            'products' => $color->products,
        ]);
    }
*/

}


// php artisan make:controller ProductController


