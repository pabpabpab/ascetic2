<?php


namespace App\Services\PhotoManager;


use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use Illuminate\Http\Request;

class PhotoAppender
{
    use PhotoTrait;

    /**
     * Append photo to the specified product.
     *
     * @param \App\Models\Product $product
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function appendPhoto(Product $product, Request $request): array
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
