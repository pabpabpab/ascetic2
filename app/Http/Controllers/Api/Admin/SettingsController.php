<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Services\Settings\SettingsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function getSettings(SettingsService $service, $subject): JsonResponse
    {
        $setting = Setting::where('slug', $subject)->first();
        $data = blank($setting)
            ? $service->getBlankSetting($subject)
            : json_decode($setting->data);
        // contacts|mainPageSeo|pagination|cacheLimit|photoQuality|adminEmail
        return response()->json($data);
    }



    public function saveSettings(Request $request, SettingsService $service, $subject): JsonResponse
    {



        $result = $service->saveSettings($request, $subject);


        return response()->json([
            'saveSuccess' => $result['success'],
            'settings' => $result['data'],
        ]);
    }




}


// php artisan make:controller Api/Admin/SettingsController


/*
 *
        $data = [
            'contacts' => config("my_site.contacts"),
            'mainPageSeo' => config("my_site.mainPageSeo"),
            'pagination' => config("my_site.pagination"),
            'cacheLimit' => config("my_site.cacheLimit"),
            'photoQuality' => config("my_photo.photoQuality"),
            'adminEmail' => env('ADMIN_EMAIL'),
        ];
 */
