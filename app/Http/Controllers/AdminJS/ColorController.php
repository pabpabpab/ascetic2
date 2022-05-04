<?php

namespace App\Http\Controllers\AdminJS;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ColorDeleteRequest;
use App\Http\Requests\Admin\ColorSaveRequest;
use App\Models\Color;
use App\Services\Category\CategoryService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    /**
     * The class of the model with which actions are performed.
     *
     * @var string
     */
    protected $modelClassName = "App\Models\Color";

    /**
     * Display a listing of categories with SEO data.
     *
     * @param \App\Services\Category\CategoryService $categoryService
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAll(CategoryService $categoryService): JsonResponse
    {
        $colors = $categoryService->getAll($this->modelClassName);
        return response()->json($colors);
    }

    /**
     * Get count of categories.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCount(): JsonResponse
    {
        $count = $this->modelClassName::count();
        return response()->json($count);
    }

    /**
     * Get single category data.
     *
     * @param \App\Models\Color $color
     * @return \Illuminate\Http\JsonResponse
     */
    public function getOne(Color $color): JsonResponse
    {
        // обновить products_count
        $color->products_count = $color->products()->count();
        $color->save();
        return response()->json($color);
    }

    /**
     * Creating a single category.
     *
     * @param  \App\Http\Requests\Admin\ColorSaveRequest  $request
     * @param \App\Services\Category\CategoryService $categoryService
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(ColorSaveRequest $request, CategoryService $categoryService): JsonResponse
    {
        // instance категории в роуте как {color?}
        $result = $categoryService->createOne(
            $this->modelClassName,
            $request->input('name')
        );

        return response()->json([
            'saveSuccess' => $result['success'],
            'category' => $result['category']
        ]);
    }

    /**
     * Update the specified category.
     *
     * @param  \App\Http\Requests\Admin\ColorSaveRequest  $request
     * @param \App\Services\Category\CategoryService $categoryService
     * @param \App\Models\Color $color
     * @return \Illuminate\Http\JsonResponse
     */
    public function save(ColorSaveRequest $request, CategoryService $categoryService, Color $color): JsonResponse
    {
        // instance категории в роуте как {color?}
        $result = $categoryService->saveOne(
            $color,
            $request->input('name')
        );

        return response()->json([
            'saveSuccess' => $result['success'],
            'category' => $result['category']
        ]);
    }

    /**
     * Deleting the specified category.
     *
     * @param \App\Http\Requests\Admin\ColorDeleteRequest $request
     * @param \App\Models\Color $color
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function delete(ColorDeleteRequest $request, Color $color): JsonResponse
    {
        // instance категории в роуте как {color}
        $result = $color->delete();

        return response()->json([
            'deleteSuccess' => $result,
            'category' => $color
        ]);
    }

    /**
     * Update position of the specified category.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Services\Category\CategoryService $categoryService
     * @param \App\Models\Color $color
     * @return \Illuminate\Http\JsonResponse
     */
    public function changePosition(Request $request, CategoryService $categoryService, Color $color): JsonResponse
    {
        // instance категории в роуте как {color}
        if ($request->input('direction') === 'up') {
            $result = $categoryService->upPosition("App\Models\Color", $color);
        } else {
            $result = $categoryService->downPosition("App\Models\Color", $color);
        }

        return response()->json(['upDownSuccess' => $result['success']]);
    }

    /**
     * Update position of the specified category by drag-and-drop.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Services\Category\CategoryService $categoryService
     * @param \App\Models\Color $color
     * @return \Illuminate\Http\JsonResponse
     */
    public function move(Request $request, CategoryService $categoryService, Color $color): JsonResponse
    {
        // instance категории в роуте как {color}
        $result = $categoryService->move(
            $this->modelClassName,
            $color
        );

        return response()->json(['moveSuccess' => $result['success']]);
    }
}
