<?php

namespace App\Http\Controllers\AdminJS;

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
            ? $service->getBlankSettings($subject)
            : json_decode($setting->data);
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

