<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Material;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function getAll(Material $material): JsonResponse
    {
        $materials = $material->getAll();
        return response()->json($materials);
    }
}
