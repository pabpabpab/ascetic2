<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\PageTitleService;
use App\Services\Product\SearchService;
use App\Services\Settings\SettingsService;
use Illuminate\Pagination\Paginator;
use Illuminate\Contracts\View\View;

class ProductSearchController extends Controller
{
    /**
     * Search for products by filter parameters.
     * /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/{pageNumber}
     *
     * @param \App\Services\Product\SearchService $service
     * @param int $minPrice
     * @param int $maxPrice
     * @param string $categoriesIds
     * @param string $sortValue
     * @param int $pageNumber
     * @return \Illuminate\Contracts\View\View
     */
    public function search(SearchService $service, int $minPrice, int $maxPrice, string $categoriesIds, string $sortValue, int $pageNumber = 1): View
    {
        $pageData = (new PageTitleService())->getData('productSearchOnServer', []);

        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });
        $perPage = (new SettingsService())->getSettings('pagination')['perPage'];

        $result = $service->getSearched([
            'minPrice' => $minPrice,
            'maxPrice' => $maxPrice,
            'categoriesIds' => $categoriesIds,
            'sortValue' => $sortValue,
            'startOffset' => ($pageNumber - 1) * $perPage,
            'perPage' => $perPage,
        ]);

        return view('products.list.index', [
            'products' => $result['products'],
            'productSectionName' => 'productSearchOnServer',
            'additionalSectionData' => "{$minPrice};{$maxPrice};{$categoriesIds};{$sortValue}",
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


