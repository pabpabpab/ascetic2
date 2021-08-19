<?php


namespace App\Services\PhotoManager;


use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;

class PhotoRemover
{
    use PhotoTrait;

    public function deletePhoto($product, $photoName): array
    {
        DB::beginTransaction();

        try {
            $deleteResult = $this->_deletePhotoFromPhotoTable($product, $photoName);
            $product->photo_set = json_encode($this->_getPhotoNamesArray($product));
            $product->save();

            if ((bool) $deleteResult) {
                $this->_deletePhotoFromDisk($product->id, $photoName);
            }

            DB::commit();

            return [
                'deleteSuccess' => (bool) $deleteResult,
                'photoSet' => $product->photo_set
            ];
        }
        catch (\Exception $exception) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $exception,
                '\App\Exceptions\DeletePhotoException',
                'DeletePhotoException occurs.'
            );
        }

        return [
            'deleteSuccess' => false,
            'photoSet' => ''
        ];
    }



    protected function _deletePhotoFromPhotoTable($product, $photoName): int
    {
        return DB::table('photo')
            ->where('product_id', $product->id)
            ->where('filename', $photoName)
            ->delete();
    }
}
