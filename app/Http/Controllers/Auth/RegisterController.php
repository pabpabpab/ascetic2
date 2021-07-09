<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserRegisteredEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class RegisterController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }

    // Показать форму регистрации
    public function showRegisterForm()
    {
        return view('auth.register');
    }


    // Создать регистрацию
    public function store(RegisterRequest $request)
    {
        $role = 'user';
        if ($request->email === env('ADMIN_EMAIL')) {
            $role = 'admin';
        }

        $user = User::create([
            'name' => $request->name,
            'role' => $role,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);


        if (blank($user)) {
            return $request->expectsJson()
                ? response()->json(['success' => false])
                : back()->with(['status' => 'Не удалось создать регистрацию.']);
        }


        event(new UserRegisteredEvent($user));

        Auth::login($user);

        session([
            'username' => Auth::user()->getUserName(),
            'admin' => Auth::user()->_hasRole('admin')
        ]);


        return $request->expectsJson()
            ? response()->json(['success' => true])
            : redirect()->route('home');

    }

}
