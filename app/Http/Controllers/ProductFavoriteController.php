<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\Product\FavoriteProductsListService;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

class ProductFavoriteController extends Controller
{
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
            'productSectionName' => 'favoriteProducts',
            'additionalDataOfProductSection' => '',
            'currentPage' => $currentPage,
            'totalProductsCount' => Product::count(),
            'sectionProductsCount' => $productsCount,
            'pageCount' => ceil($productsCount/$perPage)
        ]);
    }

}

// php artisan make:controller ProductFavoriteController


