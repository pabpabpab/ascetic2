<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Services\User\FavoriteProductsSynchronizer;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function doLogin(LoginRequest $request)
    {
        $remember = isset($request->remember) ? $request->remember : false;
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (!Auth::attempt($credentials, $remember)) {
            return $request->expectsJson()
                ? response()->json(['success' => false])
                : back()->with(['authStatus' => 'Логин или пароль неверные.'])->withInput();
        }

        $request->session()->regenerate();

        $user = Auth::user();

        if (blank($user)) {
            return $request->expectsJson()
                ? response()->json(['success' => false])
                : back()->with(['authStatus' => 'Пользователь не определен.']);
        }

        //info((string) $_COOKIE['favoriteIds']);
        // почему-то не тот кук читает, поэтому с фронта favoriteIds в реквест добавлен при login
        $mixedFavoriteIdsStr = (new FavoriteProductsSynchronizer())
            ->mixFrontAndBackUserFavoriteIds($user->id, (string) $request->favoriteIds);


        return $request->expectsJson()
            ? response()->json([
                 'success' => true,
                 'userName' => $user->name,
                 'isAdmin' => $user->_hasRole('admin'),
                 'mixedFavoriteIds' => $mixedFavoriteIdsStr,
              ])
            : redirect()->intended('/my');
    }

}

