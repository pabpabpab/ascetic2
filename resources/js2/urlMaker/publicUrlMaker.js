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
        const pageNumber = this.state.paginatorSettings.pageNumber;

        if (this._isUrlOfMainPage()) {
            return pageNumber > 1 ? `/products/${pageNumber}` : `/`;
        } else {
            return pageNumber > 1 ? `${this.getFirstPageUrl()}/${pageNumber}` : `${this.getFirstPageUrl()}`
        }
    }

    getFirstPageUrl() {
        if (this._isUrlOfMainPage()) {
            return `/`;
        }
        if (this._isSingleCategoryUrlBasedOnSectionName()) {
            // additionalSectionData - "categoryId;categorySlug"
            const slug = this.state.sectionSettings.additionalData.split(';')[1];
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
        const totalUrl = [
            this.startUrl,
            this._getMinPriceUrl(),
            this._getMaxPriceUrl(),
            this._getCategoriesUrl(),
            //this._getSortUrl(),
            this._getOffsetUrl(),
        ];
        return totalUrl.join('');
        // вида /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/page/{pageNumber}
    }



    _isUrlOfMainPage() {
        const logicalConditions = [
            ['allProducts', ''].indexOf(this.state.sectionSettings.productSectionName) !== -1,
            this.state.searchSettings.categoriesIds.length === 0,
            this.state.searchSettings.minPrice === 0,
            this.state.searchSettings.maxPrice === 0
        ];
        return logicalConditions.every(item => item === true);
    }

    _isSingleCategoryUrlBasedOnSectionName() {
        const logicalConditions = [
            this.state.sectionSettings.productSectionName === 'productCategory',
            this.state.searchSettings.categoriesIds.length === 0,
        ];
        return logicalConditions.every(item => item === true);
    }

    _isUrlOfFavoriteProducts() {
        const logicalConditions = [
            this.state.sectionSettings.productSectionName === 'favoriteProducts',
        ];
        return logicalConditions.every(item => item === true);
    }

    _isUrlOfViewedProducts() {
        const logicalConditions = [
            this.state.sectionSettings.productSectionName === 'viewedProducts',
        ];
        return logicalConditions.every(item => item === true);
    }



    _getMinPriceUrl() {
        return `/price/${this.state.searchSettings.minPrice}-`;
    }
    _getMaxPriceUrl() {
        return `${this.state.searchSettings.maxPrice}`;
    }
    _getCategoriesUrl() {
        if (this.state.searchSettings.categoriesIds.length === 0) {
            return '/categories/0';
        }
        return `/categories/${this.state.searchSettings.categoriesIds.join('-')}`;
    }
    _getSortUrl() {
        return `/sort/${this.state.sortSettings.mode}`;
    }
    _getOffsetUrl() {
        return `/page/${this.state.paginatorSettings.pageNumber}`;
    }
}
