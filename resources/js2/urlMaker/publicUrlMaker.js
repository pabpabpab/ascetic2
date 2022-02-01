export default class PublicUrlMaker {

    constructor(searchSettingsStore) {
        this.searchSettingsStore = searchSettingsStore;
        this.startUrl = '/product-search';
    }

    // /product-search/price/{minPrice}-{maxPrice}/categories/{categories}

    publishUrl() {
        const url = this.getUrl();
        history.replaceState(null,null, url);
    }

    getUrl() {
        const settings = this.searchSettingsStore.getSettings();
        const pageNumber = settings.pageNumber;

        if (this._isUrlOfMainPage()) {
            return pageNumber > 1 ? `/products/${pageNumber}` : `/`;
        } else {
            return pageNumber > 1 ? `${this.getFirstPageUrl()}/${pageNumber}` : `${this.getFirstPageUrl()}`
        }
    }

    getFirstPageUrl() {
        const settings = this.searchSettingsStore.getSettings();

        if (this._isUrlOfMainPage()) {
            return `/`;
        }
        if (this._isSingleCategoryUrlBasedOnSectionName()) {
            // additionalDataOfProductSection - "categoryId;categorySlug"
            const slug = settings.additionalDataOfProductSection.split(';')[1];
            return `/products/${slug}`;
        }
        if (this._isUrlOfFavoriteProducts()) {
            return `/favorite-products`;
        }
        if (this._isUrlOfViewedProducts()) {
            return `/viewed-products`;
        }

        return this._getComplexSearchUrl(settings);
    }


    _getComplexSearchUrl(settings) {
        const totalUrl = [
            this.startUrl,
            this._getMinPriceUrl(settings),
            this._getMaxPriceUrl(settings),
            this._getCategoriesUrl(settings),
            this._getOffsetUrl(settings),
        ];
        return totalUrl.join('');
        // вида /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/page/
    }






    _isUrlOfMainPage() {
        const settings = this.searchSettingsStore.getSettings();
        const logicalConditions = [
            ['all', ''].indexOf(settings.productSectionName) !== -1,
            settings.categoriesIds.length === 0,
            settings.minPrice === 0,
            settings.maxPrice === 0
        ];
        return logicalConditions.every(item => item === true);
    }

    _isSingleCategoryUrlBasedOnSectionName() {
        const settings = this.searchSettingsStore.getSettings();
        const logicalConditions = [
            settings.productSectionName === 'productCategory',
            settings.categoriesIds.length === 0,
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





    _getMinPriceUrl(settings) {
        return `/price/${settings.minPrice}-`;
    }
    _getMaxPriceUrl(settings) {
        return `${settings.maxPrice}`;
    }
    _getCategoriesUrl(settings) {
        if (settings.categoriesIds.length === 0) {
            return '/categories/0';
        }
        return `/categories/${settings.categoriesIds.join('-')}`;
    }
    _getOffsetUrl(settings) {
        return `/page/${settings.pageNumber}`;
    }
}