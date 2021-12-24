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
Route::get('/favorite-products/{pageNumber?}', [ProductController::class, 'getViewedProducts'])
    ->where('pageNumber', '[0-9]+')
    ->name('products.favorites');



//Route::get('/products/by/material/{material:slug}', [ProductController::class, 'getByMaterial'])
//->name('products.byMaterial');
//Route::get('/products/by/color/{color:slug}', [ProductController::class, 'getByColor'])
//->name('products.byColor');


Route::get('/admin', function () {
    return view('admin.index_vuex');
})->middleware(['auth', 'role:admin'])->name('adminPanel');

Route::get('/admin/{any}', function ($any) {
    return view('admin.index_vuex');
})->where('any', '.*')->middleware(['auth', 'role:admin']);




Route::get('/my', [App\Http\Controllers\MyPageController::class, 'index'])
    ->name('my');


// Аутентификация
Route::group([
    'namespace' => '\App\Http\Controllers\Auth',
    'as' => 'account.',
], function () {

    // форма регистрации
    Route::get('/register', 'RegisterController@showRegisterForm')
        ->name('register.show');
    // создать регистрацию
    Route::post('/register', 'RegisterController@store')
        ->name('register.store');

    // по кнопке в ЛК повторная отправка письма с verification link'ом
    Route::post('/verification-resend/', 'VerificationResendController@resend')
        ->name('verification.resend');

    // форма входа
    Route::get('/login', 'LoginController@showLoginForm')
        ->name('login.show');
    // вход по логину и паролю
    Route::post('/login/do', 'LoginController@doLogin')
        ->name('login.do');
        // ->middleware(['guest', 'makeLogin']);

    // логаут
    Route::any('/logout', 'LogoutController@logout')
        ->name('logout');

    // переход по signed url из письма, верифицируется емайл
    Route::get('/confirm-register/{fakeUserId}', 'ConfirmRegisterController@confirmRegister')
        ->name('register.confirm');

    // форма забыл пароль
    Route::get('/forgot-password', 'ForgotPasswordController@showForgotForm')
        ->name('forgotPassword.showForm');
    // отправить по введенному емайл signed url для создания нового пароля
    Route::post('/forgot-password/send-reset-link', 'ForgotPasswordController@sendResetLink')
        ->name('forgotPassword.sendResetLink');

    // переход по signed url из письма для создания нового пароля
    Route::get('/reset-password/{fakeUserId}', 'SetNewPasswordController@showNewPasswordForm')
        ->name('resetPassword.showForm');
    // сохранить новый пароль
    Route::post('/reset-password/update', 'SetNewPasswordController@update')
        ->name('resetPassword.update');

    // получение ответа от ulogin.ru (запрос делается из js-виджета)
    Route::post('/u-login/response', 'ULoginController@response')
        ->name('uLogin.response');
    // запрос по ajax html-кода виджета
    Route::get('/u-login/widget', 'ULoginController@getWidgetHtml')
        ->name('uLogin.widget');
});

