<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\FavoriteProductController;



// csrf-updater
Route::get('/csrf', function () { return response()->json(csrf_token()); });


// js-post-реквест добавить удалить товар в/из избранных у пользователя
Route::post('/favorite-products/post', [FavoriteProductController::class, 'synchronizeUserFavorites']);
