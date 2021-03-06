import Aware from "../../parentClasses/app/aware";

export default class Mutator extends Aware {

    constructor() {
        super();
    }

    commit(mutationName, data) {
        this.app.mutations[mutationName](this.app.state, data);
        this.app.mutator._notifyObservers(mutationName);
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
            setPerPage: [],
        }

        const checkMethodList =  checkMethods[mutationName];

        Object.keys(this.app.components).forEach((item) => {
            checkMethodList.forEach(checkMethod => {
                this.app.components[item][checkMethod]();
            });
        });
    }
}



