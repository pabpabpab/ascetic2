<?php


namespace App\Services\User;


use Illuminate\Support\Facades\DB;
use App\Models\User;

class DeleteByAdminService
{
    /**
     * Delete the specified user.
     *
     * @param \App\Models\User $user
     * @return bool
     */
    public function deleteOne(User $user): bool
    {
        DB::table('users_favorite_products')
            ->where('user_id', $user->id)
            ->delete();

        return $user->delete();
    }
}
