<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
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

        session([
            'username' => $user->getUserName(),
            'isAdmin' => $user->_hasRole('admin'),
            'emailVerified' => filled($user->email_verified_at),
        ]);

        return $request->expectsJson()
            ? response()->json([
                 'success' => true,
                 'userName' => $user->name,
                 'isAdmin' => $user->_hasRole('admin')
              ])
            : redirect()->intended('/my');
    }

}

