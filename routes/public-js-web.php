<?php


use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\FavoriteProductController;

// js-post-реквест добавить удалить товар в/из избранных у пользователя
Route::post('/favorite-products/post', [FavoriteProductController::class, 'synchronizeUserFavorites']);
