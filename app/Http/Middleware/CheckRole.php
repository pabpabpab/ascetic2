<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */

    public function handle(Request $request, Closure $next, $role)
    {
        if (blank(Auth::user())) {
            return $request->expectsJson()
                ? response()->json(['accessDeniedReason' => 'unauthorizedUser'])
                : route('account.login.show');
        }

        if(! Auth::user()->_hasRole($role)) {
            return $request->expectsJson()
                ? response()->json(['accessDeniedReason' => 'userIsNotAdmin'])
                : redirect('/')->with(['flashMessage' => 'У Вас нет прав администратора.']);
        }

        return $next($request);
    }

}

// php artisan make:middleware CheckRole

