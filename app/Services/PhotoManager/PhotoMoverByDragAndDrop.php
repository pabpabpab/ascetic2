<?php


namespace App\Services\PhotoManager;


use App\Models\Photo;
use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;
use App\Models\Product;

class PhotoMoverByDragAndDrop
{
    use PhotoTrait;

    /**
     * Assign a position for the photo record located to the specified record.
     *
     * @param \App\Models\Product $product
     * @return array
     */
    public function movePhotoByDragAndDrop(Product $product): array
    {
        $operatedPhotoName = request()->input('operatedPhotoName');
        $targetPhotoName = request()->input('targetPhotoName');
        $vector = request()->input('vector');

        DB::beginTransaction();

        try {
            $operatedPhotoRecord = DB::table('photo')
                ->where('product_id', $product->id)
                ->where('filename', $operatedPhotoName)
                ->first();
            $operatedPhoto = Photo::find($operatedPhotoRecord->id);

            $targetPhotoRecord = DB::table('photo')
                ->where('product_id', $product->id)
                ->where('filename', $targetPhotoName)
                ->first();
            $targetPhoto = Photo::find($targetPhotoRecord->id);

            $makePlaceMethod = "_makePlace".$vector;
            $operatedPhoto->position = $this->$makePlaceMethod($product->id, $targetPhoto->position);
            $operatedPhoto->save();

            $this->_syncPhotoNamesAndAltsInProduct($product);
            // $product->refresh();

            DB::commit();
            return [
                'moveSuccess' => true,
                'photoSet' => $product->photo_set
            ];
        }
        catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\MovePhotoException',
                'MovePhotoByDragAndDropException occurs.'
            );
        }

        DB::rollback();
        return [
            'moveSuccess' => false,
            'photoSet' => ''
        ];
    }

    /**
     * Изменить значение позиций записей находящихся выше указанной позиции включая указанную позицию.
     * при векторе above
     *
     * @param int $productId
     * @param int $fromPosition
     * @return int
     */
    protected function _makePlaceAbove(int $productId, int $fromPosition): int
    {
        // сдвинуть все нижестоящие вниз, включая $fromPosition
        DB::table('photo')
            ->where('product_id', $productId)
            ->where('position', '>=', $fromPosition)
            ->update(['position' =>  DB::raw('position + 1')]); // 1 - positionStep

        // нужная позиция это позиция вместо $fromPosition
        return $fromPosition;
    }

    /**
     * Изменить значение позиций записей находящихся выше указанной позиции.
     * при векторе below
     *
     * @param int $productId
     * @param int $fromPosition
     * @return int
     */
    protected function _makePlaceBelow(int $productId, int $fromPosition): int
    {
        // сдвинуть все нижестоящие вниз
        DB::table('photo')
            ->where('product_id', $productId)
            ->where('position', '>', $fromPosition)
            ->update(['position' =>  DB::raw('position + 1')]); // 1 - positionStep

        // нужная позиция нижеследующая от $fromPosition
        return $fromPosition + 1;
    }
}
