<?php


namespace App\Services\PhotoManager;


use App\Models\Photo;
use App\Models\PhotoSEOText;
use App\Services\ExceptionService;
use App\Services\TextTrait;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use Illuminate\Support\Collection;

class PhotoSeoService
{
    use TextTrait, PhotoTrait;


    /**
     * Save SEO data of the specified photo of the specified product.
     *
     * @param \App\Models\Product $product
     * @param string $photoName
     * @return array
     */
    public function saveSeoData(Product $product, string $photoName): array
    {
        $pageTitle = $this->_removeLineBreak(
            request()->input('pageTitle')
        );

        $pageDescription = $this->_removeLineBreak(
            request()->input('pageDescription')
        );

        $photoAlt = $this->_removeLineBreak(
            request()->input('imgAlt')
        );


        DB::beginTransaction();

        try {
            $photoRecord = DB::table('photo')
                ->where('product_id', $product->id)
                ->where('filename', $photoName)
                ->first();
            $photo = Photo::find($photoRecord->id);


            $photo->alt_text = $photoAlt;
            $photo->save();


            $this->_syncPhotoNamesAndAltsInProduct($product);


            $seoModel = $photo->seoText;

            if ($seoModel) {
                $seoModel->page_title = $pageTitle;
                $seoModel->page_description = $pageDescription;
            } else {
                $seoModel = new PhotoSEOText([
                    'page_title' => $pageTitle,
                    'page_description' => $pageDescription,
                ]);
            }

            $photo->seoText()->save($seoModel);


            $seoModel->alt_text = $photo->alt_text;


            DB::commit();
            return [
                'saveSuccess' => true,
                'seo' => $seoModel
            ];
        }
        catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\SaveSeoDataException',
                'SavePhotoSeoDataException occurs.'
            );
        }

        DB::rollback();
        return [
            'saveSuccess' => false,
            'seo' => null
        ];

    }


    /**
     * Get photo SEO model of the specified photo of the specified product.
     *
     * @param \App\Models\Product $product
     * @param string $photoName
     * @return PhotoSEOText
     */
    public function getPhotoSeoModel(Product $product, string $photoName): PhotoSEOText
    {
        $photoRecord = DB::table('photo')
            ->where('product_id', $product->id)
            ->where('filename', $photoName)
            ->first();
        $photo = Photo::find($photoRecord->id);


        $seoModel = $photo->seoText ?? new PhotoSEOText();
        $seoModel->alt_text = $photo->alt_text;

        return $seoModel;
    }

    /**
     * Get seo фоток при открытии photoManager.
     *
     * @param int $productId
     * @return \Illuminate\Support\Collection
     */
    public function getProductPhotoSeoList(int $productId): Collection
    {
        return DB::table('photo')
            ->join('photo_seo_texts', 'photo.id', '=', 'photo_seo_texts.photo_id')
            ->where('photo.product_id', '=', $productId)
            ->select('filename', 'alt_text', 'page_title', 'page_description')
            ->get();
    }

    /**
     * Get seo фоток с полным списком имен файлов при открытии страницы public single product.
     *
     * @param int $productId
     * @return \Illuminate\Support\Collection
     */
    public function getProductPhotoSeoListWithFullListOfPhoto(int $productId): Collection
    {
        return DB::table('photo')
            ->leftJoin('photo_seo_texts', 'photo.id', '=', 'photo_seo_texts.photo_id')
            ->where('photo.product_id', '=', $productId)
            ->select('photo_id', 'filename', 'alt_text', 'page_title', 'page_description')
            ->orderBy('position', 'asc')
            ->get();
    }

    /**
     * Get seo одного фото при открытии страницы public single photo.
     *
     * @param int $photoId
     * @return \Illuminate\Support\Collection
     */
    public function getProductPhotoSeoByPhotoId(int $photoId): Collection
    {
        return DB::table('photo')
            ->join('photo_seo_texts', 'photo.id', '=', 'photo_seo_texts.photo_id')
            ->where('photo.id', '=', $photoId)
            ->select('photo_id', 'filename', 'alt_text', 'page_title', 'page_description')
            ->get();
    }
}
