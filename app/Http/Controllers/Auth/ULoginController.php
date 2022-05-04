<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ULoginRequest;
use App\Services\Auth\ULoginService;
use Illuminate\Support\Facades\Auth;

class ULoginController extends Controller
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
     * Запрос от ulogin.ru методом post (в ответ на запрос из js-виджета со страницы логина).
     *
     * @param \App\Http\Requests\Auth\ULoginRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function response(ULoginRequest $request): \Illuminate\Http\RedirectResponse
    {
        // токен из $_POST['token'] от ulogin.ru
        $token = $request->token;
        $url = "http://ulogin.ru/token.php?token=".$token."&host=".$_SERVER['HTTP_HOST'];

        // json-строка {"first_name":"", "last_name":"", "email":"", "network":"", "identity":""}
        $socialUserData = file_get_contents($url);

        // если пустая строка
        if (blank($socialUserData)) {
            return redirect()->route('account.login.show')
                ->with(['authStatus' => 'Не удалось получить данные от социальной сети.']);
        }

        // массив полученный из json-строки
        $socialUserArray = json_decode($socialUserData, true);

        // если вдруг пустой массив
        if (blank($socialUserArray)) {
            return redirect()->route('account.login.show')
                ->with(['authStatus' => 'Не удалось получить данные от социальной сети.']);
        }

        // соблюсти данные для БД
        // на выходе будет [$socialId, $socialEmail, $socialNetwork, $socialUserName]
        // или null, если отсутствовало поле identity или имя пользователя
        $normalizedSocialData = (new ULoginService())->getNormalizedSocialData($socialUserArray);

        // если из _getNormalizedSocialData() был возвращен null
        if (blank($normalizedSocialData)) {
            return redirect()->route('account.login.show')
                ->with(['authStatus' => 'Не удалось получить данные от социальной сети.']);
        }

        // получить модель User (отыскать юзера по social_id=identity или создать нового)
        // на входе будет [$socialId, $socialEmail, $socialNetwork, $socialUserName]
        $localUser = (new ULoginService())->getUserBySocialId($normalizedSocialData);

        // если вдруг null вместо модели User
        if (blank($localUser)) {
            return redirect()->route('account.login.show')
                ->with(['authStatus' => 'Не удалось создать пользователя.']);
        }

        // войти пользователя
        Auth::login($localUser);

        // переход в ЛК
        return redirect()->intended('/my');
    }

}

