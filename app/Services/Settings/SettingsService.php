<?php

namespace App\Services\Settings;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingsService
{
    /**
     * Get settings by subject.
     *
     * @param string $subject
     * @return array
     */
    public function getSettings(string $subject): array
    {
        $setting = Setting::where('slug', $subject)->first();
        $data = blank($setting)
            ? $this->getBlankSettings($subject)
            : json_decode($setting->data);

        return (array) $data;
    }

    /**
     * Save settings by subject.
     *
     * @param string $subject
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function saveSettings(Request $request, string $subject): array
    {
        $setting = Setting::where('slug', $subject)->first();
        $setting = blank($setting) ? new Setting() : $setting;

        $methods = [
            'contacts' => '_prepareContactsData',
            'main_page_seo' => '_prepareMainPageSeoData',
            'visible_categories_limit' => '_prepareVisibleCategoriesLimitData',
            'cache_limit' => '_prepareCacheLimitData',
            'scroll_speed_ratio' => '_prepareScrollSpeedRatioData',
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

    /**
     * Prepare admin email data.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    protected function _prepareAdminEmailData(Request $request): array
    {
        return [
            'value' => (string) $request->value,
        ];
    }

    /**
     * Prepare photo quality data.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    protected function _preparePhotoQualityData(Request $request): array
    {
        $value = $request->value + 0;
        if ($value < 1 || $value > 100) {
            $value = 90;
        }
        return [
            'value' => (string) $value,
        ];
    }

    /**
     *  Prepare pagination data.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    protected function _preparePaginationData(Request $request): array
    {
        $value = $request->perPage + 0;
        if ($value < 1 || $value > 100) {
            $value = 30;
        }
        return [
            'perPage' => (string) $value,
        ];
    }

    /**
     * Prepare cache limit data.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    protected function _prepareCacheLimitData(Request $request): array
    {
        $value = $request->value + 0;
        if ($value < 1 || $value > 10000) {
            $value = 100;
        }
        return [
            'value' => (string) $value,
        ];
    }

    /**
     * Prepare scroll speed ratio data.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    protected function _prepareScrollSpeedRatioData(Request $request): array
    {
        $value = $request->value + 0;
        if ($value < 3 || $value > 1000) {
            $value = 75;
        }
        return [
            'value' => (string) $value,
        ];
    }

    /**
     * Prepare visible categories limit data.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    protected function _prepareVisibleCategoriesLimitData(Request $request): array
    {
        $value = $request->value + 0;
        if ($value < 0 || $value > 10) {
            $value = 3;
        }
        return [
            'value' => (string) $value,
        ];
    }

    /**
     * Prepare main page seo data.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    protected function _prepareMainPageSeoData(Request $request): array
    {
        return [
            'mainPageTitle' => (string) $request->mainPageTitle,
            'mainPageDescription' => (string) $request->mainPageDescription,
        ];
    }

    /**
     * Prepare contacts data.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    protected function _prepareContactsData(Request $request): array
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

    /**
     * Get blank settings.
     *
     * @param string $subject
     * @return array
     */
    public function getBlankSettings(string $subject): array
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
            'scroll_speed_ratio' => [
                'value' => 75,
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

