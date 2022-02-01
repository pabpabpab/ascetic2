<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\Product\ViewedProductsService;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

class ProductViewedController extends Controller
{
    public function getViewedProducts(ViewedProductsService $service, $pageNumber = 1)
    {
        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $productsCount = $service->getAllViewed()->count();
        $perPage = 3;
        $products = $service->getAllViewed()->paginate($perPage);
        return view('products.list.index', [
            'products' => $products,
            'productSectionName' => 'viewedProducts',
            'additionalDataOfProductSection' => $service->getAllViewedIdsStr(),
            'currentPage' => $currentPage,
            'totalProductsCount' => Product::count(),
            'sectionProductsCount' => $productsCount,
            'pageCount' => ceil($productsCount/$perPage)
        ]);
    }
}

// php artisan make:controller ProductViewedController


