import getJson from "./../http/getJson";
import AbsoluteFlashMessage from "./../absoluteFlashMessage";
import allProductsMustBeCached from "../allProductsMustBeCached";
import el from "../el";

export default class SourceOfFilteredProducts {

    constructor(data) {
        this.productCache = data.productCache;
        this.searchUrlMaker = data.searchUrlMaker;
        this.productsFilter = data.filterOfCachedProducts;
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
                this.productsWrapper.dataset.sectionProductsCount = sectionProductsCount;
                return filtered;
            });
    }

    _getFilteredProductsFromServer() {
        const url = this.searchUrlMaker.getUrl();
        return getJson(url)
            .then((data) => {
                //console.log(data);
                this.productsWrapper.dataset.sectionProductsCount = data.sectionProductsCount;
                return [ ...data.products ];
            })
            .catch(() => {
                new AbsoluteFlashMessage(`Не удалось загрузить товары`);
            });
    }

}
