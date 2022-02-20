<?php

namespace App\Services\Settings;

use App\Models\Setting;

class SettingsService
{
    public function getSettings($subject): array
    {
        $setting = Setting::where('slug', $subject)->first();
        $data = blank($setting)
            ? $this->getBlankSettings($subject)
            : json_decode($setting->data);

        return (array) $data;
    }


    public function saveSettings($request, $subject): array
    {
        $setting = Setting::where('slug', $subject)->first();
        $setting = blank($setting) ? new Setting() : $setting;

        $methods = [
            'contacts' => '_prepareContactsData',
            'main_page_seo' => '_prepareMainPageSeoData',
            'visible_categories_limit' => '_prepareVisibleCategoriesLimitData',
            'cache_limit' => '_prepareCacheLimitData',
            'pagination' => '_preparePaginationData',
            'photo_quality' => '_preparePhotoQualityData',
            'admin_email' => '_prepareAdminEmailData',
        ];
        $prepareSettingMethod = $methods[$subject];

        $setting->data = json_encode($this->$prepareSettingMethod($request));
        $setting->slug = $subject;

        $setting->save();

        return [
            'success' => $setting->save(),
            'data' => json_decode($setting->data)
        ];
    }


    protected function _prepareAdminEmailData($request): array
    {
        return [
            'value' => (string) $request->value,
        ];
    }
    protected function _preparePhotoQualityData($request): array
    {
        $value = $request->value + 0;
        if ($value < 1 || $value > 100) {
            $value = 90;
        }
        return [
            'value' => (string) $value,
        ];
    }
    protected function _preparePaginationData($request): array
    {
        $value = $request->perPage + 0;
        if ($value < 1 || $value > 100) {
            $value = 30;
        }
        return [
            'perPage' => (string) $value,
        ];
    }
    protected function _prepareCacheLimitData($request): array
    {
        $value = $request->value + 0;
        if ($value < 1 || $value > 10000) {
            $value = 100;
        }
        return [
            'value' => (string) $value,
        ];
    }
    protected function _prepareVisibleCategoriesLimitData($request): array
    {
        $value = $request->value + 0;
        if ($value < 0 || $value > 10) {
            $value = 3;
        }
        return [
            'value' => (string) $value,
        ];
    }
    protected function _prepareMainPageSeoData($request): array
    {
        return [
            'mainPageTitle' => (string) $request->mainPageTitle,
            'mainPageDescription' => (string) $request->mainPageDescription,
        ];
    }
    protected function _prepareContactsData($request): array
    {
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


    public function getBlankSettings($subject): array
    {
        $blankSettings = [
            'contacts' => [
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
            ],
            'main_page_seo' => [
                'mainPageTitle' => '',
                'mainPageDescription' => '',
            ],
            'visible_categories_limit' => [
                'value' => 3,
            ],
            'cache_limit' => [
                'value' => 100,
            ],
            'pagination' => [
                'perPage' => 3,
            ],
            'photo_quality' => [
                'value' => 90,
            ],
            'admin_email' => [
                'value' => ''
            ],
        ];
        return $blankSettings[$subject];
    }

}

