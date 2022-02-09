import Aware from "../parentClasses/app/aware";

export default class Commiter extends Aware {

    constructor() {
        super();
    }

    commit(mutationName, data) {
        this.app.mutations[mutationName](this.app.state, data);
        this.app.commiter._notifyObservers(mutationName);
    }

    _notifyObservers(mutationName) {
        const checkMethods = {
            setViewMode: ['checkViewSettings'],
            setSortMode: ['checkSortSettings'],
            setSectionData: ['checkSectionSettings'],

            setMinPrice: ['checkSearchSettings'],
            setMaxPrice: ['checkSearchSettings'],
            setCategoriesIds: ['checkSearchSettings'],
            resetSearchSettings: ['checkSearchSettings'],

            setSectionProductsCount: ['checkPaginatorSettings'],
            setStartOffset: ['checkPaginatorSettings'],
            setPageNumber: ['checkPaginatorSettings'],
            setPageCount: ['checkPaginatorSettings'],
        }

        const checkMethodList =  checkMethods[mutationName];

        for (let item in this.app.components) {
            if (this.app.components.hasOwnProperty(item)) {
                checkMethodList.forEach(checkMethod => {
                    this.app.components[item][checkMethod]();
                });
            }
        }
    }
}



