<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\PublicJS\ProductController;
use \App\Http\Controllers\PublicJS\FavoriteProductController;
use \App\Http\Controllers\PublicJS\ViewedProductController;


// csrf-updater
Route::get('/csrf', function () { return response()->json(csrf_token()); });


// js-post-реквест добавить удалить товар в/из избранных у пользователя
Route::post('/favorite-products/post', [FavoriteProductController::class, 'synchronizeUserFavorites']);
Route::post('/viewed-products/post', [ViewedProductController::class, 'addToViewed']);

Route::get('/entire-product-list', [ProductController::class, 'getEntireList']);
Route::get('/one-product-description/{product}', [ProductController::class, 'getOneDescription']);
Route::get('/one-product/{product}', [ProductController::class, 'getOneProduct']);
