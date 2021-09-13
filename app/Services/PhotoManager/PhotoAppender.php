<?php


namespace App\Services\PhotoManager;


use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;

class PhotoAppender
{
    use PhotoTrait;


    public function appendPhoto($product, $request): array
    {

        DB::beginTransaction();

        try {
            $additionalPhotoNameArr = (new PhotoUploader())->saveUploadedFiles(
                $request->file('photos'),
                $product->id
            );


            if ($additionalPhotoNameArr) {
                $this->_insertPhotoNamesIntoPhotoTable($product, $additionalPhotoNameArr);


                $this->_syncPhotoNamesAndAltsInProduct($product);
                // $product->refresh();


                DB::commit();

                return [
                    'addSuccess' => true,
                    'photoSet' => $product->photo_set
                ];
            }

            DB::rollback();
            return [
                'addSuccess' => false,
                'photoSet' => ''
            ];

        }
        catch (\Exception $exception) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $exception,
                '\App\Exceptions\AppendPhotoException',
                'AppendPhotoException occurs.'
            );
        }

        return [
            'addSuccess' => false,
            'photoSet' => ''
        ];
    }

}
