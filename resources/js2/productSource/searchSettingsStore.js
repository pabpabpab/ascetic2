export default class SearchSettingsStore {

    constructor() {
        this.settings = {
            minPrice: 0,
            maxPrice: 0,
            categoriesIds: [],
            categoriesSlugs: [],
        };
    }

    getSettings() {
        return { ...this.settings };
    }
}
