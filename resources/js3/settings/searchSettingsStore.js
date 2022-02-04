import Aware from "../parentClasses/app/aware";

export default class SearchSettingsStore extends Aware {

    constructor() {
        super();
        this.settings = {
            productSectionName: '',
            additionalDataOfProductSection: '',

            minPrice: 0,
            maxPrice: 0,
            categoriesIds: [],

            startOffset: 0,
            pageNumber: 0,
            pageCount: 0,
            perPage: 3,
        };
        this.observers = [];
    }

    getSettings() {
        return { ...this.settings };
    }

    setProductSectionData({productSectionName, additionalData}) {
        this.settings.productSectionName = productSectionName;
        this.settings.additionalDataOfProductSection = additionalData;
    }
    setMinPrice(value) {
        this.settings.minPrice = value;
        this._resetSettingsNotRelatedToSearchFilter();
        this._resetPaginationSettings();
        this._notifyObservers();
    }
    setMaxPrice(value) {
        this.settings.maxPrice = value;
        this._resetSettingsNotRelatedToSearchFilter();
        this._resetPaginationSettings();
        this._notifyObservers();
    }
    setCategoriesIds(value) {
        this.settings.categoriesIds = [ ...value ];
        this._resetSettingsNotRelatedToSearchFilter();
        this._resetPaginationSettings();
        this._notifyObservers();
    }
    resetSettingsRelatedToSearchFilter() {
        this.settings.minPrice = 0;
        this.settings.maxPrice = 0;
        this.settings.categoriesIds = [];
        this._notifyObservers();
    }



    setStartOffset(value) {
        this.settings.startOffset = value;
    }
    setPageNumber(value) {
        this.settings.pageNumber = value;
    }
    setPageCount(value) {
        this.settings.pageCount = value;
    }


    _resetSettingsNotRelatedToSearchFilter() {
        this.settings.productSectionName = '';
        this.settings.additionalDataOfProductSection = '';
    }

    _resetPaginationSettings() {
        this.settings.startOffset = 0;
        this.settings.pageNumber = 1;
        this.settings.pageCount = 0;
    }


    getTotalCountOfSetFilterParameters() {
        let totalCount = this.settings.categoriesIds.length;
        if (this.settings.minPrice > 0) {
            totalCount += 1;
        }
        if (this.settings.maxPrice > 0) {
            totalCount += 1;
        }
        return totalCount;
    }


    addObserver(observer) {
        this.observers.push(observer);
    }
    _notifyObservers() {
        this.observers.forEach(observer => observer.checkSearchSettings());
    }
}
