import getJson from "./../http/getJson";
import AbsoluteFlashMessage from "./../absoluteFlashMessage";
import allProductsMustBeCached from "../allProductsMustBeCached";
import Aware from "../parentClasses/app/aware";

export default class SourceOfFilteredProducts extends Aware {

    constructor() {
        super();
    }

    getFiltered() {
        if (allProductsMustBeCached()) {
            return this._getFilteredProductsFromCache();
        } else {
            return this._getFilteredProductsFromServer();
        }
    }

    _getFilteredProductsFromCache() {
        return this.app.productCache.getEntireList()
            .then((data) => {
                const products = [...data];
                const sorted = this.app.sorterOfCachedProducts.doSort(products);
                const {filteredProducts, sectionProductsCount} = this.app.filterOfCachedProducts.doFilter(sorted);
                return {filteredProducts, sectionProductsCount};
            });
    }

    _getFilteredProductsFromServer() {
        const url = this.app.searchUrlMaker.getUrl();
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
        const url = this.app.searchUrlMaker.getUrl();
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
