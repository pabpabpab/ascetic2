import el from "../../el";
import getSorterBlockHtml from "../../html/productList/sorterBlock/getSorterBlockHtml";
import Aware from "../../parentClasses/app/aware";

export default class ProductSortMenuRenderer extends Aware {

    constructor() {
        super();
        this.wrapSelector = `#absoluteListOfSortingValues`;
        this.showCss = 'show_sorting_block';
        this.hideCss = 'hide_sorting_block';

        this.arrowSelector = '.sorting_modes__arrow'
        this.arrowUpCss = 'sorting_modes__arrow_up';

        if (!el('.sorting_modes__wrapper')) {
            return;
        }

        el('.sorting_modes__wrapper').addEventListener('click', (e) => {
            this._render();
        });
    }

    _render() {
        if (!el(this.wrapSelector)) {
            this._firstRender();
            this._justSetVisibilityToTrue();
            return;
        }
        this._switchVisibility();
    }

    _firstRender() {
        const html = getSorterBlockHtml();
        el('.sorting_modes__wrapper').insertAdjacentHTML('beforeend', html);
        this._listenBodyTag();
        this._listenThisBlock();
    }

    _listenBodyTag() {
        el('body').addEventListener('click', (e) => {
            this._setVisibilityToFalse(e);
        });
    }

    _listenThisBlock() {
        el(this.wrapSelector).addEventListener('click', (e) => {
            e.stopPropagation();
            if (!e.target.dataset.sortValue) {
                return;
            }
            el('#sortingModeValueContainer').innerText = e.target.innerText;
            this.commit('setSortMode', e.target.dataset.sortValue);
            this._setVisibilityToFalse2();
        });
    }

    _switchVisibility() {
        if (el(this.wrapSelector).classList.contains(this.hideCss)) {
            this._justSetVisibilityToTrue();
        } else {
            this._setVisibilityToFalse2();
        }
    }

    _justSetVisibilityToTrue() {
        if (!el(this.wrapSelector)) {
            return;
        }
        el(this.wrapSelector).classList.remove(this.hideCss);
        el(this.wrapSelector).classList.add(this.showCss);

        if (!el(this.arrowSelector).classList.contains(this.arrowUpCss)) {
            el(this.arrowSelector).classList.add(this.arrowUpCss);
        }
    }

    _setVisibilityToFalse(e) {
        if (!el(this.wrapSelector)) {
            return;
        }
        if (e.target === el(this.wrapSelector)) {
            return;
        }
        if (e.target.className.includes('sorting_modes')) {
            return;
        }
        this._setVisibilityToFalse2();
    }

    _setVisibilityToFalse2() {
        el(this.wrapSelector).classList.remove(this.showCss);
        el(this.wrapSelector).classList.add(this.hideCss);

        if (el(this.arrowSelector).classList.contains(this.arrowUpCss)) {
            el(this.arrowSelector).classList.remove(this.arrowUpCss);
        }
    }
}
