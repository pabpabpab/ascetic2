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
        return `/categories/${settings.categories.join('-')}`;
    }

    _getOffsetUrl(settings) {
        return `/startOffset/${settings.startOffset}`;
    }
}
