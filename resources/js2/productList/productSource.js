import getJson from "./../http/getJson";
import AbsoluteFlashMessage from "./../absoluteFlashMessage";

export default class ProductSource {

    constructor() {
        this.entireList = [];
        this.entireListUrl = '/public-js/entire-product-list';
    }

    getEntireList() {
        if (this.entireList.length > 0) {
            return new Promise(resolve =>
                resolve([ ...this.entireList ])
            );
        }

        return this.loadEntireList()
            .then((data) => {
                //console.log(data);
                this.entireList = [...data];
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

}
