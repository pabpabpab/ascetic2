import getJson from "./../http/getJson";
import AbsoluteFlashMessage from "./../absoluteFlashMessage";
import areAllProductsCached from "./../areAllProductsCached";

export default class FilteredProductsSource {

    constructor(data) {
        this.productCache = data.productCache;
        this.searchUrlMaker = data.searchUrlMaker;
        this.productsFilter = data.cachedProductsFilter;
    }

    getFiltered() {
        if (areAllProductsCached()) {
            return this._getFilteredProductsFromCache();
        } else {
            return this._getFilteredProductsFromServer();
        }
    }

    _getFilteredProductsFromCache() {
        return this.productCache.getEntireList()
            .then((data) => {
                const products = [...data];
                return this.productsFilter.doFilter(products);
            });
    }

    _getFilteredProductsFromServer() {
        const url = this.searchUrlMaker.getUrl();
        return getJson(url)
            .then((data) => {
                //console.log(data);
                this.filtered = [ ...data.products ];
                return [ ...data.products ];
            })
            .catch(() => {
                new AbsoluteFlashMessage(`Не удалось загрузить товары`);
            });
    }

}
