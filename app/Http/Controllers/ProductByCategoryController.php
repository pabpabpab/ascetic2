<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Services\PageTitleService;
use App\Services\Settings\SettingsService;
use Illuminate\Pagination\Paginator;
use \Illuminate\Contracts\View\View;

class ProductByCategoryController extends Controller
{

    /**
     * Get a listing of products of specified category.
     * $category определена в роуте как {category:slug}
     *
     * @param \App\Models\Category $category
     * @param int $pageNumber
     * @return \Illuminate\Contracts\View\View
     */
    public function getByCategory(Category $category, $pageNumber = 1): View
    {
        $pageData = (new PageTitleService())->getData('productCategory', [
            'category' => $category,
            'categorySeo' => $category->seoText,
        ]);

        // установить стартовую страницу для пагинатора
        $currentPage = $pageNumber;
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $productsCount = $category->products()->count();
        $perPage = (new SettingsService())->getSettings('pagination')['perPage'];

        return view('products.list.index', [
            'category' => $category,
            'productSectionName' => 'productCategory',
            'additionalSectionData' => "{$category->id};{$category->slug}",
            'pageTitle' => $pageData['pageTitle'],
            'pageDescription' => $pageData['pageDescription'],
            'products' => $category->products()->paginate($perPage),
            'currentPage' => $currentPage,
            'totalProductsCount' => Product::count(),
            'sectionProductsCount' => $productsCount,
            'pageCount' => ceil($productsCount/$perPage)
        ]);
    }
}

// php artisan make:controller ProductByCategoryController
