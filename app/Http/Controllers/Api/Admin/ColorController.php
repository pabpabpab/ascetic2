<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Color;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    public function getAll(Color $color): JsonResponse
    {
        $colors = $color->getAll();
        return response()->json($colors);
    }
}
