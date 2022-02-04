import Aware from "../parentClasses/app/aware";

export default class PublicUrlMaker extends Aware {

    constructor() {
        super();
        this.startUrl = '/product-search';
    }

    // /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/page/{pageNumber}

    publishUrl() {
        const url = this.getUrl();
        history.replaceState(null,null, url);
    }

    getUrl() {
        const settings = this.components.searchSettingsStore.getSettings();
        const pageNumber = settings.pageNumber;

        if (this._isUrlOfMainPage()) {
            return pageNumber > 1 ? `/products/${pageNumber}` : `/`;
        } else {
            return pageNumber > 1 ? `${this.getFirstPageUrl()}/${pageNumber}` : `${this.getFirstPageUrl()}`
        }
    }

    getFirstPageUrl() {
        const settings = this.components.searchSettingsStore.getSettings();

        if (this._isUrlOfMainPage()) {
            return `/`;
        }
        if (this._isSingleCategoryUrlBasedOnSectionName()) {
            // additionalDataOfProductSection - "categoryId;categorySlug"
            const slug = settings.additionalDataOfProductSection.split(';')[1];
            return `/products/${slug}`;
        }
        if (this._isUrlOfFavoriteProducts()) {
            return `/favorite-products`;
        }
        if (this._isUrlOfViewedProducts()) {
            return `/viewed-products`;
        }

        return this._getComplexSearchUrl();
    }


    _getComplexSearchUrl() {
        const searchSettings = this.components.searchSettingsStore.getSettings();
        const sortSettings = this.components.sortSettingsStore.getSettings();
        const totalUrl = [
            this.startUrl,
            this._getMinPriceUrl(searchSettings),
            this._getMaxPriceUrl(searchSettings),
            this._getCategoriesUrl(searchSettings),
            //this._getSortUrl(sortSettings),
            this._getOffsetUrl(searchSettings),
        ];
        return totalUrl.join('');
        // вида /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/page/{pageNumber}
    }






    _isUrlOfMainPage() {
        const settings = this.components.searchSettingsStore.getSettings();
        const logicalConditions = [
            ['all', ''].indexOf(settings.productSectionName) !== -1,
            settings.categoriesIds.length === 0,
            settings.minPrice === 0,
            settings.maxPrice === 0
        ];
        return logicalConditions.every(item => item === true);
    }

    _isSingleCategoryUrlBasedOnSectionName() {
        const settings = this.components.searchSettingsStore.getSettings();
        const logicalConditions = [
            settings.productSectionName === 'productCategory',
            settings.categoriesIds.length === 0,
        ];
        return logicalConditions.every(item => item === true);
    }

    _isUrlOfFavoriteProducts() {
        const settings = this.components.searchSettingsStore.getSettings();
        const logicalConditions = [
            settings.productSectionName === 'favoriteProducts',
        ];
        return logicalConditions.every(item => item === true);
    }

    _isUrlOfViewedProducts() {
        const settings = this.components.searchSettingsStore.getSettings();
        const logicalConditions = [
            settings.productSectionName === 'viewedProducts',
        ];
        return logicalConditions.every(item => item === true);
    }





    _getMinPriceUrl(settings) {
        return `/price/${settings.minPrice}-`;
    }
    _getMaxPriceUrl(settings) {
        return `${settings.maxPrice}`;
    }
    _getCategoriesUrl(settings) {
        if (settings.categoriesIds.length === 0) {
            return '/categories/0';
        }
        return `/categories/${settings.categoriesIds.join('-')}`;
    }
    _getSortUrl(settings) {
        return `/sort/${settings.selectedValue}`;
    }
    _getOffsetUrl(settings) {
        return `/page/${settings.pageNumber}`;
    }
}
