export default class SearchUrlMaker {

    constructor(searchSettingsStore) {
        this.searchSettingsStore = searchSettingsStore;
        this.startUrl = '/public-js/product-search';
    }

    // /public-js/product-search/min-price/{minPrice}/max-price/{maxPrice}/categories/{categories}/startOffset/{startOffset}


    getUrl() {
        const settings = this.searchSettingsStore.getSettings();

        const totalUrl = [
            this.startUrl,
            this._getMinPriceUrl(settings),
            this._getMaxPriceUrl(settings),
            this._getCategoriesUrl(settings),
            this._getOffsetUrl(settings),
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

    _getOffsetUrl(settings) {
        return `/offset/${settings.startOffset}`;
    }
}
