<?php

namespace App\Services\Settings;

use App\Models\Setting;

class SettingsService
{
    public function saveSettings($request, $subject)
    {
        $setting = Setting::where('slug', $subject)->first();
        $setting = blank($setting) ? new Setting() : $setting;

        $prepareSettingMethod = "_prepare".ucfirst($subject);

        $setting->data = json_encode($this->$prepareSettingMethod($request));
        $setting->slug = $subject;

        $setting->save();

        return [
            'success' => $setting->save(),
            'data' => json_decode($setting->data)
        ];
    }




    protected function _prepareContacts($request) {

        return [
            'domain' => (string) $request->domain,
            'address' => (string) $request->address,
            'phone' => (string) $request->phone,
            'phoneTime' => (string) $request->phoneTime,
            'whatsapp' => (string) $request->whatsapp,
            'tg' => (string) $request->tg,
            'vkontakte' => (string) $request->vkontakte,
            'ok' => (string) $request->ok,
            'meta' => (string) $request->meta,
            'email' => (string) $request->email,
        ];
    }





    public function getBlankSetting($subject): array
    {
        $method = "_getBlank".ucfirst($subject);
        return $this->$method();
    }

    protected function _getBlankContacts(): array
    {
        return [
            'domain' => '',
            'address' => '',
            'phone' => '',
            'phoneTime' => '',
            'whatsapp' => '',
            'tg' => '',
            'vkontakte' => '',
            'ok' => '',
            'meta' => '',
            'email' => '',
        ];

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


/*
 *
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
 */
