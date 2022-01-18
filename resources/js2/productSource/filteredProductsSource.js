import getJson from "../http/getJson";
import AbsoluteFlashMessage from "../absoluteFlashMessage";
import el from "../el";
import getProductObject from "../productObject/getProductObject";

export default class FilteredProductsSource {

    constructor(data) {
        this.productCache = data.productCache;
        this.searchUrlMaker = data.searchUrlMaker;
        this.productsFilter = data.cachedProductsFilter;
        this.limitForCachingOfProductEntireList = data.limitForCachingOfProductEntireList;
    }

    getFiltered() {
        const productsCount = Number(el('#productList').dataset.productsCount);
        if (productsCount > this.limitForCachingOfProductEntireList) {
            return this._getFilteredProductsFromServer();
        } else {
            return this._getFilteredProductsFromCache();
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
