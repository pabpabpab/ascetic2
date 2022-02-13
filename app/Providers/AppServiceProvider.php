<?php

namespace App\Providers;

use App\Models\Product;
use App\Observers\ProductObserver;
use App\Services\Category\CategoryService;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(CategoryService $categoryService)
    {
        Product::observe(ProductObserver::class);

        //config(['my_site.pagination.perPage' => '1']);

        $categoryModelClassName = "App\Models\Category";
        View::share([
            'categories' => $categoryService->getAll($categoryModelClassName),
            'jsAppName' => 'productListApp.js',
            'currentPage' => 1,
            'perPage' => config("my_site.pagination.perPage"),
            'mainPageTitle' => config("my_site.titles.mainPageTitle"),
            'contacts' => config("my_site.contacts"),
            'cacheLimit' => config("my_site.cacheLimit"),
        ]);

    }
}
