<?php


namespace App\Services\PhotoManager;


use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;

class PhotoMover
{
    use PhotoTrait;

    public function movePhoto($product, $photoName, $to): array
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

            $exchangeResult = $this->_exchangePhotoNames($operatedPhotoRecord, $occupiedPhotoRecord);

            if ($exchangeResult) {
                $product->photo_set = json_encode($this->_getPhotoNamesArray($product));
                $product->save();

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


    protected function _exchangePhotoNames($operatedPhotoRecord, $occupiedPhotoRecord): int
    {
        $affected1 = DB::table('photo')
            ->where('id', $occupiedPhotoRecord->id)
            ->update(['filename' =>  $operatedPhotoRecord->filename]);

        $affected2 = DB::table('photo')
            ->where('id', $operatedPhotoRecord->id)
            ->update(['filename' =>  $occupiedPhotoRecord->filename]);

        return $affected1 === 1 && $affected2 === 1;
    }
}
