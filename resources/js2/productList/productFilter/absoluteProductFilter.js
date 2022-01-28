import getFilterBlockHtml from "./../../html/productList/filterBlock/getFilterBlockHtml";
import getCategoriesBlockHtmlForFilter from "./../../html/productList/filterBlock/getCategoriesBlockHtmlForFilter";
import el from "../../el";
import scrollDocument from "../../scrollDocument";


export default class AbsoluteProductFilter {

    constructor(data) {
        this.productCache = data.productCache;
        this.categoryCache = data.categoryCache;

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
        this.productCache.getPriceRange()
            .then(({minPrice, maxPrice}) => {
                el('#minPriceTextInput').value = minPrice;
                el('#maxPriceTextInput').value = maxPrice;

                el('#minPriceRangeInput').min = minPrice;
                el('#minPriceRangeInput').max = maxPrice;
                el('#minPriceRangeInput').value = minPrice;

                el('#maxPriceRangeInput').min = minPrice;
                el('#maxPriceRangeInput').max = maxPrice;
                el('#maxPriceRangeInput').value = maxPrice;
            });

        this.categoryCache.getEntireList()
            .then((categories) => {
                const html = getCategoriesBlockHtmlForFilter(categories);
                el('#productFilterCategoriesWrapper').insertAdjacentHTML('afterbegin', html);
            });
    }

}
