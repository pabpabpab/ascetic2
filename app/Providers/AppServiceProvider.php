<?php

namespace App\Providers;

use App\Models\Product;
use App\Models\Setting;
use App\Observers\ProductObserver;
use App\Services\Category\CategoryService;
use App\Services\Settings\SettingsService;
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
    public function boot(SettingsService $service, CategoryService $categoryService)
    {
        Product::observe(ProductObserver::class);

        $categoryModelClassName = "App\Models\Category";
        View::share([
            'categories' => $categoryService->getAll($categoryModelClassName),
            'jsAppName' => 'productListApp.js',
            'currentPage' => 1,
            'perPage' => $service->getSettings('pagination')['perPage'],
            'mainPageTitle' => $service->getSettings('main_page_seo')['mainPageTitle'],
            'contacts' => $service->getSettings('contacts'),
            'cacheLimit' => $service->getSettings('cache_limit')['value'],
        ]);

    }
}
