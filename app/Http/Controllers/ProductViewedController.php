<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\PageTitleService;
use App\Services\Product\ViewedProductsService;
use App\Services\Settings\SettingsService;
use Illuminate\Pagination\Paginator;
use Illuminate\Contracts\View\View;

class ProductViewedController extends Controller
{
    /**
     * Get list of viewed products.
     *
     * @param \App\Services\Product\ViewedProductsService $service
     * @param int $pageNumber
     * @return \Illuminate\Contracts\View\View
     */
    public function getViewedProducts(ViewedProductsService $service, $pageNumber = 1): View
    {
        $pageData = (new PageTitleService())->getData('viewedProducts', []);

        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $productsCount = $service->getAllViewed()->count();
        $perPage = (new SettingsService())->getSettings('pagination')['perPage'];
        $products = $service->getAllViewed()->paginate($perPage);

        return view('products.list.index', [
            'products' => $products,
            'productSectionName' => 'viewedProducts',
            'additionalSectionData' => $service->getAllViewedIdsStr(),
            'pageTitle' => $pageData['pageTitle'],
            'pageDescription' => $pageData['pageDescription'],
            'currentPage' => $currentPage,
            'totalProductsCount' => Product::count(),
            'sectionProductsCount' => $productsCount,
            'pageCount' => ceil($productsCount/$perPage)
        ]);
    }
}

// php artisan make:controller ProductViewedController


