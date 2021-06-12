<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthUpdatePasswordRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class SetNewPasswordController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }

    // ======================================ПОКАЗАТЬ ФОРМУ==============================================

    // ПЕРЕХОД ПО SIGNED URL ИЗ ПИСЬМА. ПОКАЗАТЬ ФОРМУ СОЗДАНИЯ НОВОГО ПАРОЛЯ.
    public function showNewPasswordForm(Request $request, $fakeUserId)
    {
        // получить настоящий id
        $originalUserId = $fakeUserId - env('FAKE_ID_OFFSET');

        // подписанная ссылка валидная?
        if (! $request->hasValidSignature()) {
            return redirect()->route('forgotPassword.showForm')
                ->with(['status' => $this->_evasiveAnswer()]);
        }

        // найти юзера по id
        $user = User::find($originalUserId);

        // юзер есть такой?
        if (blank($user)) {
            return redirect()->route('forgotPassword.showForm')
                ->with(['status' => $this->_evasiveAnswer()]);
        }

        // получить запись токена из таблицы, если есть
        $tokenObject = DB::table('password_resets')
            ->where('email', $user->email)
            ->first();

        // есть запись с токеном в таблице password_resets ?
        if (blank($tokenObject)) {
            return redirect()->route('forgotPassword.showForm')
                ->with(['status' => $this->_evasiveAnswer()]);
        }

        // вывести форму для ввода нового пароля
        return view('auth.password-update')->with(
            ['token' => $tokenObject->token, 'email' => $user->email]
        );
    }


    // ОДИНАКОВЫЙ УКЛОНЧИВЫЙ ОТВЕТ НА ВСЕ СЛУЧАИ (ПРОТЕКТЕД)
    protected function _evasiveAnswer() {
        return 'Ссылка больше не действительна. Пожалуйста, сделайте новый запрос.';
    }

    // =========================================СОХРАНИТЬ====================================================

    // СОХРАНИТЬ НОВЫЙ ПАРОЛЬ
    public function update(AuthUpdatePasswordRequest $request)
    {
        // проверка что юзер такой есть и токен в password_resets тоже есть и совпадает с токеном из формы
        if (! $this->_isCorrectCredentials($request->email, $request->token)) {
            return back()->withErrors(['result' => 'Неправильный токен.']);
        }

        // получить юзера, присвоить новый пароль, и сохранить
        $user = User::where('email', $request->email)->first();
        $user->password = Hash::make($request->password);
        $user->save();

        /*
        // авторизовать юзера
        Auth::login($user);

        // заполнить данные сессии
        session([
            'username' => $user->getUserName(),
            'admin' => $user->_hasRole('admin'),
            'emailVerified' => filled($user->email_verified_at),
        ]);
       */

        // удалить запись о токене в password_resets
        DB::table('password_resets')
            ->where('email', $request->email)
            ->delete();


        // редирект на форму логина
        return redirect()->route('login.show')
            ->with([
                'status' => 'Новый пароль установлен. Для входа введите пожалуйста Ваш e-mail и новый пароль.',
                'email' => $user->email
            ]);
            // with('status', 'Новый пароль установлен. Для входа введите Ваш e-mail и новый пароль.');
    }


    // ПРОВЕРКА ЧТО ЮЗЕР ТАКОЙ ЕСТЬ И ТОКЕН В PASSWORD_RESETS ТОЖЕ ЕСТЬ И СОВПАДАЕТ С ТОКЕНОМ ИЗ ФОРМЫ (ПРОТЕКТЕД)
    protected function _isCorrectCredentials($email, $token) {
        $user = User::where('email', $email)->first();

        // нет такого юзера
        if (blank($user)) {
            return false;
        }

        // получить запись токена из таблицы, если есть
        $tokenObject = DB::table('password_resets')
            ->where('email', $email)
            ->first();

        // нет такой записи в password_resets
        if (blank($tokenObject)) {
            return false;
        }

        // токен из в password_resets не совпадает с токеном из скрытого поля формы
        if ($tokenObject->token !== $token) {
            return false;
        }

        // все ок с данными
        return true;
    }


}
