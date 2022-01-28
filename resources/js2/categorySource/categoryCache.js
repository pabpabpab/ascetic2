import getJson from "../http/getJson";
import AbsoluteFlashMessage from "../absoluteFlashMessage";

export default class CategoryCache {

    constructor() {
        this.entireList = [];
        this.entireListUrl = '/public-js/entire-category-list';
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
                this.entireList = [ ...data.categories ];
                return [ ...data.categories ];
            })
            .catch(() => {
                new AbsoluteFlashMessage(`Не удалось загрузить категории`);
            });
    }

}
