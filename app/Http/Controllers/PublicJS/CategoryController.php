<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Category\CategoryService;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{

    /**
     * Get a listing of categories.
     *
     * @param \App\Services\Category\CategoryService $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function getEntireList(CategoryService $service): JsonResponse
    {
        $categoryModelClassName = "App\Models\Category";
        return response()->json([
            'categories' => $service->getAll($categoryModelClassName)
        ]);
    }

}

// php artisan make:controller PublicJS/CategoryController
