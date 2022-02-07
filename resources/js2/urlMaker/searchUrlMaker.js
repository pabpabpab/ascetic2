import Aware from "../parentClasses/app/aware";

export default class SearchUrlMaker extends Aware {

    constructor() {
        super();
        this.startUrl = '/public-js/product-search';
    }


    getUrl() {
        if (this._isUrlOfFavoriteProducts()) {
            const startOffset = this.state.paginatorSettings.startOffset;
            const sortMode = this.state.paginatorSettings.startOffset;
            return `/public-js/favorite-products/sort/${sortMode}/offset/${startOffset}`;
        }
        if (this._isUrlOfViewedProducts()) {
            const startOffset = this.state.paginatorSettings.startOffset;
            return `/public-js/viewed-products/offset/${startOffset}`;
        }

        const totalUrl = [
            this.startUrl,
            this._getMinPriceUrl(),
            this._getMaxPriceUrl(),
            this._getCategoriesUrl(),
            this._getSortUrl(),
            this._getOffsetUrl(),
        ];

        console.log(totalUrl.join(''));


        return totalUrl.join('');
        // вида /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/offset/{startOffset}
    }


    _getMinPriceUrl() {
        return `/price/${this.state.searchSettings.minPrice}-`;
    }
    _getMaxPriceUrl() {
        return `${this.state.searchSettings.maxPrice}`;
    }
    _getCategoriesUrl() {
        if (this.state.searchSettings.categoriesIds.length > 0) {
            return `/categories/${this.state.searchSettings.categoriesIds.join('-')}`;
        }
        if (this.state.sectionSettings.productSectionName === 'productCategory') {
            return `/categories/${this.state.sectionSettings.additionalData.split(';')[0]}`;
        }
        return '/categories/0';
    }
    _getSortUrl() {
        return `/sort/${this.state.sortSettings.mode}`;
    }
    _getOffsetUrl() {
        return `/offset/${this.state.paginatorSettings.startOffset}`;
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

}
