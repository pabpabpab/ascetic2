import getJson from "./../http/getJson";
import AbsoluteFlashMessage from "./../absoluteFlashMessage";

export default class ProductSource {

    constructor() {
        this.entireList = [];
        this.descriptionsCache = [];
        this.singlesCache = [];
        this.entireListUrl = '/public-js/entire-product-list';
        this.oneDescriptionUrl = '/public-js/one-product-description/';
        this.oneProductUrl = '/public-js/one-product/';
    }

    getEntireList() {
        if (this.entireList.length > 0) {
            return new Promise(resolve =>
                resolve([ ...this.entireList ])
            );
        }

        return this.loadEntireList()
            .then((data) => {
                return [...data];
            });
    }
    loadEntireList() {
        return getJson(this.entireListUrl)
            .then((data) => {
                //console.log(data);
                this.entireList = [ ...data.products ];
                return [ ...data.products ];
            })
            .catch(() => {
                new AbsoluteFlashMessage(`Не удалось загрузить товары`);
            });
    }


    getOneDescription(productId) {
        if (this.descriptionsCache.length > 0) {
            const filtered = this.descriptionsCache.filter(item => item.product_id === productId);
            if (filtered.length > 0) {
                return new Promise(resolve => resolve(filtered[0]));
            }
        }

        return this.loadOneDescription(productId)
            .then((data) => {
                return { ...data };
            });
    }
    loadOneDescription(productId) {
        return getJson(this.oneDescriptionUrl + productId)
            .then((data) => {
                //console.log(data);
                this.descriptionsCache.push(data.description);
                return { ...data.description };
            })
            .catch(() => {
                new AbsoluteFlashMessage(`Не удалось загрузить описание товара`);
            });
    }



    getOneFromServer(productId) {
        if (this.singlesCache.length > 0) {
            const filtered = this.singlesCache.filter(item => item.id === productId);
            if (filtered.length > 0) {
                return new Promise(resolve => resolve(filtered[0]));
            }
        }

        return this.loadOneProduct(productId)
            .then((data) => {
                return { ...data };
            });
    }

    loadOneProduct(productId) {
        return getJson(this.oneProductUrl + productId)
            .then((data) => {
                //console.log(data.product);
                this.singlesCache.push(data.product);
                return { ...data.product };
            })
            .catch(() => {
                new AbsoluteFlashMessage(`Не удалось загрузить товар`);
            });
    }



}
