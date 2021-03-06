<?php


namespace App\Services\PhotoManager;


use App\Services\Settings\SettingsService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class PhotoUploader
{
    /**
     * Save uploaded files.
     *
     * @param array $files
     * @param int $productId
     * @return array
     */
    public function saveUploadedFiles(array $files, int $productId): array
    {
        //$files это элементы массива photos | $request->file('photos.'.$i)

        // считать из таблицы настроек сайта photoQuality
        $siteSetting = (new SettingsService())->getSettings('photo_quality');
        $quality = $siteSetting['value'] + 0;

        $timeNameArr = [];
        $timeName = time();

        foreach ($files as $file) {
            if ($file->isValid()) {

                $ext = $file->extension();
                if (!in_array($ext, ['jpg', 'png', 'webp'])) {
                    $ext = 'jpg';
                }

                $timeName++;

                // сохранить 6 версий разного размера этого фото, 6 - просто копия исходника
                // индекс 1 пропустить (не нужны мелкие фото)
                for ($i = 2; $i <= 6; $i++) {
                    $newFileName = $productId."s".$i."-".$timeName.".".$ext;
                    $this->_savePhotoVersion($file, $newFileName, $i, $quality);
                }

                $timeNameArr[] = $timeName.".".$ext;
            }
        }

        return $timeNameArr;
    }

    /**
     * Save photo file to disk.
     *
     * @param UploadedFile $file
     * @param string $newFileName
     * @param int $i // индекс в имени
     * @param int $quality
     * @return void
     */
    protected function _savePhotoVersion(UploadedFile $file, string $newFileName, int $i, int $quality): void
    {
        $folderName = config("my_photo.folders.size".$i);
        $fullPath = Storage::disk('public')->path($folderName."/".$newFileName);

        $my_size = config("my_photo.sizes.".$i);
        $width = (int) $my_size['width'];
        $height = (int) $my_size['height'];

        $ext = explode('.', $newFileName)[1];

        if ($i === 6) {
            Image::make($file)->save($fullPath, 100, $ext);
        } elseif ($width > 0) {
            Image::make($file)->widen($width)->save($fullPath, $quality, $ext);
        } elseif ($height > 0) {
            Image::make($file)->heighten($height)->save($fullPath, $quality, $ext);
        }
    }
}
