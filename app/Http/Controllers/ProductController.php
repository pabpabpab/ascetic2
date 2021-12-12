<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Color;
use App\Models\Material;
use App\Models\Product;
use App\Models\ProductSEOText;
use App\Services\PhotoManager\PhotoSeoService;
use App\Services\Product\ListService;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function index(ListService $service)
    {
        $products = $service->getAll('active');
        return view('products.index', ['products' => $products]);
    }

    public function getByCategory(ListService $service, Category $category)
    {
        // $category определена в роуте как {category:slug}
        return view('products.index', [
            'category' => $category,
            'categorySeo' => $category->seoText,
            'products' => $category->products,
        ]);
    }

    public function getByMaterial(ListService $service, Material $material)
    {
        // $material определена в роуте как {material:slug}
        return view('products.index', [
            'category' => $material,
            'products' => $material->products,
        ]);
    }

    public function getByColor(ListService $service, Color $color)
    {
        // $color определена в роуте как {color:slug}
        return view('products.index', [
            'category' => $color,
            'products' => $color->products,
        ]);
    }

    public function getOne(PhotoSeoService $service, $slug, Product $product)
    {
        return view('products.single', [
            'product' => $product,
            'description' => $product->description,
            'seo' => $product->seoText,
            'photoSeo' => $service->getProductPhotoSeoList($product->id),
        ]);
    }

}
