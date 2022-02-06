<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\PageTitleService;
use App\Services\Product\SearchService;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

class ProductSearchController extends Controller
{
    //product-search/price/{minPrice}-{maxPrice}/categories/{categories}/page/{pageNumber}
    public function search(SearchService $service, int $minPrice, int $maxPrice, string $categoriesIds, int $pageNumber = 1)
    {
        $pageData = (new PageTitleService())->getData('productSearchOnServer', []);

        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });
        $perPage = 3;

        $result = $service->getSearched([
            'minPrice' => $minPrice,
            'maxPrice' => $maxPrice,
            'categoriesIds' => $categoriesIds,
            'startOffset' => ($pageNumber - 1) * $perPage,
            'perPage' => $perPage,
        ]);

        return view('products.list.index', [
            'products' => $result['products'],
            'productSectionName' => 'productSearchOnServer',
            'additionalSectionData' => "{$minPrice};{$maxPrice};{$categoriesIds}",
            'pageTitle' => $pageData['pageTitle'],
            'pageDescription' => $pageData['pageDescription'],
            'currentPage' => $currentPage,
            'totalProductsCount' => Product::count(),
            'sectionProductsCount' => $result['sectionProductsCount'],
            'pageCount' => ceil($result['sectionProductsCount']/$perPage)
        ]);
    }
}

// php artisan make:controller ProductSearchController


