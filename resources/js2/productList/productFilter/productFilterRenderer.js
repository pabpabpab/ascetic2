import getFilterBlockHtml from "./../../html/productList/filterBlock/getFilterBlockHtml";
import getPriceBlockHtmlForFilter from "./../../html/productList/filterBlock/getPriceBlockHtmlForFilter";
import getCategoriesBlockHtmlForFilter from "./../../html/productList/filterBlock/getCategoriesBlockHtmlForFilter";
import el from "../../el";
import getJson from "../../http/getJson";
import ProductFilterHandler from "./productFilterHandler";


export default class ProductFilterRenderer {

    constructor(data) {
        this.productCache = data.productCache;
        this.categoryCache = data.categoryCache;
        this.searchSettingsStore = data.searchSettingsStore;

        // для использовани при загрузке страницы с сервера с поисковыми параметрами в url
        this.searchSettingsObserver = data.searchSettingsObserver;

        this.priceRangeUrl = '/public-js/product-price-range';
        this.minPriceLimit = 0;
        this.maxPriceLimit = 0;


        this.wrapSelector = `#productFilterWrapper`;
        this.basicCss = 'product_filter';
        this.showCss = 'show_product_filter';
        this.hideCss = 'hide_product_filter';

        el('.filter_icon__wrapper').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this._render();
        });
    }

    _render() {
        if (!el(this.wrapSelector)) {
            this._firstRender();
            this._justSetVisibilityToTrue();
            return;
        }
        this._justSetVisibilityToTrue();
    }

    _firstRender() {
        const html = getFilterBlockHtml();
        el('body').insertAdjacentHTML('beforeend', html);
        this._setInitialDataForFilter();
        this._listenBodyTag();
        this._listenThisBlock();
    }

    _listenBodyTag() {
        el('body').addEventListener('click', (e) => {
            this._setVisibilityToFalse(e);
        });
    }

    _listenThisBlock() {
        el('.product_filter__collapse_icon').addEventListener('click', () => {
            this._setVisibilityToFalse2();
        });
        el('.product_filter__ready_button').addEventListener('click', () => {
            this._setVisibilityToFalse2();
        });
        new ProductFilterHandler({
            filterBlock: this,
            searchSettingsStore: this.searchSettingsStore,
        });
    }

    _justSetVisibilityToTrue() {
        if (!el(this.wrapSelector)) {
            return;
        }
        //const distance = window.pageYOffset;
        //scrollDocument(distance, 'up');
        document.body.style.overflow = 'hidden';
        el(this.wrapSelector).className = `${this.basicCss} ${this.showCss}`;
    }

    _setVisibilityToFalse(e) {
        if (!el(this.wrapSelector)) {
            return;
        }
        if (e.target === el(this.wrapSelector)) {
            return;
        }
        if (e.target.className.includes('product_filter')) {
            return;
        }
        this._setVisibilityToFalse2();
    }
    _setVisibilityToFalse2() {
        el(this.wrapSelector).className = `${this.basicCss} ${this.hideCss}`;
        document.body.style.overflow = 'auto';
    }

    _setInitialDataForFilter() {
        this._getPriceRange()
            .then(({minPrice, maxPrice}) => {
                const spinner = el('#productFilterPriceSectionSpinner');
                if (spinner) {
                    spinner.remove();
                }
                const html = getPriceBlockHtmlForFilter();
                el('#productFilterPriceSectionWrapper').insertAdjacentHTML('afterbegin', html);

                el('#minPriceTextInput').value = minPrice;
                el('#maxPriceTextInput').value = maxPrice;

                el('#minPriceRangeInput').min = minPrice;
                el('#minPriceRangeInput').max = maxPrice;
                el('#minPriceRangeInput').value = minPrice;

                el('#maxPriceRangeInput').min = minPrice;
                el('#maxPriceRangeInput').max = maxPrice;
                el('#maxPriceRangeInput').value = maxPrice;

                // при загрузке страницы с сервера с поисковыми параметрами
                this.searchSettingsObserver.renderPriceOnLoad();
            });

        this.categoryCache.getEntireList()
            .then((categories) => {
                const spinner = el('#productFilterCategoriesSpinner');
                if (spinner) {
                    spinner.remove();
                }
                const html = getCategoriesBlockHtmlForFilter(categories);
                el('#productFilterCategoriesWrapper').insertAdjacentHTML('afterbegin', html);

                // при загрузке страницы с сервера с поисковыми параметрами
                this.searchSettingsObserver.renderCategoryCheckboxes();
            });
    }


    _getPriceRange() {
        if (this.productCache.entireList.length > 0) {
            return new Promise(resolve =>
                resolve(this._getPriceRangeFromCachedProducts())
            );
        }
        return getJson(this.priceRangeUrl)
            .then((data) => {
                this.minPriceLimit = Number(data.minPrice);
                this.maxPriceLimit = Number(data.maxPrice);
                return data;
            });
    }
    _getPriceRangeFromCachedProducts() {
        const minPrice = this.productCache.entireList.reduce((minPrice, item) => {
            return minPrice < item.price ? minPrice : item.price;
        }, 100000000000000000);
        const integerMinPrice = Math.floor(minPrice);
        this.minPriceLimit = integerMinPrice;

        const maxPrice = this.productCache.entireList.reduce((maxPrice, item) => {
            return maxPrice > item.price ? maxPrice : item.price;
        }, 0);
        const integerMaxPrice = Math.ceil(maxPrice);
        this.maxPriceLimit = integerMaxPrice;

        return {
            minPrice: integerMinPrice,
            maxPrice: integerMaxPrice,
        };
    }

}
