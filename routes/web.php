<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ProductController;
use \App\Http\Controllers\ProductSearchController;
use \App\Http\Controllers\ProductFavoriteController;
use \App\Http\Controllers\ProductViewedController;
use \App\Http\Controllers\ProductByCategoryController;



Route::get('/', [ProductController::class, 'index'])
    ->name('mainPage')
    ->middleware('productListSettings');

Route::get('/products/{pageNumber}', [ProductController::class, 'list'])
    ->where('pageNumber', '[0-9]+')
    ->middleware('productListSettings')
    ->name('products.list');

Route::get('/products/{category:slug}/{pageNumber?}', [ProductByCategoryController::class, 'getByCategory'])
    ->where('pageNumber', '[0-9]+')
    ->middleware('productListSettings')
    ->name('products.byCategory');


Route::get('/product/{slug}-{product}', [ProductController::class, 'getOne'])
    ->name('products.single');
Route::get('/product/{product}/photo/{photoSlug}-{photoId}', [ProductController::class, 'getSinglePhotoPage'])
    ->where('photoId', '[0-9]+')
    ->name('products.singlePhotoPage');


Route::get('/viewed-products/{pageNumber?}', [ProductViewedController::class, 'getViewedProducts'])
    ->where('pageNumber', '[0-9]+')
    ->middleware('productListSettings')
    ->name('products.viewed');
Route::get('/favorite-products/{pageNumber?}', [ProductFavoriteController::class, 'getFavoriteProducts'])
    ->where('pageNumber', '[0-9]+')
    ->middleware('productListSettings')
    ->name('products.favorites');


// /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/{pageNumber}
Route::get('/product-search/price/{minPrice}-{maxPrice}/categories/{categoriesIds}/sort/{sortValue}/{pageNumber?}',
    [ProductSearchController::class, 'search']
)->where([
        'minPrice' => '[0-9]+',
        'maxPrice' => '[0-9]+',
        'categoriesIds' => '[0-9-]+',
        'sortValue' => 'default|position|priceUp|priceDown',
        'pageNumber' => '[0-9]+'
    ])
    ->middleware('productListSettings')
    ->name('products.search');



Route::get('/my', [App\Http\Controllers\MyPageController::class, 'index'])
    ->name('my');


//Route::get('/logs', [\Rap2hpoutre\LaravelLogViewer\LogViewerController::class, 'index'])->middleware(['role:admin']);


Route::get('/admin', function () {
    return view('admin.index_vuex');
})->middleware(['role:admin'])->name('adminPanel');

Route::get('/admin/{any}', function () {
    return view('admin.index_vuex');
})->where('any', '.*')->middleware(['role:admin']);






