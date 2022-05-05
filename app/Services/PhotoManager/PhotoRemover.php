<?php


namespace App\Services\PhotoManager;


use App\Models\Photo;
use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;
use App\Models\Product;

class PhotoRemover
{
    use PhotoTrait;

    /**
     * Deleting of the specified photo of the specified product.
     *
     * @param \App\Models\Product $product
     * @param string $photoName
     * @return array
     */
    public function deletePhoto(Product $product, string $photoName): array
    {
        DB::beginTransaction();

        try {
            $deleteResult = $this->_deletePhotoFromPhotoTable($product, $photoName);

            $this->_syncPhotoNamesAndAltsInProduct($product);
            // $product->refresh();

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


    /**
     * Deleting of the specified photo record of the specified product,
     * and deleting seo data of the specified photo.
     *
     * @param \App\Models\Product $product
     * @param string $photoName
     * @return int
     */
    protected function _deletePhotoFromPhotoTable(Product $product, string $photoName): int
    {
        $photoRecord = DB::table('photo')
            ->where('product_id', $product->id)
            ->where('filename', $photoName)
            ->first();

        $photo = Photo::find($photoRecord->id);

        $photo->seoText()->delete();
        return $photo->delete();
    }
}
