<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class MyPageController extends Controller
{
    /**
     * Show private page.
     *
     * @return \Illuminate\Http\RedirectResponse | \Illuminate\Contracts\View\View
     */
    public function index()
    {
        if (!Auth::check()) {
            return redirect('/');
        }

        return view('auth.my-page', ['jsAppName' => 'menuApp.js']);
    }
}
