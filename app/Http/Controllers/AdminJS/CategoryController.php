<?php

namespace App\Http\Controllers\AdminJS;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CategoryDeleteRequest;
use App\Http\Requests\Admin\CategorySaveRequest;
use App\Models\Category;
use App\Models\CategorySEOText;
use App\Services\Category\CategoryService;
use App\Services\Category\SeoService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * The class of the model with which actions are performed.
     *
     * @var string
     */
    protected $modelClassName = "App\Models\Category";

    /**
     * Display a listing of categories with SEO data.
     *
     * @param \App\Services\Category\CategoryService $categoryService
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAll(CategoryService $categoryService): JsonResponse
    {
        $categories = $categoryService->getAll($this->modelClassName);
        return response()->json([
            'categories' => $categories,
            'seo' => CategorySEOText::query()->get()
        ]);
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
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function getOne(Category $category): JsonResponse
    {
        // обновить products_count
        $category->products_count = $category->products()->count();
        $category->save();
        $category->trashed_products_count = $category->products()->onlyTrashed()->count();
        return response()->json($category);
    }

    /**
     * Creating a single category.
     *
     * @param  \App\Http\Requests\Admin\CategorySaveRequest  $request
     * @param \App\Services\Category\CategoryService $categoryService
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CategorySaveRequest $request, CategoryService $categoryService): JsonResponse
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

    /**
     * Update the specified category.
     *
     * @param  \App\Http\Requests\Admin\CategorySaveRequest  $request
     * @param \App\Services\Category\CategoryService $categoryService
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function save(CategorySaveRequest $request, CategoryService $categoryService, Category $category): JsonResponse
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

    /**
     * Deleting the specified category.
     *
     * @param \App\Http\Requests\Admin\CategoryDeleteRequest $request
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function delete(CategoryDeleteRequest $request, Category $category): JsonResponse
    {
        // instance категории в роуте как {category}
        $category->seoText()->delete();
        $result = $category->delete();
        return response()->json([
            'deleteSuccess' => $result,
            'category' => $category
        ]);
    }

    /**
     * Update position of the specified category.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Services\Category\CategoryService $categoryService
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * Update position of the specified category by drag-and-drop.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Services\Category\CategoryService $categoryService
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function move(Request $request, CategoryService $categoryService, Category $category): JsonResponse
    {
        // instance категории в роуте как {category}
        $result = $categoryService->move(
            $this->modelClassName,
            $category
        );

        return response()->json(['moveSuccess' => $result['success']]);
    }

    /**
     * Get SEO data of the specified category.
     *
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSeoData(Category $category): JsonResponse
    {
        return response()->json([
            'category' => $category,
            'seo' => $category->seoText,
        ]);
    }

    /**
     * Update SEO data of the specified category.
     *
     * @param \App\Services\Category\SeoService $service
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveSeoData(SeoService $service, Category $category): JsonResponse
    {
        // instance товара в роуте как {category}
        return response()->json(
            $service->saveSeoData($category)
        );
    }
}


