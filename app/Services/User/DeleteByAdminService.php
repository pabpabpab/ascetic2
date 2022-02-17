<?php


namespace App\Services\User;


use Illuminate\Support\Facades\DB;

class DeleteByAdminService
{
    public function deleteOne($user): bool
    {
        DB::table('users_favorite_products')
            ->where('user_id', $user->id)
            ->delete();

        return $user->delete();
    }
}
