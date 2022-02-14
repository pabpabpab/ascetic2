<?php


namespace App\Services\Settings;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;

class SettingsService
{
    public function saveSettings($request, $subject)
    {
        $method = "_save".ucfirst($subject);
        return $this->$method($request);
    }

    protected function _saveContacts($request)
    {
        config(['my_site.contacts.domain' => (string) $request->domain]);
        config(['my_site.contacts.address' => (string) $request->address]);
        config(['my_site.contacts.phone' => (string) $request->phone]);
        config(['my_site.contacts.phoneTime' => (string) $request->phoneTime]);
        config(['my_site.contacts.whatsapp' => (string) $request->whatsapp]);
        config(['my_site.contacts.tg' => (string) $request->tg]);
        config(['my_site.contacts.vkontakte' => (string) $request->vkontakte]);
        config(['my_site.contacts.ok' => (string) $request->ok]);
        config(['my_site.contacts.meta' => (string) $request->meta]);
        config(['my_site.contacts.email' => (string) $request->email]);


        $arr = Config::get('my_site');
        $arr['contacts']['domain'] = (string) $request->domain;
        $arr['contacts']['address'] = (string) $request->address;
        $arr['contacts']['phone'] = (string) $request->phone;
        $arr['contacts']['phoneTime'] = (string) $request->phoneTime;
        $arr['contacts']['whatsapp'] = (string) $request->whatsapp;
        $arr['contacts']['tg'] = (string) $request->tg;
        $arr['contacts']['vkontakte'] = (string) $request->vkontakte;
        $arr['contacts']['ok'] = (string) $request->ok;
        $arr['contacts']['meta'] = (string) $request->meta;
        $arr['contacts']['email'] = (string) $request->email;


        $data = var_export($arr, 1);
        if (File::put(config_path() . '/my_site.php', "<?php\n return $data ;")) {
            return true;
        }
        return false;


        //return config("my_site.contacts");
    }


}


//config(['my_site.pagination.perPage' => '1']);
// contacts|mainPageSeo|pagination|cacheLimit|photoQuality|adminEmail
/*
        $data = [
            'contacts' => config("my_site.contacts"),
            'mainPageSeo' => config("my_site.mainPageSeo"),
            'pagination' => config("my_site.pagination"),
            'cacheLimit' => config("my_site.cacheLimit"),
            'photoQuality' => config("my_photo.photoQuality"),
            'adminEmail' => env('ADMIN_EMAIL'),
        ];
*/
//info($request->address);
