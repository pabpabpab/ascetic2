<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CategoryDeleteRequest;
use App\Http\Requests\Admin\CategorySaveRequest;
use App\Models\Category;
use App\Services\CategoryService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    protected $modelClassName = "App\Models\Category";


    public function getAll(CategoryService $categoryService): JsonResponse
    {
        $categories = $categoryService->getAll($this->modelClassName);
        return response()->json($categories);
    }

    public function getCount(): JsonResponse
    {
        $count = $this->modelClassName::count();
        return response()->json($count);
    }

    public function getOne(Category $category): JsonResponse
    {
        return response()->json($category);
    }



    public function save(CategorySaveRequest $request, CategoryService $categoryService, Category $category): JsonResponse
    {
        // instance категории в роуте как {category?}
        $result = $categoryService->saveOne(
            $category,
            $this->modelClassName,
            $request->input('name')
        );

        return response()->json([
            'saveSuccess' => $result['success'],
            'category' => $result['category']
        ]);
    }

    public function delete(CategoryDeleteRequest $request, Category $category): JsonResponse
    {
        // instance категории в роуте как {category}
        $result = $category->delete();

        return response()->json([
            'deleteSuccess' => $result,
            'category' => $category
        ]);
    }

    public function changePosition(Request $request, CategoryService $categoryService, Category $category): JsonResponse
    {
        // instance категории в роуте как {category}
        if ($request->input('direction') === 'up') {
            $result = $categoryService->upPosition($this->modelClassName, $category);
        } else {
            $result = $categoryService->downPosition($this->modelClassName, $category);
        }

        return response()->json(['upDownSuccess' => $result['success']]);
    }

}
