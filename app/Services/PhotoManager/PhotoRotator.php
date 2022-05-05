<?php


namespace App\Services\PhotoManager;


use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use App\Models\Product;

class PhotoRotator
{
    use PhotoTrait;

    /**
     * Rotating the specified photo of the specified product.
     *
     * @param \App\Models\Product $product
     * @param string $photoName
     * @param int $angle
     * @return array
     */
    public function rotatePhoto(Product $product, string $photoName, int $angle): array
    {
        $ext = explode('.', $photoName)[1];
        $newPhotoName = time().".".$ext;

        DB::beginTransaction();

        try {
            $oldPhoto =  $this->_getPhotoFile($product->id, 6, $photoName);
            if (!$oldPhoto) {
                $oldPhoto =  $this->_getPhotoFile($product->id, 5, $photoName);
            }

            $this->_rotateAndSaveImageVersionsToDisk($product->id, $newPhotoName, $oldPhoto, $angle);

            $updated = $this->_updatePhotoNameInPhotoTable($product->id, $photoName, $newPhotoName);

            if ((bool) $updated) {
                $this->_syncPhotoNamesAndAltsInProduct($product);
                //$product->refresh();
                $this->_deletePhotoFromDisk($product->id, $photoName);
            }

            DB::commit();

            return [
                'rotateSuccess' => (bool) $updated,
                'photoSet' => $product->photo_set,
                'photoSeo' => (new PhotoSeoService())->getProductPhotoSeoList($product->id),
                // прихватить seo фото товара, чтобы обновить photoSeoData на фронте, т.к. меняется filename
            ];
        }
        catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\RotatePhotoException',
                'RotatePhotoException occurs.'
            );
        }

        return [
            'rotateSuccess' => false,
            'photoSet' => ''
        ];
    }

    /**
     * Core of rotating method of the specified photo of specified product.
     *
     * @param int $productId
     * @param string $newPhotoName
     * @param string $oldPhoto
     * @param int $angle
     * @return void
     */
    protected function _rotateAndSaveImageVersionsToDisk(int $productId, string $newPhotoName, string $oldPhoto, int $angle): void
    {
        // индекс 1 пропустить (мелкого фото нет)
        for ($i = 2; $i <= 6; $i++) {
            $newFullPath =  $this->_getPhotoPath($productId, $i, $newPhotoName);

            $my_size = config("my_photo.sizes.".$i);
            $width = (int) $my_size['width'];
            $height = (int) $my_size['height'];

            $ext = explode('.', $newPhotoName)[1];

            if ($i === 6) {
                Image::make($oldPhoto)->rotate($angle)->save($newFullPath, 100, $ext);
            } elseif ($width > 0) {
                Image::make($oldPhoto)->rotate($angle)->widen($width)->save($newFullPath, 95, $ext);
            } elseif ($height > 0) {
                Image::make($oldPhoto)->rotate($angle)->heighten($height)->save($newFullPath, 95, $ext);
            }
        }
    }

    /**
     * Update photo name in photo table.
     *
     * @param int $productId
     * @param string $oldPhotoName
     * @param string $newPhotoName
     * @return int
     */
    protected function _updatePhotoNameInPhotoTable(int $productId, string $oldPhotoName, string $newPhotoName): int
    {
        return DB::table('photo')
            ->where('product_id', $productId)
            ->where('filename', $oldPhotoName)
            ->update(['filename' => $newPhotoName]);
    }

    /**
     * Get path of photo file.
     *
     * @param int $productId
     * @param int $index
     * @param string $photoName
     * @return string
     */
    protected function _getPhotoFile(int $productId, int $index, string $photoName): string
    {
        $fileName = $productId."s".$index."-".$photoName;
        $folderName = config("my_photo.folders.size".$index);
        if (Storage::disk('public')->exists($folderName."/".$fileName)) {
            return Storage::disk('public')->path($folderName."/".$fileName);
        }
        return '';
    }

    /**
     * Get path of existing photo file.
     *
     * @param int $productId
     * @param int $index
     * @param string $photoName
     * @return string
     */
    protected function _getPhotoPath(int $productId, int $index, string $photoName): string
    {
        $fileName = $productId."s".$index."-".$photoName;
        $folderName = config("my_photo.folders.size".$index);
        return Storage::disk('public')->path($folderName."/".$fileName);
    }

}
