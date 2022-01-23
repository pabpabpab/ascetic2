import getJson from "./../http/getJson";
import AbsoluteFlashMessage from "./../absoluteFlashMessage";
import allProductsMustBeCached from "../allProductsMustBeCached";
import el from "../el";

export default class SourceOfFilteredProducts {

    constructor(data) {
        this.productCache = data.productCache;
        this.searchUrlMaker = data.searchUrlMaker;
        this.productsFilter = data.filterOfCachedProducts;
        this.searchSettingsStore = data.searchSettingsStore;
        this.productsWrapper = el('#productList');
    }

    getFiltered() {
        if (allProductsMustBeCached()) {
            return this._getFilteredProductsFromCache();
        } else {
            return this._getFilteredProductsFromServer();
        }
    }

    _getFilteredProductsFromCache() {
        return this.productCache.getEntireList()
            .then((data) => {
                const products = [...data];
                const {filtered, sectionProductsCount} = this.productsFilter.doFilter(products);
                this._setDataAttributesAndSearchSettings(sectionProductsCount);
                return filtered;
            });
    }

    _getFilteredProductsFromServer() {
        const url = this.searchUrlMaker.getUrl();
        return getJson(url)
            .then((data) => {
                //console.log(data);
                this._setDataAttributesAndSearchSettings(data.sectionProductsCount);
                return [ ...data.products ];
            })
            .catch(() => {
                new AbsoluteFlashMessage(`Не удалось загрузить товары`);
            });
    }

    _setDataAttributesAndSearchSettings(sectionProductsCount) {
        this.productsWrapper.dataset.sectionProductsCount = sectionProductsCount;
        const settings = { ...this.searchSettingsStore.getSettings() };
        const sectionPageCount = String(Math.ceil(sectionProductsCount/settings.perPage));
        this.productsWrapper.dataset.sectionPageCount = sectionPageCount;
        this.searchSettingsStore.setPageCount(sectionPageCount);
    }


}
