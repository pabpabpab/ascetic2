import getCookie from "../cookie/getCookie";
import Aware from "../parentClasses/app/aware";

export default class FilterOfCachedProducts extends Aware {

    constructor() {
        super();
    }

    doFilter(products) {
        let filtered = [ ...products ];

        filtered = this._sectionFilter(filtered);

        const minPrice = this.state.searchSettings.minPrice;
        if (minPrice > 0) {
            filtered = this._minPriceFilter(filtered, minPrice);
        }

        const maxPrice = this.state.searchSettings.maxPrice;
        if (maxPrice > 0) {
            filtered = this._maxPriceFilter(filtered, maxPrice);
        }

        const categoriesIds = this.state.searchSettings.categoriesIds;
        if (categoriesIds.length > 0) {
            filtered = this._categoriesFilter(filtered, categoriesIds);
        }

        const sectionProductsCount = filtered.length;

        filtered = this._offsetFilter(filtered);

        return {filteredProducts: filtered, sectionProductsCount};
    }


    _sectionFilter(items) {
        const settings = this.state.sectionSettings;
        if (['all', ''].indexOf(settings.productSectionName) !== -1) {
            return items;
        }

        const func = {
            favoriteProducts: this._favoriteProductsFilter,
            viewedProducts: this._viewedProductsFilter,
            productCategory: this._singleCategoryFilter,
        }
        const additionalFilteringParameters = settings.additionalData;
        return func[settings.productSectionName](items, additionalFilteringParameters);
    }



    // section filter
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
    // section filter
    _viewedProductsFilter(items, viewedIdsStr) {
        if (!Boolean(viewedIdsStr)) {
            return [];
        }
        const viewedIdsArr = viewedIdsStr.split(',').map(item => Number(item));

        // товары в массиве будут в том порядке в каком и в строке
        const viewed = [];
        viewedIdsArr.forEach((id) => {
            const found = items.find(item => item.id === id);
            if (found) {
                viewed.push(found);
            }
        });
        return viewed;
    }
    // section filter
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
    _offsetFilter(items) {
        const startIndex = this.state.paginatorSettings.startOffset;
        const perPage = this.state.paginatorSettings.perPage;
        const endIndex = startIndex + perPage; // елемент с endIndex не будет включен в рез-тат
        return items.slice(startIndex, endIndex);
    }
}
