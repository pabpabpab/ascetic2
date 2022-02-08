import Aware from "../parentClasses/app/aware";

export default class PublicUrlMaker extends Aware {

    constructor() {
        super();
        this.startUrl = '/product-search';
    }

    // вида /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/{pageNumber}

    publishUrl() {
        const url = this.getUrl();
        history.replaceState(null,null, url);
        //history.pushState(null,null, url);
    }

    getUrl() {
        const pageNumber = this.state.paginatorSettings.pageNumber;

        if (this._isUrlOfMainPage()) {
            return pageNumber > 1 ? `/products/${pageNumber}` : `/`;
        }
        if (this._isUrlOfSingleProduct()) {
            return this._getSingleProductUrl();
        }
        return pageNumber > 1 ? `${this.getFirstPageUrl()}/${pageNumber}` : `${this.getFirstPageUrl()}`
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
            this._getSortUrl(),
            this._getOffsetUrl(),
        ];
        return totalUrl.join('');
        // вида /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/page/{pageNumber}
    }



    _isUrlOfMainPage() {
        const sectionName = this.state.sectionSettings.productSectionName;
        const logicalConditions = [
            ['allProducts', ''].includes(sectionName),
            this.state.sortSettings.mode === 'position',
            this.state.searchSettings.categoriesIds.length === 0,
            this.state.searchSettings.minPrice === 0,
            this.state.searchSettings.maxPrice === 0
        ];
        return logicalConditions.every(item => item === true);
    }
    _isSingleCategoryUrlBasedOnSectionName() {
        const sectionName = this.state.sectionSettings.productSectionName;
        const logicalConditions = [
            sectionName === 'productCategory',
            this.state.sortSettings.mode === 'position',
            this.state.searchSettings.categoriesIds.length === 0,
        ];
        return logicalConditions.every(item => item === true);
    }
    _isUrlOfFavoriteProducts() {
        const sectionName = this.state.sectionSettings.productSectionName;
        const logicalConditions = [
            sectionName === 'favoriteProducts',
        ];
        return logicalConditions.every(item => item === true);
    }
    _isUrlOfViewedProducts() {
        const sectionName = this.state.sectionSettings.productSectionName;
        const logicalConditions = [
            sectionName === 'viewedProducts',
        ];
        return logicalConditions.every(item => item === true);
    }
    _isUrlOfSingleProduct() {
        const sectionName = this.state.sectionSettings.productSectionName;
        const logicalConditions = [
            sectionName === 'singleProduct',
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
        const categoriesIds = this.state.searchSettings.categoriesIds;
        const singleCategoryId = Number(this.state.sectionSettings.additionalData.split(';')[0]);
        if (categoriesIds.length === 0 && singleCategoryId === 0) {
            return '/categories/0';
        } else if (categoriesIds.length > 0) {
            return `/categories/${this.state.searchSettings.categoriesIds.join('-')}`;
        } else if (singleCategoryId > 0) {
            return `/categories/${singleCategoryId}`;
        }
        return '/categories/0';
    }
    _getSortUrl() {
        let sortMode = this.state.sortSettings.mode;
        if (sortMode === 'position') {
            sortMode = 'default';
        }
        return `/sort/${sortMode}`;
    }
    _getOffsetUrl() {
        // return `/page/${this.state.paginatorSettings.pageNumber}`;
        return '';
    }



    _getSingleProductUrl() {
        const settings = this.state.sectionSettings;
        if (settings.productSectionName !== 'singleProduct') {
            return '';
        }
        const data = settings.additionalData.split(';');
        const productId = data[0];
        const productSlug = data[1];
        return `/product/${productSlug}-${productId}`;
    }
}
