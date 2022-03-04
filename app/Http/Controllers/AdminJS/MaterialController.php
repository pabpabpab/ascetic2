<?php

namespace App\Http\Controllers\AdminJS;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MaterialDeleteRequest;
use App\Http\Requests\Admin\MaterialSaveRequest;
use App\Models\Material;
use App\Services\Category\CategoryService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    protected $modelClassName = "App\Models\Material";

    public function getAll(CategoryService $categoryService): JsonResponse
    {
        $materials = $categoryService->getAll($this->modelClassName);
        return response()->json($materials);
    }

    public function getCount(): JsonResponse
    {
        $count = $this->modelClassName::count();
        return response()->json($count);
    }

    public function getOne(Material $material): JsonResponse
    {
        // обновить products_count
        $material->products_count = $material->products()->count();
        $material->save();
        return response()->json($material);
    }

    public function create(MaterialSaveRequest $request, CategoryService $categoryService): JsonResponse
    {
        // instance категории в роуте как {category?}
        $result = $categoryService->createOne(
            $this->modelClassName,
            $request->input('name')
        );

        return response()->json([
            'saveSuccess' => $result['success'],
            'category' => $result['category']
        ]);
    }

    public function save(MaterialSaveRequest $request, CategoryService $categoryService, Material $material): JsonResponse
    {
        // instance категории в роуте как {material?}
        $result = $categoryService->saveOne(
            $material,
            $request->input('name')
        );

        return response()->json([
            'saveSuccess' => $result['success'],
            'category' => $result['category']
        ]);
    }

    public function delete(MaterialDeleteRequest $request, Material $material): JsonResponse
    {
        // instance категории в роуте как {material}
        $result = $material->delete();

        return response()->json([
            'deleteSuccess' => $result,
            'category' => $material
        ]);
    }

    public function changePosition(Request $request, CategoryService $categoryService, Material $material): JsonResponse
    {
        // instance категории в роуте как {category}
        if ($request->input('direction') === 'up') {
            $result = $categoryService->upPosition($this->modelClassName, $material);
        } else {
            $result = $categoryService->downPosition($this->modelClassName, $material);
        }

        return response()->json(['upDownSuccess' => $result['success']]);
    }


    public function move(Request $request, CategoryService $categoryService, Material $material): JsonResponse
    {
        // instance категории в роуте как {category}
        $result = $categoryService->move(
            $this->modelClassName,
            $material
        );

        return response()->json(['moveSuccess' => $result['success']]);
    }
}
