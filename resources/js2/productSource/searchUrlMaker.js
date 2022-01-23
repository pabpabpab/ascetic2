export default class SearchUrlMaker {

    constructor(searchSettingsStore) {
        this.searchSettingsStore = searchSettingsStore;
        this.startUrl = '/public-js/product-search';
    }


    getUrl() {
        const settings = this.searchSettingsStore.getSettings();

        if (this._isUrlOfFavoriteProducts()) {
            return `/public-js/favorite-products/offset/${settings.startOffset}`;
        }
        if (this._isUrlOfViewedProducts()) {
            return `/public-js/viewed-products/offset/${settings.startOffset}`;
        }


        const totalUrl = [
            this.startUrl,
            this._getMinPriceUrl(settings),
            this._getMaxPriceUrl(settings),
            this._getCategoriesUrl(settings),
            this._getOffsetUrl(settings),
        ];
        return totalUrl.join('');
        // вида /public-js/product-search/min-price/{minPrice}/max-price/{maxPrice}/categories/{categories}/offset/{startOffset}
    }




    _getMinPriceUrl(settings) {
        return `/min-price/${settings.minPrice}`;
    }
    _getMaxPriceUrl(settings) {
        return `/max-price/${settings.maxPrice}`;
    }
    _getCategoriesUrl(settings) {
        if (settings.categoriesIds.length > 0) {
            return `/categories/${settings.categoriesIds.join('-')}`;
        }
        if (settings.productSectionName === 'productCategory') {
            return `/categories/${settings.additionalDataOfProductSection.split(';')[0]}`;
        }
        return '/categories/0';
    }
    _getOffsetUrl(settings) {
        return `/offset/${settings.startOffset}`;
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
