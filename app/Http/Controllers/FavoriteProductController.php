<?php

namespace App\Http\Controllers;

use App\Models\User;
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
        $userModel = User::find($user->id);

        $productIds = $request->productIds ?? '';

        if (!$productIds) {
            return response()->json([
                'success' => (Boolean) $synchronizer->clearAll($userModel)
            ]);
        }

        $result = $synchronizer->synchronize($userModel, $productIds);
        return response()->json([
            'success' => is_array($result)
        ]);
    }
}

// php artisan make:controller FavoriteProductController
