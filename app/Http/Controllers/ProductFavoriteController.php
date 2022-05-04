<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\PageTitleService;
use App\Services\Product\FavoriteProductsListService;
use App\Services\Settings\SettingsService;
use Illuminate\Pagination\Paginator;
use Illuminate\Contracts\View\View;

class ProductFavoriteController extends Controller
{

    /**
     * Get a listing of favorite products.
     *
     * @param \App\Services\Product\FavoriteProductsListService $service
     * @param int $pageNumber
     * @return \Illuminate\Contracts\View\View
     */
    public function getFavoriteProducts(FavoriteProductsListService $service, $pageNumber = 1): View
    {
        $pageData = (new PageTitleService())->getData('favoriteProducts', []);

        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $productsCount = $service->getList()->count();
        $perPage = (new SettingsService())->getSettings('pagination')['perPage'];
        $products = $service->getList()->paginate($perPage);

        return view('products.list.index', [
            'products' => $products,
            'productSectionName' => 'favoriteProducts',
            'additionalSectionData' => '',
            'pageTitle' => $pageData['pageTitle'],
            'pageDescription' => $pageData['pageDescription'],
            'currentPage' => $currentPage,
            'totalProductsCount' => Product::count(),
            'sectionProductsCount' => $productsCount,
            'pageCount' => ceil($productsCount/$perPage)
        ]);
    }

}

// php artisan make:controller ProductFavoriteController


