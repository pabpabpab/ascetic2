<?php


namespace App\Services\User;


use App\Services\Settings\SettingsService;

class IsAdminService
{
    /**
     * Is admin? Check by email.
     *
     * @param string $email
     * @return bool
     */
    public function checkByEmail(string $email): bool
    {
        $adminsStr = env('ADMIN_EMAIL');
        $adminsStr = str_replace(" ","", $adminsStr);
        $adminsArr = explode(",", $adminsStr);

        if ( in_array($email, $adminsArr) ) {
            return true;
        }

        $adminsStr = (new SettingsService())->getSettings('admin_email')['value'];
        $adminsStr = str_replace(" ","", $adminsStr);
        $adminsArr = explode(",", $adminsStr);

        if ( in_array($email, $adminsArr) ) {
            return true;
        }

        return false;
    }
}
