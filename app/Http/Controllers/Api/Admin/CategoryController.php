<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminCategoryDeleteRequest;
use App\Http\Requests\AdminCategorySaveRequest;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAll(Category $category): JsonResponse
    {
        $categories = $category->getAll();
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



    public function save(AdminCategorySaveRequest $request, Category $category): JsonResponse
    {
        // instance категории в роуте как {category?}
        $result = $category->saveOne(
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



    /*
    public function save(AdminCategorySaveRequest $request, Category $category, $id = 0): JsonResponse
    {
        $result = $category->saveOne(
            $request->input('name'),
            $id
        );

        return response()->json([
            'saveSuccess' => $result['success'],
            'category' => $result['category']
        ]);
    }



    public function save(Category $category): JsonResponse
    {
        dd($request);

        $result = $category->saveOne(
            $request->input()
        );

        return response()->json(['result' => $result]);
    }


    */
}
