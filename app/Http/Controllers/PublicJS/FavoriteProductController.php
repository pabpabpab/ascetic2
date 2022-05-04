<?php

namespace App\Http\Controllers\PublicJS;

use App\Http\Controllers\Controller;
use App\Services\Product\FavoriteProductsListService;
use App\Services\Settings\SettingsService;
use App\Services\User\FavoriteProductsSynchronizer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteProductController extends Controller
{
    /**
     * Synchronize user favorites.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Services\User\FavoriteProductsSynchronizer $synchronizer
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * Get list of favorite products.
     * /public-js/favorite-products/sort/${sortMode}/offset/${startOffset}
     *
     * @param \App\Services\Product\FavoriteProductsListService $service
     * @param string $sortValue
     * @param int $startOffset
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFavoriteProductsForJS(FavoriteProductsListService $service, string $sortValue, int $startOffset): JsonResponse
    {
        $perPage = (new SettingsService())->getSettings('pagination')['perPage'];
        $products = $service->getList($sortValue)->offset($startOffset)->limit($perPage)->get();
        $sectionProductsCount = $service->getList()->count();

        return response()->json([
            'products' => $products,
            'sectionProductsCount' => $sectionProductsCount
        ]);
    }

}

// php artisan make:controller PublicJS/FavoriteProductController
