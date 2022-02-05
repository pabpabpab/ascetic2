import Aware from "../parentClasses/app/aware";

export default class Commiter extends Aware {

    constructor() {
        super();
    }

    commit(mutationName, data) {
        this.app.mutations[mutationName](this.app.state, data);


        const checkMethods = {
            setSortMode: 'checkSortSettings',

            setSectionData: 'checkSectionSettings',

            setMinPrice: 'checkSearchSettings',
            setMaxPrice: 'checkSearchSettings',
            setCategoriesIds: 'checkSearchSettings',
            resetSearchSettings: 'checkSearchSettings',

            setStartOffset: 'checkPaginatorSettings',
            setPageNumber: 'checkPaginatorSettings',
            setPageCount: 'checkPaginatorSettings',
        }

        const checkMethod =  checkMethods[mutationName];

        for (let item in this.app.components) {
            if (this.app.components.hasOwnProperty(item)) {
                this.app.components[item][checkMethod]();
            }
        }


/*
        const sortMutations = [
            'setSortMode',
        ];
        const sectionMutations = [
            'setSectionData',
        ];
        const searchMutations = [
            'setMinPrice',
            'setMaxPrice',
            'setCategoriesIds',
            'resetSearchSettings'
        ];
        const paginatorMutations = [
            'setStartOffset',
            'setPageNumber',
            'setPageCount',
        ];
        let checkMethod = null;
        if (searchMutations.includes(mutationName)) {
            checkMethod = 'checkSearchSettings';
        }
*/


        /*
        const func = {
            favoriteProducts: this._favoriteProductsFilter,
            viewedProducts: this._viewedProductsFilter,
            productCategory: this._singleCategoryFilter,
        }
        const additionalFilteringParameters = settings.additionalData;
        return func[settings.productSectionName](items, additionalFilteringParameters);
         */


/*
        for (let item in this.app.components) {
            if (this.app.components.hasOwnProperty(item)) {
                this.app.components[item].checkState();
            }
        }*/
    }
}



