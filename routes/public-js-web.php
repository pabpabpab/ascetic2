<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\FavoriteProductController;
use \App\Http\Controllers\PublicJS\ProductController;


// csrf-updater
Route::get('/csrf', function () { return response()->json(csrf_token()); });


// js-post-реквест добавить удалить товар в/из избранных у пользователя
Route::post('/favorite-products/post', [FavoriteProductController::class, 'synchronizeUserFavorites']);


Route::get('/entire-product-list', [ProductController::class, 'getEntireList']);
Route::get('/one-product-description/{product}', [ProductController::class, 'getOneDescription']);
