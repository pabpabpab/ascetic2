import Aware from "../parentClasses/app/aware";
import getJson from "../http/getJson";
import AbsoluteFlashMessage from "../absoluteFlashMessage";


export default class CategoryCache extends Aware {

    constructor() {
        super();
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
                new AbsoluteFlashMessage({
                    text: 'Не удалось загрузить категории',
                    duration: 3500
                });
            });
    }

    getCachedCategories() {
        return [ ...this.entireList ];
    }
}
