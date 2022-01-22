export default class PublicUrlMaker {

    constructor(searchSettingsStore) {
        this.searchSettingsStore = searchSettingsStore;
        this.startUrl = '/product-search';
    }

    // /product-search/min-price/{minPrice}/max-price/{maxPrice}/categories/{categories}

    publishUrl() {
        const url = this._getUrl();
        history.replaceState(null,null, url);
    }

    _getUrl() {
        const settings = this.searchSettingsStore.getSettings();
        const pageNumber = settings.pageNumber;

        if (this._isUrlOfMainPage()) {
            return pageNumber > 1 ? `/products/${pageNumber}`: `/`;
        }
        if (this._isSingleCategoryUrlBasedOnSectionName()) {
            // additionalDataOfProductSection - "categoryId;categorySlug"
            const slug = settings.additionalDataOfProductSection.split(';')[1];
            return pageNumber > 1 ? `/products/${slug}/${pageNumber}` : `/products/${slug}`;
        }
        if (this._isSingleCategoryUrl()) {
            const slug = settings.categoriesSlugs[0];
            return pageNumber > 1 ? `/products/${slug}/${pageNumber}` : `/products/${slug}`;
        }
        if (this._isUrlOfFavoriteProducts()) {
            return pageNumber > 1 ? `/favorite-products/${pageNumber}` : `/favorite-products`;
        }
        if (this._isUrlOfViewedProducts()) {
            return pageNumber > 1 ? `/viewed-products/${pageNumber}` : `/viewed-products`;
        }


        const totalUrl = [
            this.startUrl,
            this._getMinPriceUrl(settings),
            this._getMaxPriceUrl(settings),
            this._getCategoriesUrl(settings),
        ];

        return totalUrl.join('');
    }


    _getMinPriceUrl(settings) {
        return `/min-price/${settings.minPrice}`;
    }

    _getMaxPriceUrl(settings) {
        return `/max-price/${settings.maxPrice}`;
    }

    _getCategoriesUrl(settings) {
        if (settings.categoriesIds.length === 0) {
            return '/categories/0';
        }
        return `/categories/${settings.categoriesIds.join('-')}`;
    }


    _isUrlOfMainPage() {
        const settings = this.searchSettingsStore.getSettings();
        const logicalConditions = [
            ['all', ''].indexOf(settings.productSectionName) !== -1,
            settings.categoriesSlugs.length === 0,
            settings.minPrice === 0,
            settings.maxPrice === 0
        ];
        return logicalConditions.every(item => item === true);
    }

    _isSingleCategoryUrlBasedOnSectionName() {
        const settings = this.searchSettingsStore.getSettings();
        const logicalConditions = [
            settings.productSectionName === 'productsCategory',
            settings.categoriesIds.length === 0,
        ];
        return logicalConditions.every(item => item === true);
    }

    _isSingleCategoryUrl() {
        const settings = this.searchSettingsStore.getSettings();
        const logicalConditions = [
            settings.categoriesSlugs.length === 1,
            settings.minPrice === 0,
            settings.maxPrice === 0
        ];
        return logicalConditions.every(item => item === true);
    }

    _isUrlOfFavoriteProducts() {
        const settings = this.searchSettingsStore.getSettings();
        const logicalConditions = [
            settings.productSectionName === 'favoriteProducts',
        ];
        return logicalConditions.every(item => item === true);
    }

    _isUrlOfViewedProducts() {
        const settings = this.searchSettingsStore.getSettings();
        const logicalConditions = [
            settings.productSectionName === 'viewedProducts',
        ];
        return logicalConditions.every(item => item === true);
    }
}
