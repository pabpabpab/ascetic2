<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthLoginRequest;
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

    public function doLogin(AuthLoginRequest $request)
    {
        $remember = isset($request->remember) ? $request->remember : false;
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (!Auth::attempt($credentials, $remember)) {
            return back()->withErrors(['result' => 'Логин или пароль неверные.']);
        }

        $request->session()->regenerate();

        $user = Auth::user();

        if (blank($user)) {
            return back()->withErrors(['result' => 'Пользователь не определен.']);
        }

        session([
            'username' => $user->getUserName(),
            'admin' => $user->_hasRole('admin'),
            'emailVerified' => filled($user->email_verified_at),
        ]);

        return redirect()->intended('/home');
        //return redirect()->route('home');
    }

}

