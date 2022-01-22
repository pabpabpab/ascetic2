export default class SearchSettingsStore {

    constructor() {
        this.settings = {
            productSectionName: '',
            additionalDataOfProductSection: '',
            minPrice: 0,
            maxPrice: 0,
            categoriesIds: [],
            categoriesSlugs: [],
            startOffset: 0,
            perPage: 3,
            pageNumber: 0,
            pageCount: 0,
        };
    }

    getSettings() {
        return { ...this.settings };
    }

    setProductSectionData({productSectionName, additionalData}) {
        this.settings.productSectionName = productSectionName;
        this.settings.additionalDataOfProductSection = additionalData;
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
}
