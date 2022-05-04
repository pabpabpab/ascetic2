<?php

namespace App\Http\Controllers\AdminJS;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Services\Settings\SettingsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    /**
     * Get site settings.
     *
     * @param \App\Services\Settings\SettingsService $service
     * @param string $subject
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSettings(SettingsService $service, string $subject): JsonResponse
    {
        $setting = Setting::where('slug', $subject)->first();
        $data = blank($setting)
            ? $service->getBlankSettings($subject)
            : json_decode($setting->data);
        return response()->json($data);
    }

    /**
     * Save site settings.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Services\Settings\SettingsService $service
     * @param string $subject
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveSettings(Request $request, SettingsService $service, string $subject): JsonResponse
    {
        $result = $service->saveSettings($request, $subject);

        return response()->json([
            'saveSuccess' => $result['success'],
            'settings' => $result['data'],
        ]);
    }
}


