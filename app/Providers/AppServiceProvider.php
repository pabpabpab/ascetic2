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
            'isProductList' => false, // переопределяется в true в middleware AttachProductListSettings
            'additionalContentWrapperCss' => '', // переопределяется в роутах
            'categories' => $categoryService->getAll($categoryModelClassName),
            'visibleCategoriesLimit' => $service->getSettings('visible_categories_limit')['value'],
            'mainPageTitle' => $service->getSettings('main_page_seo')['mainPageTitle'],
            'contacts' => $service->getSettings('contacts'),
        ]);

    }
}
