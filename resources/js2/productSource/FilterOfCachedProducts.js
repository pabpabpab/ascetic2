import getCookie from "../cookie/getCookie";

export default class FilterOfCachedProducts {

    constructor(searchSettingsStore) {
        this.searchSettingsStore = searchSettingsStore;
    }

    doFilter(products) {
        const settings = { ...this.searchSettingsStore.getSettings() };

        let filtered = [ ...products ];

        filtered = this._sectionFilter(filtered, settings);

        if (settings.minPrice > 0) {
            filtered = this._minPriceFilter(filtered, settings.minPrice);
        }
        if (settings.maxPrice > 0) {
            filtered = this._maxPriceFilter(filtered, settings.maxPrice);
        }
        if (settings.categoriesIds.length > 0) {
            filtered = this._categoriesFilter(filtered, settings.categoriesIds);
        }


        const sectionProductsCount = filtered.length;

        filtered = this._offsetFilter(filtered, settings.startOffset, settings.perPage);

        return {filtered, sectionProductsCount};
    }


    _sectionFilter(items, settings) {
        if (['all', ''].indexOf(settings.productSectionName) !== -1) {
            return items;
        }

        const func = {
            favoriteProducts: this._favoriteProductsFilter,
            viewedProducts: this._viewedProductsFilter,
            productsCategory: this._singleCategoryFilter,
        }
        const additionalFilteringParameters = settings.additionalDataOfProductSection;
        return func[settings.productSectionName](items, additionalFilteringParameters);
    }

    _favoriteProductsFilter(items, params) {
        const favoriteIdsStr = getCookie('favoriteIds');
        if (!Boolean(favoriteIdsStr)) {
            return [];
        }
        const favoriteIdsArr = favoriteIdsStr.split(',').map(item => Number(item));
        return items.filter((item) => {
            return favoriteIdsArr.includes(item.id)
        });
    }
    _viewedProductsFilter(items, viewedIdsStr) {
        if (!Boolean(viewedIdsStr)) {
            return [];
        }
        const viewedIdsArr = viewedIdsStr.split(',').map(item => Number(item));
        return items.filter((item) => {
            return viewedIdsArr.includes(item.id)
        });
    }
    _singleCategoryFilter(items, params) {
        // params - "categoryId;categorySlug"
        const categoryId = Number(params.split(';')[0]);
        return items.filter((item) => {
            const parametersArr = JSON.parse(item.parameters);
            const catIdsOfItem = parametersArr.categories.map(el => el.id);
            return catIdsOfItem.includes(categoryId);
        });
    }




    _minPriceFilter(items, minPrice) {
        return items.filter(item => Number(item.price) >= minPrice);
    }
    _maxPriceFilter(items, maxPrice) {
        return items.filter(item => Number(item.price) <= maxPrice);
    }
    _categoriesFilter(items, searchedIds) {
        return items.filter((item) => {
            const parametersArr = JSON.parse(item.parameters);
            const catIdsOfItem = parametersArr.categories.map(el => el.id);
            return searchedIds.some(el => catIdsOfItem.includes(el))
        });
    }
    _offsetFilter(items, startOffset, perPage) {
        const startIndex = startOffset;
        const endIndex = startOffset + perPage; // елемент с endIndex не будет включен в рез-тат
        return items.slice(startIndex, endIndex);
    }
}
