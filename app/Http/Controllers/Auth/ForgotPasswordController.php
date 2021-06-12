<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthEmailRequest;
use App\Mail\PasswordResetLink;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{
   // use SendsPasswordResetEmails;

    public function __construct()
    {
        $this->middleware('guest');
    }


    // ======================================ПОКАЗАТЬ ФОРМУ==============================================

    // ПОКАЗАТЬ ФОРМУ «ЗАБЫЛИ ПАРОЛЬ?»
    public function showForgotForm()
    {
        return view('auth.forgot-password');
    }

    // ================ПРИНЯТЬ МЕТОДОМ POST ЕМАЙЛ, И ОТПРАВИТЬ НА ЭТОТ ЕМАЙЛ RESET LINK==================

    // ПРИНЯТЬ МЕТОДОМ POST ЕМАЙЛ, И ОТПРАВИТЬ НА ЭТОТ ЕМАЙЛ RESET LINK
    public function sendResetLink(AuthEmailRequest $request)
    {
        // $request->validate(['email' => 'required|email']);

        $email = $request->only('email');

        $user = User::where('email', $email)->first();

        // Нет такого юзера, показываем одинаковый (уклончивый) ответ все равно
        if (blank($user)) {
            return back()->with(['status' => $this->_evasiveAnswer()]);
        }

        // получить запись о токене из таблицы password_resets, если есть
        $tokenObject = DB::table('password_resets')
            ->where('email', $user->email)
            ->first();


        // Если не прошло 60 секунд с последней отправки reset link'а, выходим и показываем уклончивый ответ
        if ($this->_recentlyCreatedToken($tokenObject)) {
            return back()->with(['status' => $this->_evasiveAnswer()]);
        }

        // обновить время у записи с $user->email, или вставить запись если ее нет для этого email
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
        //Mail::to($user->email)->send(new PasswordResetLink($user));


        $cntnt = (new PasswordResetLink($user))->render();
        info($cntnt);

        // успешный ответ с сообщением
        return back()->with(['status' => $this->_evasiveAnswer()]);
    }



    // ОДИНАКОВЫЙ УКЛОНЧИВЫЙ ОТВЕТ НА ВСЕ СЛУЧАИ (ПРОТЕКТЕД)
    protected function _evasiveAnswer() {
        return 'Если Вы правильно указали вашу почту,
                ссылка была отправлена.
                Проверьте пожалуйста Вашу почту.';
    }



    // ПРОШЛО 60 СЕКУНД С ПОСЛЕДНЕГО ОБНОВЛЕНИЯ CREATED_AT У ТОКЕНА? (ПРОТЕКТЕД)
    protected function _recentlyCreatedToken($tokenObject) {
        $secondsLimit = 60;

        // записи о токене вообще нет
        if (blank($tokenObject)) {
            return false;
        }

        // created_at из таблицы переделать в timestamp
        $created_at = Carbon::createFromFormat(
            'Y-m-d H:i:s',
            $tokenObject->created_at
        )->timestamp;

        // timestamp сейчас
        $now = now()->timestamp;

        // не прошло 60 секунд с последнего обновления created_at у токена?
        if ($now - $created_at < $secondsLimit) {
            return true;
        }

        // прошло больше чем 60 секунд с последнего обновления created_at у токена
        return false;
    }

}
