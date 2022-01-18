export default class CachedProductsFilter {

    constructor(searchSettingsStore) {
        this.searchSettingsStore = searchSettingsStore;
        this.perPage = 3;
    }

    doFilter(products) {
        const settings = { ...this.searchSettingsStore.getSettings() };

        let filtered = [ ...products ];

        if (settings.minPrice > 0) {
            filtered = this._minPriceFilter(filtered, settings.minPrice);
        }
        if (settings.maxPrice > 0) {
            filtered = this._maxPriceFilter(filtered, settings.maxPrice);
        }
        if (settings.categoriesIds.length > 0) {
            filtered = this._categoryFilter(filtered, settings.categoriesIds);
        }

        filtered = this._offsetFilter(filtered, settings.startOffset);

        return filtered;
    }



    _minPriceFilter(items, minPrice) {
        return items.filter(item => Number(item.price) >= minPrice);
    }
    _maxPriceFilter(items, maxPrice) {
        return items.filter(item => Number(item.price) <= maxPrice);
    }
    _categoryFilter(items, searchedIds) {
        return items.filter((item) => {
            const parametersArr = JSON.parse(item.parameters);
            const catIdsOfItem = parametersArr.categories.map(el => el.id);
            return searchedIds.some(el => catIdsOfItem.includes(el))
        });
    }
    _offsetFilter(items, startOffset) {
        const startIndex = startOffset;
        const endIndex = startOffset + this.perPage; // елемент с endIndex не будет включен в рез-тат
        return items.slice(startIndex, endIndex);
    }
}
