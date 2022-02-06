import getJson from "./../http/getJson";
import AbsoluteFlashMessage from "../message/absoluteFlashMessage";
import el from "./../el";
import allProductsMustBeCached from "./../allProductsMustBeCached";
import Aware from "../parentClasses/app/aware";

export default class ProductCache extends Aware {

    constructor() {
        super();
        const productListWrapper = el('#productList');
        const viewedProductsSummaryWrapper = el('#viewedProductsSummaryWrapper')
        if (!productListWrapper && !viewedProductsSummaryWrapper) {
            return;
        }

        this.entireList = [];
        this.descriptionsCache = [];
        this.singlesCache = [];
        this.entireListUrl = '/public-js/entire-product-list';
        this.oneDescriptionUrl = '/public-js/one-product-description/';
        this.oneProductUrl = '/public-js/one-product/';

        this.productsWereCachedOnPageLoading = false;
        if (productListWrapper && allProductsMustBeCached()) {
            el('body').addEventListener('mouseover', (e) => {
                this._loadEntireListOnPageLoading();
            });
        }
    }


    getEntireList() {
        if (this.entireList.length > 0) {
            return new Promise(resolve =>
                resolve([ ...this.entireList ])
            );
        }

        return this._loadEntireList()
            .then((data) => {
                return [...data];
            });
    }
    _loadEntireList() {
        return getJson(this.entireListUrl)
            .then((data) => {
                //console.log(data);
                this.entireList = [ ...data.products ];
                return [ ...data.products ];
            })
            .catch(() => {
                new AbsoluteFlashMessage({
                    text: 'Не удалось загрузить товары',
                    duration: 3500
                });
            });
    }
    _loadEntireListOnPageLoading() {
        if (this.productsWereCachedOnPageLoading) {
            return;
        }
        this.productsWereCachedOnPageLoading = true;
        getJson(this.entireListUrl)
            .then((data) => {
                //console.log(data);
                this.entireList = [ ...data.products ];
            });
    }


    getOneDescription(productId) {
        if (this.descriptionsCache.length > 0) {
            const filtered = this.descriptionsCache.filter(item => item.product_id === productId);
            if (filtered.length > 0) {
                return new Promise(resolve => resolve(filtered[0]));
            }
        }

        return this._loadOneDescription(productId)
            .then((data) => {
                return { ...data };
            });
    }
    _loadOneDescription(productId) {
        return getJson(this.oneDescriptionUrl + productId)
            .then((data) => {
                //console.log(data);
                this.descriptionsCache.push(data.description);
                return { ...data.description };
            })
            .catch(() => {
                new AbsoluteFlashMessage({
                    text: 'Не удалось загрузить описание товара',
                    duration: 3500
                });
            });
    }



    getOneFromServer(productId) {
        if (this.singlesCache.length > 0) {
            const filtered = this.singlesCache.filter(item => item.id === productId);
            if (filtered.length > 0) {
                return new Promise(resolve => resolve(filtered[0]));
            }
        }

        return this._loadOneProduct(productId)
            .then((data) => {
                return { ...data };
            });
    }
    _loadOneProduct(productId) {
        return getJson(this.oneProductUrl + productId)
            .then((data) => {
                //console.log(data.product);
                this.singlesCache.push(data.product);
                return { ...data.product };
            })
            .catch(() => {
                new AbsoluteFlashMessage({
                    text: 'Не удалось загрузить товар',
                    duration: 3500
                });
            });
    }

}
