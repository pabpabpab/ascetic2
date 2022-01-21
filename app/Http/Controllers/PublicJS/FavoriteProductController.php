<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\Product\FavoriteProductsListService;
use App\Services\User\FavoriteProductsSynchronizer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteProductController extends Controller
{
    public function synchronizeUserFavorites(Request $request, FavoriteProductsSynchronizer $synchronizer): JsonResponse
    {
        $user = Auth::user();
        if (blank($user)) {
            return response()->json([
                'success' => false,
                'reason' => 'userIsNotLoggedIn',
            ]);
        }


        $productIdsStr = $request->productIds ?? '';

        if (!$productIdsStr) {
            $deletedCount = $synchronizer->clearAll($user->id);
            return response()->json([
                'success' => is_numeric($deletedCount),
                'finalIds' => ''
            ]);
        }

        return response()->json([
            'success' => true,
            'finalIds' => $synchronizer->synchronize($user->id, $productIdsStr)
        ]);
    }


    // /public-js/favorite-products/offset/${settings.startOffset}
    public function getFavoriteProductsForJS(FavoriteProductsListService $service, int $startOffset): JsonResponse
    {
        $perPage = 3;
        $products = $service->getList()->offset($startOffset)->limit($perPage)->get();
        return response()->json([
            'products' => $products
        ]);
    }
}

// php artisan make:controller PublicJS/FavoriteProductController
