<?php


namespace App\Services\PhotoManager;


use App\Models\Photo;
use App\Models\PhotoSEOText;
use App\Services\ExceptionService;
use App\Services\TextTrait;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PhotoSeoService
{
    use TextTrait, PhotoTrait;


    public function saveSeoData($product, $photoName): array
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


    public function getPhotoSeoModel($product, $photoName): Model
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

    // get seo фоток при открытии photoManager
    public function getProductPhotoSeoList($productId): \Illuminate\Support\Collection
    {
        return DB::table('photo')
            ->join('photo_seo_texts', 'photo.id', '=', 'photo_seo_texts.photo_id')
            ->where('photo.product_id', '=', $productId)
            ->select('filename', 'alt_text', 'page_title', 'page_description')
            ->get();
    }

}
