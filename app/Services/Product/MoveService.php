<?php


namespace App\Services\Product;


use App\Models\Product;
use Illuminate\Support\Facades\DB;

class MoveService
{
    /**
     * Move specified product to the target id.
     *
     * @param \App\Models\Product $operatedProduct
     * @return array
     */
    public function move(Product $operatedProduct): array
    {
        $targetId = request()->input('targetId');
        $vector = request()->input('vector');

        $targetPosition = Product::find($targetId)->position;

        $makePlaceMethod = "_makePlace".$vector;

        $operatedProduct->position = $this->$makePlaceMethod($targetPosition);

        return [
            'success' => $operatedProduct->save()
        ];
    }

    /**
     * Изменить значение позиций записей находящихся выше указанной позиции.
     * при векторе above
     *
     * @param int $fromPosition
     * @return int
     */
    protected function _makePlaceAbove(int $fromPosition): int
    {
        // сдвинуть все вышестоящие вверх
        DB::table('products')
            ->where('position', '>', $fromPosition)
            ->update(['position' =>  DB::raw('position + 1')]); // 1 - positionStep

        // нужная позиция вышеследующая от $fromPosition
        return $fromPosition + 1;
    }

    /**
     * Изменить значение позиций записей находящихся выше указанной позиции включая указанную позицию.
     * при векторе below
     *
     * @param int $fromPosition
     * @return int
     */
    protected function _makePlaceBelow(int $fromPosition): int
    {
        // сдвинуть все вышестоящие вверх, включая $fromPosition
        DB::table('products')
            ->where('position', '>=', $fromPosition)
            ->update(['position' =>  DB::raw('position + 1')]); // 1 - positionStep

        // нужная позиция вышеследующая это позиция вместо $fromPosition
        return $fromPosition;
    }
}
