<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\UpdatePasswordRequest;
use App\Models\User;
use App\Services\Auth\SetNewPasswordService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class SetNewPasswordController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }

    // ===============================ПОКАЗАТЬ ФОРМУ===================================

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

        // переход по signed url из письма был совершен,
        // значит можно еще раз пометить как email verified, если не был помечен
        $user->markEmailAsVerified(); // добавил после

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

    // =================================СОХРАНИТЬ========================================

    // СОХРАНИТЬ НОВЫЙ ПАРОЛЬ
    public function update(UpdatePasswordRequest $request)
    {
        // проверка что юзер такой есть
        // и токен в password_resets тоже есть и совпадает с токеном из формы
        if (! (new SetNewPasswordService())->isCorrectCredentials($request->email, $request->token)) {
            return back()->withErrors(['result' => 'Неправильный токен.']);
        }

        // получить юзера, присвоить новый пароль, и сохранить
        $user = User::where('email', $request->email)->first();
        $user->password = Hash::make($request->password);
        $user->save();

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
    }

}
