<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\PageTitleService;
use App\Services\PhotoManager\PhotoSeoService;
use App\Services\Product\ListService;
use App\Services\Product\ViewedProductsService;
use Illuminate\Pagination\Paginator;

class ProductController extends Controller
{
    public function index(ListService $service)
    {
        $pageData = (new PageTitleService())->getData('allProducts', []);

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
            'productSectionName' => 'allProducts',
            'additionalSectionData' => '',
            'pageTitle' => $pageData['pageTitle'],
            'pageDescription' => $pageData['pageDescription'],
            'currentPage' => $currentPage,
            'totalProductsCount' => $totalProductsCount,
            'sectionProductsCount' => $totalProductsCount,
            'pageCount' => ceil($totalProductsCount/$perPage)
        ]);
    }

    public function list(ListService $service, $pageNumber)
    {
        $pageData = (new PageTitleService())->getData('allProducts', []);

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
            'productSectionName' => 'allProducts',
            'additionalSectionData' => '',
            'pageTitle' => $pageData['pageTitle'],
            'pageDescription' => $pageData['pageDescription'],
            'currentPage' => $currentPage,
            'totalProductsCount' => $totalProductsCount,
            'sectionProductsCount' => $totalProductsCount,
            'pageCount' => ceil($totalProductsCount/$perPage)
        ]);
    }

    public function getOne(PhotoSeoService $service, $slug, Product $product)
    {
        $pageData = (new PageTitleService())->getData('oneProduct', [
            'product' => $product,
            'seo' => $product->seoText,
        ]);

        (new ViewedProductsService())->addToViewed($product->id);

        return view('products.single.single-product', [
            'pageTitle' => $pageData['pageTitle'],
            'pageDescription' => $pageData['pageDescription'],
            'product' => $product,
            'description' => $product->description,
            //'seo' => $product->seoText,
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

        $pageData = (new PageTitleService())->getData('onePhoto', [
            'photoSeo' => $photoSeo,
        ]);

        return view('products.single.single-photo', [
            'pageTitle' => $pageData['pageTitle'],
            'pageDescription' => $pageData['pageDescription'],
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


