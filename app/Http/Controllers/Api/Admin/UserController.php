<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAll(User $user): JsonResponse
    {
        $users = $user->getAll();
        return response()->json($users);
    }

    public function getLazyUsers(User $user, $lastId): JsonResponse
    {
        $users = $user->getMore($lastId)
            ->take(30);
        return response()->json($users);
    }

    public function getCount(): JsonResponse
    {
        $count = User::count();
        return response()->json($count);
    }

    public function getOne(User $user): JsonResponse
    {
        return response()->json($user);
    }


    public function update(Request $request, User $user): JsonResponse
    {
        $result = $user->updateRole(
            $request->input('role')
        );

        return response()->json([
            'updateSuccess' => $result['success'],
            'user' => $result['user']
        ]);
    }

}
