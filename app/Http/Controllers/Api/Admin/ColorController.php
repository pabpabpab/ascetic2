<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ColorDeleteRequest;
use App\Http\Requests\Admin\ColorSaveRequest;
use App\Models\Color;
use App\Services\CategoryService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    protected $modelClassName = "App\Models\Color";

    public function getAll(CategoryService $categoryService): JsonResponse
    {
        $colors = $categoryService->getAll($this->modelClassName);
        return response()->json($colors);
    }

    public function getCount(): JsonResponse
    {
        $count = $this->modelClassName::count();
        return response()->json($count);
    }

    public function getOne(Color $color): JsonResponse
    {
        return response()->json($color);
    }

    public function save(ColorSaveRequest $request, CategoryService $categoryService, Color $color): JsonResponse
    {
        // instance категории в роуте как {color?}
        $result = $categoryService->saveOne(
            $color,
            $this->modelClassName,
            $request->input('name')
        );

        return response()->json([
            'saveSuccess' => $result['success'],
            'category' => $result['category']
        ]);
    }

    public function delete(ColorDeleteRequest $request, Color $color): JsonResponse
    {
        // instance категории в роуте как {material}
        $result = $color->delete();

        return response()->json([
            'deleteSuccess' => $result,
            'category' => $color
        ]);
    }

    public function changePosition(Request $request, CategoryService $categoryService, Color $color): JsonResponse
    {
        // instance категории в роуте как {category}
        if ($request->input('direction') === 'up') {
            $result = $categoryService->upPosition("App\Models\Color", $color);
        } else {
            $result = $categoryService->downPosition("App\Models\Color", $color);
        }

        return response()->json(['upDownSuccess' => $result['success']]);
    }


    public function move(Request $request, CategoryService $categoryService, Color $color): JsonResponse
    {
        // instance категории в роуте как {category}
        $result = $categoryService->move(
            $this->modelClassName,
            $color
        );

        return response()->json(['moveSuccess' => $result['success']]);
    }
}
