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
            $deletedCount = $synchronizer->clearAll($userModel);
            return response()->json([
                'success' => is_numeric($deletedCount),
                'finalIds' => ''
            ]);
        }

        return response()->json([
            'success' => true,
            'finalIds' => $synchronizer->synchronize($userModel, $productIds)
        ]);
    }
}

// php artisan make:controller FavoriteProductController
