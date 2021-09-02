<?php


namespace App\Services\Product;


use App\Models\Product;
use Illuminate\Support\Facades\DB;

class MoveService
{
    public function move($operatedProduct): array
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

    // при векторе above
    protected function _makePlaceAbove($fromPosition): int
    {
        // сдвинуть все вышестоящие вверх
        DB::table('products')
            ->where('position', '>', $fromPosition)
            ->update(['position' =>  DB::raw('position + 1')]); // 1 - positionStep

        // нужная позиция вышеследующая от $fromPosition
        return $fromPosition + 1;
    }

    // при векторе below
    protected function _makePlaceBelow($fromPosition): int
    {
        // сдвинуть все вышестоящие вверх, включая $fromPosition
        DB::table('products')
            ->where('position', '>=', $fromPosition)
            ->update(['position' =>  DB::raw('position + 1')]); // 1 - positionStep

        // нужная позиция вышеследующая это позиция вместо $fromPosition
        return $fromPosition;
    }
}
