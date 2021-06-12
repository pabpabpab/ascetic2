<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthULoginRequest;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class ULoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    // запрос от ulogin.ru методом post (в ответ на запрос из js-виджета со страницы логина)
    public function response(AuthULoginRequest $request) {

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

        // на выходе будет [$socialId, $socialEmail, $socialNetwork, $socialUserName]
        // или null, если отсутствовало поле identity или имя пользователя
        $normalizedSocialData = $this->_getNormalizedSocialData($socialUserArray);

        // если из _getNormalizedSocialData() был возвращен null
        if (blank($normalizedSocialData)) {
            return redirect()->route('login.show')
                ->with(['status' => 'Не удалось получить данные от социальной сети.']);
        }

        // получить модель User (был отыскан юзер по social_id=identity или создан новый)
        $localUser = $this->_getUserBySocialId($normalizedSocialData);

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


    // соблюсти данные для БД (ПРОТЕКТЕД)
    protected function _getNormalizedSocialData(array $socUser) {

        $socialId = $socUser['identity'];
        $socialId = Str::replace('https://', '', $socialId);
        $socialId = Str::replace('http://', '', $socialId);
        $socialId = Str::limit($socialId, 50)->trim();

        if (blank($socialId)) {
            return null;
        }

        $socialEmail = $socUser['email'];
        $socialEmail = !$socialEmail ? '' : $socialEmail;

        $socialNetwork = $socUser['network'];
        $socialNetwork=Str::limit($socialNetwork, 15)->trim();

        $socialUserName = Str::limit(
            $socUser['first_name']." ".$socUser['last_name'],
            100
        )->trim();

        if (blank($socialUserName)) {
            return null;
        }

        return [$socialId, $socialEmail, $socialNetwork, $socialUserName];
    }



    // отыскать юзера по social_id = identity или создать нового (ПРОТЕКТЕД)
    protected function _getUserBySocialId(array $normalizedSocialData) {
        list($socialId, $socialEmail, $socialNetwork, $socialUserName) = $normalizedSocialData;

        $localUser = User::query()
            ->where('social_id', $socialId)
            ->first();

        if(is_null($localUser)) {
            $localUser = new User();
            $localUser->fill([
                'name' => $socialUserName,
                'email' => $socialEmail,
                'password' => null,
                'social_id' => $socialId,
                'social_network' => $socialNetwork,
            ])->save();
        }

        return $localUser;
    }
}


/*
        $socialNetwork = Str::length($socialNetwork) > 15
            ? Str::limit($socialNetwork, 15)
            : $socialNetwork;

        $socialId = Str::length($socialId) > 20
            ? Str::limit($socialId, 20)
            : $socialId;

        $socialUserName = Str::length($socialUserName) > 100
            ? Str::limit($socialUserName, 100)
            : $socialUserName;

*/
