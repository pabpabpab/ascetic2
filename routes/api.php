<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// users
Route::get('/admin/users', '\App\Http\Controllers\Api\Admin\UserController@getAll');
Route::get('/admin/users/count', '\App\Http\Controllers\Api\Admin\UserController@getCount');
Route::get('/admin/lazy-users/{lastId}', '\App\Http\Controllers\Api\Admin\UserController@getLazyUsers');

// single user
Route::get('/admin/user/{user}', '\App\Http\Controllers\Api\Admin\UserController@getOne');
Route::post('/admin/user/edit/{user}', '\App\Http\Controllers\Api\Admin\UserController@update');

// категории товаров
Route::get('/admin/categories', '\App\Http\Controllers\Api\Admin\CategoryController@getAll');
Route::get('/admin/categories/count', '\App\Http\Controllers\Api\Admin\CategoryController@getCount');
// одна категория
Route::get('/admin/category/{category}', '\App\Http\Controllers\Api\Admin\CategoryController@getOne');
Route::post('/admin/category/save/{category?}', '\App\Http\Controllers\Api\Admin\CategoryController@save');
Route::delete('/admin/category/delete/{category}', '\App\Http\Controllers\Api\Admin\CategoryController@delete');



// материалы
Route::get('/admin/materials', '\App\Http\Controllers\Api\Admin\MaterialController@getAll');
// цвета
Route::get('/admin/colors', '\App\Http\Controllers\Api\Admin\ColorController@getAll');



// список товаров
Route::get('/admin/products', '\App\Http\Controllers\Api\Admin\ProductController@getAll');
Route::get('/admin/products/count', '\App\Http\Controllers\Api\Admin\ProductController@getCount');
// один товар
Route::get('/admin/product/{product}', '\App\Http\Controllers\Api\Admin\ProductController@getOne');
Route::post('/admin/product/save/{product?}', '\App\Http\Controllers\Api\Admin\ProductController@save');
Route::delete('/admin/product/delete/{product}', '\App\Http\Controllers\Api\Admin\ProductController@delete');

