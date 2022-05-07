<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\PageTitleService;
use App\Services\PhotoManager\PhotoSeoService;
use App\Services\Product\ListService;
use App\Services\Product\ViewedProductsService;
use App\Services\Settings\SettingsService;
use Illuminate\Pagination\Paginator;
use Illuminate\Contracts\View\View;

class ProductController extends Controller
{
    /**
     * Get a listing of products for main page.
     *
     * @param \App\Services\Product\ListService $service
     * @return \Illuminate\Contracts\View\View
     */
    public function index(ListService $service): View
    {
        $pageData = (new PageTitleService())->getData('allProducts', []);

        // установить стартовую страницу для пагинатора
        $currentPage = 1;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $totalProductsCount = Product::count();
        $perPage = (new SettingsService())->getSettings('pagination')['perPage'];
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

    /**
     * Get a listing of products.
     *
     * @param \App\Services\Product\ListService $service
     * @param int $pageNumber
     * @return \Illuminate\Contracts\View\View
     */
    public function list(ListService $service, int $pageNumber): View
    {
        $pageData = (new PageTitleService())->getData('allProducts', []);

        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $totalProductsCount = Product::count();
        $perPage = (new SettingsService())->getSettings('pagination')['perPage'];

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

    /**
     * Get the specified product.
     *
     * @param \App\Services\PhotoManager\PhotoSeoService $service
     * @param string $slug
     * @param \App\Models\Product $product
     * @return \Illuminate\Contracts\View\View
     */
    public function getOne(PhotoSeoService $service, string $slug, Product $product): View
    {
        info($product);

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
            'photoSeo' => $service->getProductPhotoSeoListWithFullListOfPhoto($product->id),
            'jsAppName' => 'singleProductApp.js',
            'additionalContentWrapperCss' => 'content_wrapper_of_single_product',
        ]);
    }

    /**
     * Get the specified photo of specified product.
     *
     * @param \App\Services\PhotoManager\PhotoSeoService $service
     * @param \App\Models\Product $product
     * @param string $photoSlug
     * @param int $photoId
     * @return \Illuminate\Contracts\View\View
     */
    public function getSinglePhotoPage(PhotoSeoService $service, Product $product, string $photoSlug, int $photoId): View
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
            'additionalContentWrapperCss' => 'content_wrapper_of_photo_page',
        ]);
    }

}

// php artisan make:controller ProductController


