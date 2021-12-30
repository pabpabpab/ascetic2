<?php


namespace App\Services\User;


use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class FavoriteProductsSynchronizer
{
    public function synchronize(User $user, String $productIds): string
    {
        try {

            // вставка/удаление (синхронизация) products_ids в pivot table
            $user->favoriteProducts()->sync(
                $this->_getArrayOfIntegers($productIds)
            );
            // нет Exception, значит все ок синхронизировалось, возвращаем исходную строку
            return $productIds;

        } catch(\Exception $e) {

            $actualIdsArr = $this->_getActualProductIds($productIds);
            $user->favoriteProducts()->sync($actualIdsArr);
            return implode(",", $actualIdsArr);

        }
    }

    protected function _getActualProductIds(String $productIds): array
    {
        $ids = Product::whereRaw("id IN ($productIds)")->pluck('id');
        return $ids->toArray();
    }

    protected function _getArrayOfIntegers(String $commaSeparatedNumbers): array
    {
        return array_map(
            function ($value) {
                return (int) $value;
            },
            explode(",", $commaSeparatedNumbers)
        );
    }

    public function clearAll(User $user): int
    {
        return DB::table('users_favorite_products')
            ->where('user_id', $user->id)
            ->delete();
    }
}
