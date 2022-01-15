<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ProductController;


Route::get('/', [ProductController::class, 'index'])
    ->name('mainPage');

Route::get('/products/{pageNumber}', [ProductController::class, 'list'])
    ->where('pageNumber', '[0-9]+')
    ->name('products.list');

Route::get('/products/{category:slug}/{pageNumber?}', [ProductController::class, 'getByCategory'])
    ->where('pageNumber', '[0-9]+')
    ->name('products.byCategory');


Route::get('/product/{slug}-{product}', [ProductController::class, 'getOne'])
    ->name('products.single');
Route::get('/product/{product}/photo/{photoSlug}-{photoId}', [ProductController::class, 'getSinglePhotoPage'])
    ->where('photoId', '[0-9]+')
    ->name('products.singlePhotoPage');


Route::get('/viewed-products/{pageNumber?}', [ProductController::class, 'getViewedProducts'])
    ->where('pageNumber', '[0-9]+')
    ->name('products.viewed');
Route::get('/favorite-products/{pageNumber?}', [ProductController::class, 'getFavoriteProducts'])
    ->where('pageNumber', '[0-9]+')
    ->name('products.favorites');



//Route::get('/products/by/material/{material:slug}', [ProductController::class, 'getByMaterial'])
//->name('products.byMaterial');
//Route::get('/products/by/color/{color:slug}', [ProductController::class, 'getByColor'])
//->name('products.byColor');



Route::get('/my', [App\Http\Controllers\MyPageController::class, 'index'])
    ->name('my');



Route::get('/admin', function () {
    return view('admin.index_vuex');
})->middleware(['auth', 'role:admin'])->name('adminPanel');

Route::get('/admin/{any}', function ($any) {
    return view('admin.index_vuex');
})->where('any', '.*')->middleware(['auth', 'role:admin']);






