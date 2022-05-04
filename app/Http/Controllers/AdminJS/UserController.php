<?php

namespace App\Http\Controllers\AdminJS;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserSaveRequest;
use App\Models\User;
use App\Services\User\DeleteByAdminService;
use App\Services\User\SaveByAdminService;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    /**
     * Get all users.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAll(): JsonResponse
    {
        $users = User::query()->orderBy('id', 'desc')->get();
        return response()->json($users);
    }

    /**
     * Get count of users.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCount(): JsonResponse
    {
        return response()->json(User::count());
    }

    /**
     * Get one user.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getOne(User $user): JsonResponse
    {
        return response()->json($user);
    }

    /**
     * Deleting the specified user.
     *
     * @param \App\Services\User\DeleteByAdminService
     * @param \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(DeleteByAdminService $service, User $user): JsonResponse
    {
        // instance user'a в роуте как {user}
        return response()->json([
            'deleteSuccess' => $service->deleteOne($user)
        ]);
    }

    /**
     * Creating user.
     *
     * @param  \App\Http\Requests\Admin\UserSaveRequest  $request
     * @param \App\Services\User\SaveByAdminService $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(UserSaveRequest $request, SaveByAdminService $service): JsonResponse
    {
        // instance user в роуте как {user?}
        return response()->json(
            $service->saveOne($request)
        );
    }

    /**
     * Updating the specified user.
     *
     * @param  \App\Http\Requests\Admin\UserSaveRequest  $request
     * @param \App\Services\User\SaveByAdminService $service
     * @param \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function save(UserSaveRequest $request, SaveByAdminService $service, User $user): JsonResponse
    {
        // instance user в роуте как {user?}
        return response()->json(
            $service->saveOne($request, $user)
        );
    }
}
