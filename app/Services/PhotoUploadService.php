<?php


namespace App\Services;


use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class PhotoUploadService
{

    public function saveUploadedFiles($files, $productId): array {

        //$files // они там элементы массива photos | $request->file('photos.'.$i)

        $timeNameArr = [];
        $timeName = time();

        foreach ($files as $file) {
            if ($file->isValid()) {

                $ext = $file->extension();
                if (!in_array($ext, ['jpg', 'png', 'webp'])) {
                    $ext = 'jpg';
                }

                $timeName++;

                // сохранить 5 версий разного размера этого фото
                for ($i = 1; $i <= 5; $i++) {
                    $newFileName = $productId."s".$i."-".$timeName.".".$ext;
                    $this->_savePhotoVersion($file, $newFileName, $i);
                }

                $timeNameArr[] = $timeName.".".$ext;
            }
        }

        return $timeNameArr;
    }


    protected function _savePhotoVersion($file, $newFileName, $i) {
        $folderName = config("my_photo.folders.size".$i);
        $fullPath = Storage::disk('public')->path($folderName."/".$newFileName);

        $my_size = config("my_photo.sizes.".$i);
        $width = (int) $my_size['width'];
        $height = (int) $my_size['height'];

        $ext = explode('.', $newFileName)[1];

        if ($width > 0) {
            Image::make($file)->widen($width)->save($fullPath, 95, $ext);
        } elseif ($height > 0) {
            Image::make($file)->heighten($height)->save($fullPath, 95, $ext);
        }
    }

    /*
        //$path = Storage::disk('public')->putFileAs($folderName, $file, $newFileName);
        //$fullPath = Storage::disk('public')->path($path);

        if ($width > 0) {
            Image::make($fullPath)->widen($width)->save(null, 95);
        } elseif ($height > 0) {
            Image::make($fullPath)->heighten($height)->save(null, 95);
        }
   */

}
