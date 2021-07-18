<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminCategoryDeleteRequest;
use App\Http\Requests\AdminCategorySaveRequest;
use App\Models\Category;
use App\Services\CategoryService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAll(CategoryService $categoryService, Category $category): JsonResponse
    {
        $categories = $categoryService->getAll();
        return response()->json($categories);
    }

    public function getCount(): JsonResponse
    {
        $count = Category::count();
        return response()->json($count);
    }

    public function getOne(Category $category): JsonResponse
    {
        return response()->json($category);
    }



    public function save(AdminCategorySaveRequest $request, CategoryService $categoryService, Category $category): JsonResponse
    {
        // instance категории в роуте как {category?}
        $result = $categoryService->saveOne(
            $category,
            $request->input('name')
        );

        return response()->json([
            'saveSuccess' => $result['success'],
            'category' => $result['category']
        ]);
    }

    public function delete(AdminCategoryDeleteRequest $request, Category $category): JsonResponse
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
            $result = $categoryService->upPosition($category);
        } else {
            $result = $categoryService->downPosition($category);
        }

        return response()->json(['upDownSuccess' => $result['success']]);
    }

    /*
    public function downPosition(CategoryService $categoryService, Category $category): JsonResponse
    {
        // instance категории в роуте как {category}
        $result = $categoryService->downPosition($category);

        return response()->json(['upDownSuccess' => $result['success']]);
    }
*/
}
