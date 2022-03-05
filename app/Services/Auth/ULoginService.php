<?php


namespace App\Services\Auth;


use App\Models\User;
use Illuminate\Support\Str;

class ULoginService
{

    // соблюсти данные для БД
    // входной $socUser это массив полученный из json-ответа ulogin.ru вида
    // {"first_name":"", "last_name":"", "email":"", "network":"", "identity":""}
    public function getNormalizedSocialData(array $socUser)
    {

        $socialId = $socUser['identity'];
        $socialId = Str::replace('https://', '', $socialId);
        $socialId = Str::replace('http://', '', $socialId);
        $socialId = Str::limit($socialId, 50);
        $socialId = trim($socialId);

        if (blank($socialId)) {
            return null;
        }

        $socialEmail = $socUser['email'] ?? '';

        $socialNetwork = $socUser['network'];
        $socialNetwork=Str::limit($socialNetwork, 15);
        $socialNetwork = trim($socialNetwork);


        $socialUserName = Str::limit(
            $socUser['first_name']." ".$socUser['last_name'],
            100
        );
        $socialUserName = trim($socialUserName);


        if (blank($socialUserName)) {
            return null;
        }

        return [$socialId, $socialEmail, $socialNetwork, $socialUserName];
    }



    // отыскать юзера по social_id = identity или создать нового
    // на входе будет [$socialId, $socialEmail, $socialNetwork, $socialUserName]
    public function getUserBySocialId(array $normalizedSocialData) {
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
