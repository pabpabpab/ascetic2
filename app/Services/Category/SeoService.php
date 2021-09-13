<?php


namespace App\Services\Category;


use App\Models\CategorySEOText;
use App\Services\ExceptionService;
use App\Services\TextTrait;
use Illuminate\Support\Facades\DB;

class SeoService
{
    use TextTrait;

    public function saveSeoData($category): array
    {
        $pageTitle = $this->_removeLineBreak(
            request()->input('pageTitle')
        );

        $pageDescription = $this->_removeLineBreak(
            request()->input('pageDescription')
        );


        DB::beginTransaction();

        try {
            $seoModel = $category->seoText;

            if ($seoModel) {
                $seoModel->page_title = $pageTitle;
                $seoModel->page_description = $pageDescription;
            } else {
                $seoModel = new CategorySEOText([
                    'page_title' => $pageTitle,
                    'page_description' => $pageDescription,
                ]);
            }

            $category->seoText()->save($seoModel);


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
                'SaveCategorySeoDataException occurs.'
            );
        }

        DB::rollback();
        return [
            'saveSuccess' => false,
            'seo' => null
        ];

    }
}
