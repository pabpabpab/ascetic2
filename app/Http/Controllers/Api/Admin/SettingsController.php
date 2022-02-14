<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Services\Settings\SettingsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function getSettings($subject): JsonResponse
    {
        $data = [
            'contacts' => config("my_site.contacts"),
            'mainPageSeo' => config("my_site.mainPageSeo"),
            'pagination' => config("my_site.pagination"),
            'cacheLimit' => config("my_site.cacheLimit"),
            'photoQuality' => config("my_photo.photoQuality"),
            'adminEmail' => env('ADMIN_EMAIL'),
        ];

        // contacts|mainPageSeo|pagination|cacheLimit|photoQuality|adminEmail
        return response()->json($data[$subject]);
    }



    public function saveSettings(Request $request, SettingsService $service, $subject): JsonResponse
    {
        $result  = $service->saveSettings($request, $subject);
        // contacts|mainPageSeo|pagination|cacheLimit|photoQuality|adminEmail

        $data = [
            'contacts' => config("my_site.contacts"),
            'mainPageSeo' => config("my_site.mainPageSeo"),
            'pagination' => config("my_site.pagination"),
            'cacheLimit' => config("my_site.cacheLimit"),
            'photoQuality' => config("my_photo.photoQuality"),
            'adminEmail' => env('ADMIN_EMAIL'),
        ];



        return response()->json([
            'saveSuccess' => $result,
            'settings' => $data[$subject],
        ]);
    }




}


// php artisan make:controller Api/Admin/SettingsController
