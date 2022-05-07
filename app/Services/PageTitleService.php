<?php


namespace App\Services;


use App\Services\Settings\SettingsService;

class PageTitleService
{
    /**
     * Get title and description of the specified site section.
     *
     * @param string $sectionName
     * @param array $data
     * @return array
     */
    public function getData(string $sectionName, array $data): array
    {
        $method = $sectionName;
        return $this->$method($data);
    }

    /**
     * Get title and description of single photo page.
     *
     * @param array $data
     * @return array
     */
    protected function onePhoto(array $data): array
    {
        $photoSeo = $data['photoSeo'];

        $photoSeoArr = $photoSeo->toArray();
        $photoSeoObj = $photoSeoArr[0];

        $pageTitle = $photoSeoObj->page_title;
        $pageDescription = $photoSeoObj->page_description;

        return [
            'pageTitle' => $pageTitle,
            'pageDescription' => $pageDescription,
        ];
    }

    /**
     * Get title and description of single product page.
     *
     * @param array $data
     * @return array
     */
    protected function oneProduct(array $data): array
    {
        $product = $data['product'];
        $seo = $data['seo'];

        $pageTitle = $product->name;
        if ((isset($seo->page_title)) && (strlen(trim($seo->page_title)) > 0)) {
            $pageTitle = trim($seo->page_title);
        }
        $pageDescription = "Товар из дерева " . $product->name;
        if ((isset($seo->page_description)) && (strlen(trim($seo->page_description)) > 0)) {
            $pageDescription = trim($seo->page_description);
        }

        return [
            'pageTitle' => $pageTitle,
            'pageDescription' => $pageDescription,
        ];
    }

    /**
     * Get title and description of product category page.
     *
     * @param array $data
     * @return array
     */
    protected function productCategory(array $data): array
    {
        $category = $data['category'];
        $categorySeo = $data['categorySeo'];

        $pageTitle = 'Товары категории ' . $category->name;
        $pageDescription = 'Список товаров категории ' . $category->name;

        if ((isset($categorySeo->page_title)) && (strlen(trim($categorySeo->page_title)) > 0)) {
            $pageTitle = trim($categorySeo->page_title);
        }
        if ((isset($categorySeo->page_description)) && (strlen(trim($categorySeo->page_description)) > 0)) {
            $pageDescription = trim($categorySeo->page_description);
        }

        return [
            'pageTitle' => $pageTitle,
            'pageDescription' => $pageDescription,
        ];
    }

    /**
     * Get title and description of main page.
     *
     * @return array
     */
    protected function allProducts(): array
    {
        $mainPageSeo = (new SettingsService())->getSettings('main_page_seo');
        return [
            'pageTitle' => $mainPageSeo['mainPageTitle'],
            'pageDescription' => $mainPageSeo['mainPageDescription'],
        ];
    }

    /**
     * Get title and description of search result page.
     *
     * @return array
     */
    protected function productSearchOnServer(): array
    {
        $mainPageSeo = (new SettingsService())->getSettings('main_page_seo');
        return [
            'pageTitle' => $mainPageSeo['mainPageTitle'],
            'pageDescription' => $mainPageSeo['mainPageDescription'],
        ];
    }

    /**
     * Get title and description of favorite products page.
     *
     * @return array
     */
    protected function favoriteProducts(): array
    {
        return [
            'pageTitle' => 'Избранные товары',
            'pageDescription' => 'Товары которые вам понравились.',
        ];
    }

    /**
     * Get title and description of viewed products page.
     *
     * @return array
     */
    protected function viewedProducts(): array
    {
        return [
            'pageTitle' => 'Вы смотрели',
            'pageDescription' => 'Товары которые вы смотрели.',
        ];
    }
}
