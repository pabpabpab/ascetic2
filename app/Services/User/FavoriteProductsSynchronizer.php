<?php


namespace App\Services\User;


use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class FavoriteProductsSynchronizer
{
    /**
     * Mix front and back user favorite ids.
     *
     * @param int $userId
     * @param string $frontIdsStr
     * @return string
     */
    public function mixFrontAndBackUserFavoriteIds(int $userId, string $frontIdsStr): string
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

    /**
     * Вставка/удаление (синхронизация) products_ids в pivot table.
     *
     * @param int $userId
     * @param string $productIdsStr
     * @return string
     */
    public function synchronize(int $userId, string $productIdsStr): string
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

    /**
     * Get actual products id.
     *
     * @param string $productIdsStr
     * @return array
     */
    protected function _getActualProductIds(string $productIdsStr): array
    {
        $ids = Product::whereRaw("id IN ($productIdsStr)")->pluck('id');
        return $ids->toArray();
    }

    /**
     * Get array of integers from comma separated numbers.
     *
     * @param string $commaSeparatedNumbers
     * @return array
     */
    protected function _getArrayOfIntegers(String $commaSeparatedNumbers): array
    {
        return array_map(
            function ($value) {
                return (int) $value;
            },
            explode(",", $commaSeparatedNumbers)
        );
    }

    /**
     * Удаление всех favorite products id в pivot table.
     *
     * @param int $userId
     * @return int
     */
    public function clearAll(int $userId): int
    {
        return DB::table('users_favorite_products')
            ->where('user_id', $userId)
            ->delete();
    }
}
