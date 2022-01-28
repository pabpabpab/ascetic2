<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Services\Category\CategoryService;
use App\Services\Product\ListService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function getEntireList(CategoryService $service): JsonResponse
    {
        $categoryModelClassName = "App\Models\Category";
        return response()->json([
            'categories' => $service->getAll($categoryModelClassName)
        ]);
    }

}

// php artisan make:controller PublicJS/CategoryController
