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

        if (this._isItSingleCategoryUrl()) {
            return `products/${settings.categoriesSlugs[0]}`;
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
        return `/categories/${settings.categories.join('-')}`;
    }

    _isItSingleCategoryUrl() {
        const settings = this.searchSettingsStore.getSettings();
        const logicalConditions = [
            settings.categoriesSlugs.length === 1,
            settings.minPrice === 0,
            settings.maxPrice === 0
        ];

        return logicalConditions.every(item => item === true);
    }
}
