<?php


namespace App\Services\Auth;

use App\Models\User;
use Illuminate\Support\Facades\DB;

class SetNewPasswordService
{
    /**
     * ПРОВЕРКА ЧТО USER ТАКОЙ ЕСТЬ
     * И ТОКЕН В PASSWORD_RESETS ТОЖЕ ЕСТЬ И СОВПАДАЕТ С ТОКЕНОМ ИЗ ФОРМЫ
     *
     * @param string $email
     * @param string $token
     * @return bool
     */
    public function isCorrectCredentials(string $email, string $token): bool
    {
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
