<?php


namespace App\Services\User;


use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class FavoriteProductsSynchronizer
{

    public function mixFrontAndBackUserFavoriteIds(Int $userId, String $frontIdsStr): String
    {
        $user = User::find($userId);

        $frontIdsArr = $this->_getArrayOfIntegers($frontIdsStr);

        $backIdsCollection = $user->favoriteProducts()->pluck('products.id');
        $backIdsArr = $backIdsCollection->toArray();

        $mixedIdsArr = array_merge($frontIdsArr, $backIdsArr);
        $mixedIdsArr = array_unique($mixedIdsArr, SORT_NUMERIC);

        try {
            $user->favoriteProducts()->sync($mixedIdsArr);
            // нет Exception, значит все ок синхронизировалось
            return implode(",", $mixedIdsArr);
        } catch(\Exception $e) {
            $idsStr = implode(",", $mixedIdsArr);
            $actualIdsArr = $this->_getActualProductIds($idsStr);
            $user->favoriteProducts()->sync($actualIdsArr);
            return implode(",", $actualIdsArr);
        }
    }


    public function synchronize(Int $userId, String $productIdsStr): string
    {
        $user = User::find($userId);

        try {

            // вставка/удаление (синхронизация) products_ids в pivot table
            $user->favoriteProducts()->sync(
                $this->_getArrayOfIntegers($productIdsStr)
            );
            // нет Exception, значит все ок синхронизировалось, возвращаем исходную строку
            return $productIdsStr;

        } catch(\Exception $e) {

            $actualIdsArr = $this->_getActualProductIds($productIdsStr);
            $user->favoriteProducts()->sync($actualIdsArr);
            return implode(",", $actualIdsArr);

        }
    }

    protected function _getActualProductIds(String $productIdsStr): array
    {
        $ids = Product::whereRaw("id IN ($productIdsStr)")->pluck('id');
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

    public function clearAll(Int $userId): int
    {
        return DB::table('users_favorite_products')
            ->where('user_id', $userId)
            ->delete();
    }
}
