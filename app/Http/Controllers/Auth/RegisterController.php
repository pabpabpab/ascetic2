<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserRegisteredEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use App\Services\User\FavoriteProductsSynchronizer;
use App\Services\User\IsAdminService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\View\View;


class RegisterController extends Controller
{
    /**
     * Assigning middleware to the controller's actions.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Show the register form.
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function showRegisterForm(): View
    {
        return view('auth.register');
    }

    /**
     * Do register action.
     *
     * @param \App\Http\Requests\Auth\RegisterRequest $request
     * @return \Illuminate\Http\RedirectResponse | \Illuminate\Http\JsonResponse
     */
    public function store(RegisterRequest $request)
    {
        $role = 'user';
        if ((new IsAdminService())->checkByEmail($request->email)) {
            $role = 'admin';
        }

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

        Auth::login($user);

        event(new UserRegisteredEvent($user));

        return $request->expectsJson()
            ? response()->json(['success' => true])
            : redirect()->route('my');

    }

}
