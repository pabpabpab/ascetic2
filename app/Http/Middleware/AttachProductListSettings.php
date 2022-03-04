<?php

namespace App\Http\Middleware;

use App\Services\Settings\SettingsService;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class AttachProductListSettings
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $service = new SettingsService();

        View::share([
            'isProductList' => true,
            'additionalContentWrapperCss' => 'content_wrapper_of_product_list',
            'jsAppName' => 'productListApp.js',
            'perPage' => $service->getSettings('pagination')['perPage'] ?? 30,
            'cacheLimit' => $service->getSettings('cache_limit')['value'] ?? 100,
            'scrollSpeedRatio' => $service->getSettings('scroll_speed_ratio')['value'] ?? 75,
        ]);

        return $next($request);
    }
}

// php artisan make:middleware AttachProductListVariables
