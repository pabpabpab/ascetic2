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

        $categoryModelClassName = "App\Models\Category";
        View::share([
            'currentPage' => 1,
            'jsAppName' => 'productListApp.js',
            'mainPageTitle' => config("my_site.mainPageTitle"),
            'categories' => $categoryService->getAll($categoryModelClassName),
        ]);

    }
}
