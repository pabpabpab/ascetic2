<?php


namespace App\Services\Auth;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ULoginService
{
    /**
     * Соблюсти валидность данных для БД.
     * Входной $socUser это массив полученный из json-ответа ulogin.ru вида.
     * {"first_name":"", "last_name":"", "email":"", "network":"", "identity":""}
     *
     * @param array $socUser
     * @return array|null
     */
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

    /**
     * Отыскать user по social_id = identity или создать нового.
     * На входе будет [$socialId, $socialEmail, $socialNetwork, $socialUserName]
     *
     * @param array $normalizedSocialData
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getUserBySocialId(array $normalizedSocialData): Model
    {
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
