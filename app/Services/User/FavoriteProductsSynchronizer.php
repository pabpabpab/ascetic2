<?php


namespace App\Services\User;


use App\Models\User;
use Illuminate\Support\Facades\DB;

class FavoriteProductsSynchronizer
{
    public function synchronize(User $user, String $productIds): array
    {
        // вставка/удаление (синхронизация) products_ids в pivot table
        return $user->favoriteProducts()->sync(
            $this->_getArrayOfIntegers($productIds)
        );
    }

    protected function _getArrayOfIntegers(String $dashSeparatedNumbers): array
    {
        return array_map(
            function ($value) {
                return (int) $value;
            },
            explode("-", $dashSeparatedNumbers)
        );
    }

    public function clearAll(User $user): int
    {
        return DB::table('users_favorite_products')
            ->where('user_id', $user->id)
            ->delete();
    }
}
