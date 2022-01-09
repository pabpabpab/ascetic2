import getJson from "./../http/getJson";
import AbsoluteFlashMessage from "./../absoluteFlashMessage";

export default class ProductSource {

    constructor() {
        this.entireList = [];
        this.descriptionsCache = [];
        this.entireListUrl = '/public-js/entire-product-list';
        this.oneDescriptionUrl = '/public-js/one-product-description/';
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
                this.entireList = [ ...data.products ];
                return [ ...data.products ];
            })
            .catch(() => {
                new AbsoluteFlashMessage(`Не удалось загрузить товары`);
            });
    }


    getOneDescription(productId) {
        const filtered = this.descriptionsCache.filter(item => item.product_id === productId);
        if (filtered.length > 0) {
            return new Promise(resolve => resolve(filtered[0]));
        }

        return this.loadOneDescription(productId)
            .then((data) => {
                return { ...data };
            });
    }

    loadOneDescription(productId) {
        return getJson(this.oneDescriptionUrl + productId)
            .then((data) => {
                this.descriptionsCache.push(data.description);
                return { ...data.description };
            })
            .catch(() => {
                new AbsoluteFlashMessage(`Не удалось загрузить описание товара`);
            });
    }
}
