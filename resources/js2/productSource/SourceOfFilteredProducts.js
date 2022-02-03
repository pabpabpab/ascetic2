import getJson from "./../http/getJson";
import AbsoluteFlashMessage from "./../absoluteFlashMessage";
import allProductsMustBeCached from "../allProductsMustBeCached";

export default class SourceOfFilteredProducts {

    constructor(data) {
        this.productCache = data.productCache;
        this.searchUrlMaker = data.searchUrlMaker;
        this.productSorter = data.sorterOfCachedProducts;
        this.productFilter = data.filterOfCachedProducts;
        this.searchSettingsStore = data.searchSettingsStore;
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
                const sorted = this.productSorter.doSort(products);
                const {filteredProducts, sectionProductsCount} = this.productFilter.doFilter(sorted);
                return {filteredProducts, sectionProductsCount};
            });
    }

    _getFilteredProductsFromServer() {
        const url = this.searchUrlMaker.getUrl();
        //console.log(url);
        return getJson(url)
            .then((data) => {
                // console.log(data);
                return {filteredProducts: data.products, sectionProductsCount: data.sectionProductsCount}
            })
            .catch(() => {
                new AbsoluteFlashMessage({
                    text: `Не удалось загрузить товары`,
                    duration: 3500
                });
            });
    }


    getViewedProductsFromServer() {
        const url = this.searchUrlMaker.getUrl();
        return getJson(url)
            .then((data) => {
                //console.log(data);
                return {
                    filteredProducts: data.products,
                    sectionProductsCount: data.sectionProductsCount,
                    allViewedIdsStr: data.allViewedIdsStr
                };
            })
            .catch(() => {
                new AbsoluteFlashMessage({
                    text: `Не удалось загрузить товары`,
                    duration: 3500
                });
            });
    }

}
