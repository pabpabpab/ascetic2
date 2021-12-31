<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserRegisteredEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use App\Services\User\FavoriteProductsSynchronizer;
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
/*
        $user = User::create([
            'name' => $request->name,
            'role' => $role,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
*/


        $user = new User();
        $user->name = $request->name;
        $user->role = $role;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save(); // теперь у $user есть id при create



        if (blank($user->id)) {
            return $request->expectsJson()
                ? response()->json(['success' => false])
                : back()->with(['authStatus' => 'Не удалось создать регистрацию.']);
        }


        event(new UserRegisteredEvent($user));

        Auth::login($user);


        // с фронта favoriteIds (которые могут быть) в реквест добавлен при register
        // для записи в бэк
        (new FavoriteProductsSynchronizer())
            ->mixFrontAndBackUserFavoriteIds(Auth::user()->id, (string) $request->favoriteIds);


        return $request->expectsJson()
            ? response()->json(['success' => true])
            : redirect()->route('my');

    }

}
