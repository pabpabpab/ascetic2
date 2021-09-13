<?php


namespace App\Services\Product;

use App\Models\ProductSEOText;
use App\Services\ExceptionService;
use App\Services\TextTrait;
use Illuminate\Support\Facades\DB;

class SeoService
{
    use TextTrait;

    public function saveSeoData($product): array
    {
        $pageTitle = $this->_removeLineBreak(
            request()->input('pageTitle')
        );

        $pageDescription = $this->_removeLineBreak(
            request()->input('pageDescription')
        );


        DB::beginTransaction();

        try {
            $seoModel = $product->seoText;

            if ($seoModel) {
                $seoModel->page_title = $pageTitle;
                $seoModel->page_description = $pageDescription;
            } else {
                $seoModel = new ProductSEOText([
                    'page_title' => $pageTitle,
                    'page_description' => $pageDescription,
                ]);
            }

            $product->seoText()->save($seoModel);

            //$seoModel->refresh();


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
                'SaveProductSeoDataException occurs.'
            );
        }

        DB::rollback();
        return [
            'saveSuccess' => false,
            'seo' => null
        ];

    }


}
