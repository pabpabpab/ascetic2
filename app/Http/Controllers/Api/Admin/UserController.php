<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserSaveRequest;
use App\Models\User;
use App\Services\User\DeleteByAdminService;
use App\Services\User\SaveByAdminService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAll(): JsonResponse
    {
        $users = User::query()->orderBy('id', 'desc')->get();
        return response()->json($users);
    }

    public function getCount(): JsonResponse
    {
        return response()->json(User::count());
    }

    public function getOne(User $user): JsonResponse
    {
        return response()->json($user);
    }

    public function delete(DeleteByAdminService $service, User $user): JsonResponse
    {
        // instance user'a в роуте как {user}
        return response()->json([
            'deleteSuccess' => $service->deleteOne($user)
        ]);
    }

    public function save(UserSaveRequest $request, SaveByAdminService $service, User $user): JsonResponse
    {
        // instance user в роуте как {user?}
        return response()->json(
            $service->saveOne($request, $user)
        );
    }



/*

    public function getLazyUsers(User $user, $lastId): JsonResponse
    {
        $users = $user->getMore($lastId)
            ->take(30);
        return response()->json($users);
    }
*/
}
