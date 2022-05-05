<?php


namespace App\Services\PhotoManager;


use App\Models\Photo;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;

trait PhotoTrait
{
    /**
     * Удалить с диска все версии фото.
     *
     * @param int $productId
     * @param string $photoName
     * @return void
     */
    protected function _deletePhotoFromDisk(int $productId, string $photoName): void
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

    /**
     * Получить массив имен фото из таблицы photo.
     *
     * @param \App\Models\Product $product
     * @return array
     */
    protected function _getPhotoNamesAndAltsAsArrays(Product $product): array
    {
        $photoNameArr = []; $photoAltArr = [];
        foreach ($product->photo as $ph) {
            $photoNameArr[] = $ph->filename;
            $photoAltArr[] = $ph->alt_text;
        }
        return [$photoNameArr, $photoAltArr];
    }

    /**
     * Сохранить массивы имен фоток и alt'ов в product в виде json.
     *
     * @param \App\Models\Product $product
     * @return bool
     */
    protected function _syncPhotoNamesAndAltsInProduct(Product $product): bool
    {
        [$photoNameArr, $photoAltArr] = $this->_getPhotoNamesAndAltsAsArrays($product);
        $product->photo_set = json_encode($photoNameArr);
        $product->photo_alt_set = json_encode($photoAltArr);
        return $product->save();
    }

    /**
     * Вставить имена фоток в таблицу photo.
     *
     * @param \App\Models\Product $product
     * @param array $photoNameArr
     * @return void
     */
    protected function _insertPhotoNamesIntoPhotoTable(Product $product, array $photoNameArr): void
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

    /**
     * Получить макс position + 1 для добавляемого фото.
     *
     * @return int
     */
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
