<?php


namespace App\Services\PhotoManager;


use App\Models\Photo;
use Illuminate\Support\Facades\Storage;

trait PhotoTrait
{

    // удалить физически с диска все версии фото
    protected function _deletePhotoFromDisk($productId, $photoName)
    {
        // индекс 1 пропустить (мелкого фото нет)
        for ($i = 2; $i <= 6; $i++) {
            $fileName = $productId."s".$i."-".$photoName;
            $folderName = config("my_photo.folders.size".$i);
            $filePath = $folderName."/".$fileName;
            if (Storage::disk('public')->exists($filePath)) {
                Storage::disk('public')->delete($filePath);
            }
        }
    }

    // получить массив имен фото из таблицы photo
    protected function _getPhotoNamesAndAltsAsArrays($product): array
    {
        $photoNameArr = []; $photoAltArr = [];
        foreach ($product->photo as $ph) {
            $photoNameArr[] = $ph->filename;
            $photoAltArr[] = $ph->alt_text;
        }
        return [$photoNameArr, $photoAltArr];
    }


    // сохранить массивы имен фоток и alt'ов в product в виде json
    protected function _syncPhotoNamesAndAltsInProduct($product): bool
    {
        [$photoNameArr, $photoAltArr] = $this->_getPhotoNamesAndAltsAsArrays($product);
        $product->photo_set = json_encode($photoNameArr);
        $product->photo_alt_set = json_encode($photoAltArr);
        return $product->save();
    }



    // вставить имена фоток в таблицу photo
    protected function _insertPhotoNamesIntoPhotoTable($product, $photoNameArr)
    {
        // подготовить массив имен фоток, для вставки в таблицу photo через one-to-many
        $photos = [];
        $position = static::_calcNewPhotoPosition();
        foreach ($photoNameArr as $photoName) {
            $photos[] = ['filename' => $photoName, 'position' => $position];
            $position++;
        }
        // вставить фотки в таблицу photo, используя photo() relationship
        $product->photo()->createMany($photos);
    }

    // получить макс position + 1
    protected function _calcNewPhotoPosition(): int
    {
        if (Photo::count() === 0) {
            return 1;
        }

        $maxModel = Photo::query()
            ->orderBy('position', 'desc')
            ->first();

        return $maxModel->position + 1;
    }
}
