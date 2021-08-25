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





// Админка
Route::group([
    'prefix' => '/admin',
    'namespace' => '\App\Http\Controllers\Api\Admin',
    'middleware' => ['auth', 'role:admin'],
], function () {

    // csrf
    Route::get('/csrf', function () { return response()->json(csrf_token()); });

    // users
    Route::get('/users', 'UserController@getAll');
    Route::get('/users/count', 'UserController@getCount');
    Route::get('/lazy-users/{lastId}', 'UserController@getLazyUsers');

    // single user
    Route::get('/user/{user}', 'UserController@getOne');
    Route::post('/user/edit/{user}', 'UserController@update');

    // категории товаров
    Route::get('/categories', 'CategoryController@getAll');
    Route::get('/categories/count', 'CategoryController@getCount');
    // одна категория
    Route::get('/category/{category}', 'CategoryController@getOne');
    Route::post('/category/save/{category?}', 'CategoryController@save');
    Route::delete('/category/delete/{category}', 'CategoryController@delete');
    Route::post('/category/change-position/{category}', 'CategoryController@changePosition');
    Route::post('/category/move/{category}', 'CategoryController@move');


    // материалы
    Route::get('/materials', 'MaterialController@getAll');
    Route::get('/materials/count', 'MaterialController@getCount');
    // один материал
    Route::get('/material/{material}', 'MaterialController@getOne');
    Route::post('/material/save/{material?}', 'MaterialController@save');
    Route::delete('/material/delete/{material}', 'MaterialController@delete');
    Route::post('/material/change-position/{material}', 'MaterialController@changePosition');
    Route::post('/material/move/{material}', 'MaterialController@move');


    // цвета
    Route::get('/colors', 'ColorController@getAll');
    Route::get('/colors/count', 'ColorController@getCount');
    // один материал
    Route::get('/color/{color}', 'ColorController@getOne');
    Route::post('/color/save/{color?}', 'ColorController@save');
    Route::delete('/color/delete/{color}', 'ColorController@delete');
    Route::post('/color/change-position/{color}', 'ColorController@changePosition');
    Route::post('/color/move/{color}', 'ColorController@move');

    // список товаров
    Route::get('/products/{whichProducts?}', 'ProductController@getAll')
        ->where('whichProducts', 'active|trashed');
    Route::get('/products/count', 'ProductController@getCount');

    // один товар
    Route::get('/product/{product}', 'ProductController@getOne');
    Route::post('/product/save/{product?}', 'ProductController@save');
    Route::delete('/product/delete/{product}', 'ProductController@delete');
    Route::get('/product/restore/{id}', 'ProductController@restore')
        ->where('id', '[0-9]+');
    Route::delete('/product/delete/force/{id}', 'ProductController@forceDelete')
        ->where('id', '[0-9]+');

    // photo manager
    Route::delete('/product/photo/delete/{product}/{photoName}', 'ProductController@deletePhoto')
        ->where('photoName', '[0-9]+\.[a-z]+');
    Route::get('/product/photo/rotate/{product}/{photoName}/{angle}', 'ProductController@rotatePhoto')
        ->where('photoName', '[0-9]+\.[a-z]+')
        ->where('angle', '90|180|270');
    Route::get('/product/photo/move/{product}/{photoName}/{to}', 'ProductController@movePhoto')
        ->where('photoName', '[0-9]+\.[a-z]+')
        ->where('to', 'first|up|down');
    Route::post('/product/photo/add/{product}', 'ProductController@addPhoto');

});




/*
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

*/
/*
    Route::get('/myprofile', 'ProfileController@myProfile')
        ->name('myprofile')
        ->middleware('auth');
    Route::post('/save', 'ProfileController@save')
        ->name('save')
        ->middleware(['auth', 'checkCurrentPassword', 'uniqueEmail']);


*/
