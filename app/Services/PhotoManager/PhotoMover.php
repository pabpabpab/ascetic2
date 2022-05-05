<?php


namespace App\Services\PhotoManager;


use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use Illuminate\Database\Eloquent\Model;

class PhotoMover
{
    use PhotoTrait;

    /**
     * Change position value of the specified photo of the specified product.
     *
     * @param \App\Models\Product $product
     * @param string $photoName
     * @param string $to
     * @return array
     */
    public function movePhoto(Product $product, string $photoName, string $to): array
    {
        $direction = [
            'up' => ['sign' => '<', 'order' => 'desc'],
            'down' => ['sign' => '>', 'order' => 'asc'],
            'first' => ['sign' => '<', 'order' => 'asc'],
        ];

        DB::beginTransaction();

        try {
            $operatedPhotoRecord = DB::table('photo')
                ->where('product_id', $product->id)
                ->where('filename', $photoName)
                ->first();

            $occupiedPhotoRecord = DB::table('photo')
                ->where('product_id', $product->id)
                ->where('position', $direction[$to]['sign'], $operatedPhotoRecord->position)
                ->orderBy('position', $direction[$to]['order'])
                ->first();

            $exchangeResult = $this->_exchangePhotosPosition($operatedPhotoRecord, $occupiedPhotoRecord);

            if ($exchangeResult) {
                $this->_syncPhotoNamesAndAltsInProduct($product);

                DB::commit();
                return [
                    'moveSuccess' => true,
                    'photoSet' => $product->photo_set
                ];
            }

            DB::rollback();
            return [
                'moveSuccess' => false,
                'photoSet' => ''
            ];
        }
        catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\MovePhotoException',
                'MovePhotoException occurs.'
            );
        }

        return [
            'moveSuccess' => false,
            'photoSet' => ''
        ];
    }

    /**
     * Exchange of position values between two specified photo records.
     *
     * @param \App\Models\Product $product
     * @param object $operatedPhotoRecord
     * @param object $occupiedPhotoRecord
     * @return array
     */
    protected function _exchangePhotosPosition(object $operatedPhotoRecord, object $occupiedPhotoRecord): bool
    {
        $affected1 = DB::table('photo')
            ->where('id', $occupiedPhotoRecord->id)
            ->update(['position' =>  $operatedPhotoRecord->position]);

        $affected2 = DB::table('photo')
            ->where('id', $operatedPhotoRecord->id)
            ->update(['position' =>  $occupiedPhotoRecord->position]);

        return $affected1 === 1 && $affected2 === 1;
    }
}
