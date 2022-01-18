export default class SearchSettingsStore {

    constructor() {
        this.settings = {
            minPrice: 0,
            maxPrice: 0,
            categoriesIds: [],
            categoriesSlugs: [],
            startOffset: 0,
        };
    }

    getSettings() {
        return { ...this.settings };
    }

    setStartOffset(value) {
        this.settings.startOffset = value;
    }
}
