<?php


namespace App\Services;


class PageTitleService
{
    public function getData(string $sectionName, array $data): array
    {
        $method = $sectionName;
        return $this->$method($data);
    }


    protected function onePhoto($data): array
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

    protected function oneProduct($data): array
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

    protected function productCategory($data): array
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

    protected function allProducts(): array
    {
        return [
            'pageTitle' => config("my_site.mainPageTitle"),
            'pageDescription' => config("my_site.mainPageDescription"),
        ];
    }
    protected function productSearchOnServer($data): array
    {
        return [
            'pageTitle' => config("my_site.mainPageTitle"),
            'pageDescription' => config("my_site.mainPageDescription"),
        ];
    }
    protected function favoriteProducts($data): array
    {
        return [
            'pageTitle' => 'Избранные товары',
            'pageDescription' => 'Товары которые вам понравились.',
        ];
    }
    protected function viewedProducts(): array
    {
        return [
            'pageTitle' => 'Вы смотрели',
            'pageDescription' => 'Товары которые вы смотрели.',
        ];
    }
}
