<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\EmailRequest;
use App\Mail\PasswordResetLink;
use App\Models\User;
use App\Services\Auth\ForgotPasswordService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Contracts\View\View;

class ForgotPasswordController extends Controller
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
     * ПОКАЗАТЬ ФОРМУ «ЗАБЫЛИ ПАРОЛЬ?»
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function showForgotForm(): View
    {
        return view('auth.forgot-password');
    }

    /**
     * ПРИНЯТЬ МЕТОДОМ POST ЕМАЙЛ, И ОТПРАВИТЬ НА ЭТОТ ЕМАЙЛ RESET LINK.
     *
     * @param \App\Http\Requests\Auth\EmailRequest $request
     * @return \Illuminate\Http\RedirectResponse | \Illuminate\Http\JsonResponse
     */
    public function sendResetLink(EmailRequest $request)
    {
        $email = $request->only('email');

        $user = User::where('email', $email)->first();

        // Нет такого юзера, показываем одинаковый (уклончивый) ответ все равно
        if (blank($user)) {
            return $request->expectsJson()
                ? response()->json(['success' => false])
                : back()->with(['authStatus' => $this->_evasiveAnswer()]);
        }

        // получить запись о токене из таблицы password_resets, если есть
        $tokenObject = DB::table('password_resets')
            ->where('email', $user->email)
            ->first();


        // Если не прошло 60 секунд с последней отправки reset link'а,
        // то выходим и показываем уклончивый ответ
        if ((new ForgotPasswordService())->recentlyCreatedToken($tokenObject)) {
            return $request->expectsJson()
                ? response()->json(['success' => false])
                : back()->with(['authStatus' => $this->_evasiveAnswer()]);
        }

        // обновить время у записи с $user->email,
        // или вставить запись если ее нет для этого email
        if (blank($tokenObject)) {
            DB::table('password_resets')->insert([
                'email' => $user->email,
                'token' => Str::random(100),
                'created_at' =>  date('Y-m-d H:i:s' , now()->timestamp)
            ]);
        } else {
            DB::table('password_resets')
                ->where('email', $user->email)
                ->update(['created_at' =>  date('Y-m-d H:i:s' , now()->timestamp)]);
        }

        // отправить письмо юзеру с reset link (с линком для создания нового пароля)
        Mail::to($user)->send(new PasswordResetLink($user));
        //$content = (new PasswordResetLink($user))->render();
        //info($content);

        // успешный ответ с сообщением
        return $request->expectsJson()
            ? response()->json(['success' => true])
            : back()->with(['authStatus' => $this->_evasiveAnswer()]);
    }

    /**
     * ОДИНАКОВЫЙ УКЛОНЧИВЫЙ ОТВЕТ НА ВСЕ СЛУЧАИ ПРАВИЛЬНОГО
     * ИЛИ НЕПРАВИЛЬНОГО ВВОДА ПОЛЬЗОВАТЕЛЯ (протектед).
     *
     * @return string
     */
    protected function _evasiveAnswer(): string
    {
        return 'Если Вы правильно указали вашу почту,
                ссылка была отправлена.
                Проверьте пожалуйста Вашу почту.';
    }
}
