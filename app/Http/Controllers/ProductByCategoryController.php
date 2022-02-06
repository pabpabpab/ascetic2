<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Services\PageTitleService;
use App\Services\Product\ListService;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

class ProductByCategoryController extends Controller
{
    public function getByCategory(ListService $service, Category $category, $pageNumber = 1)
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
        $perPage = 3;
        // $category определена в роуте как {category:slug}
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
