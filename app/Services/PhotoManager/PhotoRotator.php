<?php


namespace App\Services\PhotoManager;


use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class PhotoRotator
{
    use PhotoTrait;


    public function rotatePhoto($product, $photoName, $angle): array
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
                'photoSet' => $product->photo_set
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


    protected function _rotateAndSaveImageVersionsToDisk($productId, $newPhotoName, $oldPhoto, $angle)
    {
        for ($i = 1; $i <= 6; $i++) {
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



    protected function _updatePhotoNameInPhotoTable($productId, $oldPhotoName, $newPhotoName): int
    {
        return DB::table('photo')
            ->where('product_id', $productId)
            ->where('filename', $oldPhotoName)
            ->update(['filename' => $newPhotoName]);
    }



    protected function _getPhotoFile($productId, $index, $photoName): string
    {
        $fileName = $productId."s".$index."-".$photoName;
        $folderName = config("my_photo.folders.size".$index);
        if (Storage::disk('public')->exists($folderName."/".$fileName)) {
            return Storage::disk('public')->path($folderName."/".$fileName);
        }
        return '';
    }


    protected function _getPhotoPath($productId, $index, $photoName): string
    {
        $fileName = $productId."s".$index."-".$photoName;
        $folderName = config("my_photo.folders.size".$index);
        return Storage::disk('public')->path($folderName."/".$fileName);
    }

}
