<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\PhotoManager\PhotoSeoService;
use App\Services\Product\ListService;
use App\Services\Product\ViewedProductsService;
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

        $totalProductsCount = Product::count();
        $perPage = 3;
        $products = $service->getAll('active')
            ->paginate($perPage);
        return view('products.list.index', [
            'products' => $products,
            'productSectionName' => 'all',
            'additionalDataOfProductSection' => '',
            'currentPage' => $currentPage,
            'totalProductsCount' => $totalProductsCount,
            'sectionProductsCount' => $totalProductsCount,
            'pageCount' => ceil($totalProductsCount/$perPage)
        ]);
    }

    public function list(ListService $service, $pageNumber)
    {
        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $totalProductsCount = Product::count();
        $perPage = 3;
        $products = $service->getAll('active')
            ->paginate($perPage);
        return view('products.list.index', [
            'products' => $products,
            'productSectionName' => 'all',
            'additionalDataOfProductSection' => '',
            'currentPage' => $currentPage,
            'totalProductsCount' => $totalProductsCount,
            'sectionProductsCount' => $totalProductsCount,
            'pageCount' => ceil($totalProductsCount/$perPage)
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

        $photoSeo = $service->getProductPhotoSeoByPhotoId($photoId);
        if (!trim($photoSeo->toArray()[0]->page_title)) {
            abort(404);
        }

        return view('products.single.single-photo', [
            'product' => $product,
            'photoSeo' => $photoSeo,
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


