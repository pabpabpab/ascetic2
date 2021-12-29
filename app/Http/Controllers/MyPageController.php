<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MyPageController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /*
    public function __construct()
    {
        $this->middleware('auth');
    }
   */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Foundation\Application|
     * \Illuminate\Contracts\Support\Renderable|
     * \Illuminate\Http\RedirectResponse|
     * \Illuminate\Routing\Redirector
     */
    public function index()
    {
        //Auth::logout();

        if (!Auth::check()) {
            // return redirect()->route('account.login.show');
            return redirect('/');
        }

        return view('auth.my-page');
    }
}
