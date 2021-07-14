<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ULoginRequest;
use App\Services\Auth\ULoginService;
use Illuminate\Support\Facades\Auth;

class ULoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    // запрос от ulogin.ru методом post (в ответ на запрос из js-виджета со страницы логина)
    public function response(ULoginRequest $request) {

        // токен из $_POST['token'] от ulogin.ru
        $token = $request->token;
        $url = "http://ulogin.ru/token.php?token=".$token."&host=".$_SERVER['HTTP_HOST'];

        // json-строка {"first_name":"", "last_name":"", "email":"", "network":"", "identity":""}
        $socialUserData = file_get_contents($url);

        // если пустая строка
        if (blank($socialUserData)) {
            return redirect()->route('login.show')
                ->with(['status' => 'Не удалось получить данные от социальной сети.']);
        }

        // массив полученный из json-строки
        $socialUserArray = json_decode($socialUserData, true);

        // если было поле error вида {"error":"token expired"} или вдруг пустой массив
        if ((blank($socialUserArray)) or (filled($socialUserArray['error']))) {
            return redirect()->route('login.show')
                ->with(['status' => 'Не удалось получить данные от социальной сети.']);
        }

        // соблюсти данные для БД
        // на выходе будет [$socialId, $socialEmail, $socialNetwork, $socialUserName]
        // или null, если отсутствовало поле identity или имя пользователя
        $normalizedSocialData = (new ULoginService())->getNormalizedSocialData($socialUserArray);

        // если из _getNormalizedSocialData() был возвращен null
        if (blank($normalizedSocialData)) {
            return redirect()->route('login.show')
                ->with(['status' => 'Не удалось получить данные от социальной сети.']);
        }

        // получить модель User (отыскать юзера по social_id=identity или создать нового)
        // на входе будет [$socialId, $socialEmail, $socialNetwork, $socialUserName]
        $localUser = (new ULoginService())->getUserBySocialId($normalizedSocialData);

        // если вдруг null вместо модели User
        if (blank($localUser)) {
            return redirect()->route('login.show')
                ->with(['status' => 'Не удалось создать пользователя.']);
        }

        // войти пользователя
        Auth::login($localUser);

        // заполним данные сессии
        session([
            'username' => $localUser->getUserName(),
            'admin' => $localUser->_hasRole('admin'),
            'emailVerified' => filled($localUser->email_verified_at),
        ]);

        // переход в ЛК
        return redirect()->intended('/home');
    }



    // запрос из iframe html-кода виджета
    public function getWidgetHtml() {

        $widget = '<script src="//ulogin.ru/js/ulogin.js"></script>
                   <div id="uLogin"
                   data-ulogin="display=panel;theme=flat;fields=first_name,last_name;
                   providers=vkontakte,odnoklassniki,yandex,facebook,instagram;
                   hidden=;
                   redirect_uri=http%3A%2F%2F{{config("app.name")}}%2Fu-login%2Fresponse;
                   mobilebuttons=0;"></div>';
        return $widget;
        //return response()->json($widget);
    }

}

