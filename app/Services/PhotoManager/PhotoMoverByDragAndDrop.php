<?php


namespace App\Services\PhotoManager;


use App\Models\Photo;
use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;

class PhotoMoverByDragAndDrop
{
    use PhotoTrait;

    public function movePhotoByDragAndDrop($product): array
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

            $product->photo_set = json_encode($this->_getPhotoNamesArray($product));
            $product->save();

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

    // при векторе above
    protected function _makePlaceAbove($productId, $fromPosition): int
    {
        // сдвинуть все нижестоящие вниз, включая $fromPosition
        DB::table('photo')
            ->where('product_id', $productId)
            ->where('position', '>=', $fromPosition)
            ->update(['position' =>  DB::raw('position + 1')]); // 1 - positionStep

        // нужная позиция это позиция вместо $fromPosition
        return $fromPosition;
    }

    // при векторе below
    protected function _makePlaceBelow($productId, $fromPosition): int
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
