<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\PublicJS\CategoryController;
use \App\Http\Controllers\PublicJS\ProductController;
use \App\Http\Controllers\PublicJS\FavoriteProductController;
use \App\Http\Controllers\PublicJS\ViewedProductController;
use \App\Http\Controllers\PublicJS\ProductSearchController;
use \App\Http\Controllers\PublicJS\ProductAggregateValuesController;

// csrf-updater
Route::get('/csrf', function () { return response()->json(csrf_token()); });


Route::get('/entire-category-list', [CategoryController::class, 'getEntireList']);

// js-post-реквест добавить удалить товар в/из избранных у пользователя
Route::post('/favorite-products/post', [FavoriteProductController::class, 'synchronizeUserFavorites']);
Route::post('/viewed-products/post', [ViewedProductController::class, 'addToViewed']);

Route::get('/entire-product-list', [ProductController::class, 'getEntireList']);
Route::get('/one-product-description/{product}', [ProductController::class, 'getOneDescription']);
Route::get('/one-product/{product}', [ProductController::class, 'getOneProduct']);


Route::get('/viewed-product-summary-list', [ViewedProductController::class, 'getSummaryList']);



Route::get('/product-search/price/{minPrice}-{maxPrice}/categories/{categoriesIds}/sort/{sortValue}/offset/{startOffset}',
    [ProductSearchController::class, 'search']
)->where([
    'minPrice' => '[0-9]+',
    'maxPrice' => '[0-9]+',
    'categoriesIds' => '[0-9-]+',
    'sortValue' => 'default|position|priceUp|priceDown',
    'startOffset' => '[0-9]+'
]);


Route::get('/favorite-products/offset/{startOffset}', [FavoriteProductController::class, 'getFavoriteProductsForJS'])
    ->where(['startOffset' => '[0-9]+']);

Route::get('/viewed-products/offset/{startOffset}', [ViewedProductController::class, 'getViewedProductsForJS'])
    ->where(['startOffset' => '[0-9]+']);

Route::get('/product-price-range', [ProductAggregateValuesController::class, 'getPriceRange']);
