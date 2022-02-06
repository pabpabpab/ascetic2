import el from '../../el';
import getProductObject from "../../productObject/getProductObject";
import getProductsItemHtml from "../../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationOnPageLoad from "../../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import scrollDocument from "../../scrollDocument";
import FrequentAbsoluteFlashMessage from "../../frequentAbsoluteFlashMessage";
import allProductsMustBeCached from "../../allProductsMustBeCached";
import Aware from "../../parentClasses/app/aware";

export default class RendererByPaginationButton extends Aware {

    constructor() {
        super();
        this.messenger = new FrequentAbsoluteFlashMessage();
        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        this.disabledRequest = false;

        this.currentPageNumber = 0;

        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.paginatorPageNumber) {
                e.preventDefault();
                this._setPaginatorSettings(e);
                this._showLoadingMessage();
                this._render();
            }
        });
    }

    _setPaginatorSettings(e) {
        const settings = this.state.paginatorSettings;
        const pageNumber = Number(e.target.dataset.paginatorPageNumber);
        this.commit('setPageNumber', pageNumber);
        this.currentPageNumber = pageNumber;
        const offsetOfProductsToLoad = (pageNumber - 1) * settings.perPage;
        this.commit('setStartOffset', offsetOfProductsToLoad);
    }

    _showLoadingMessage() {
        if (allProductsMustBeCached()) {
            return;
        }
        this.messenger.render({
            text: 'Загрузка...',
            duration: 9500
        });
    }

    _render() {
        if (! this._getRequestPermission()) {
            return;
        }

        this.components.sourceOfFilteredProducts.getFiltered()
            .then(({filteredProducts, sectionProductsCount}) => {
                this.disabledRequest = false;
                this.messenger.hideMessage();
                const itemsHtmlArr = filteredProducts.map((product) => {
                    const productObject = getProductObject(product);
                    return getProductsItemHtml(productObject);
                });
                const itemsHtml = `<div id="productListContent" class="show_block">${ itemsHtmlArr.join('') }</div>`;
                if (el('#productListContent')) {
                    el('#productListContent').remove();
                }
                this.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);
                this._setProductsCount(sectionProductsCount);
                this._finalActions();
            });
    }

    _setProductsCount(sectionProductsCount) {
        this.commit('setSectionProductsCount', sectionProductsCount);
        const settings = this.state.paginatorSettings;
        const sectionPageCount = String(Math.ceil(sectionProductsCount/settings.perPage));
        this.commit('setPageCount', sectionPageCount);
    }

    _finalActions() {
        new FavoriteProductsIndicationOnPageLoad();
        this.components.publicUrlMaker.publishUrl();
        if (this.currentPageNumber === 1) {
            this._makeVisibleViewMoreButton();
        } else {
            this._makeInvisibleViewMoreButton();
        }
        this.components.rendererOfPaginationBlock.remake();
        const distance = window.pageYOffset;
        scrollDocument(distance, 'up');
    }

    _makeVisibleViewMoreButton() {
        const viewMoreButton = el('#viewMoreButton');
        if (viewMoreButton && viewMoreButton.classList.contains("display-none")) {
            viewMoreButton.classList.remove("display-none");
        }
    }

    _makeInvisibleViewMoreButton() {
        const viewMoreButton = el('#viewMoreButton');
        if (viewMoreButton && !viewMoreButton.classList.contains("display-none")) {
            viewMoreButton.classList.add("display-none");
        }
    }

    _getRequestPermission() {
        // защита от частых отправок на 10 сек (от двойного нажатия)
        if (this.disabledRequest) {
            return false;
        }
        this.disabledRequest = true;
        setTimeout(() => {
            this.disabledRequest = false;
        }, 10000);

        return true;
    }
}
