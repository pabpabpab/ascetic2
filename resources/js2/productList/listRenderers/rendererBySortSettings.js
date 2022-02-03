import el from "../../el";
import getProductObject from "../../productObject/getProductObject";
import getProductsItemHtml from "../../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationOnPageLoad from "../../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import scrollDocument from "../../scrollDocument";
import allProductsMustBeCached from "../../allProductsMustBeCached";
import FrequentAbsoluteFlashMessage from "../../frequentAbsoluteFlashMessage";
import AppAncestor from "../../appAncestor";

export default class RendererBySortSettings extends AppAncestor {

    constructor(data) {
        super();
        //this.sourceOfFilteredProducts = data.sourceOfFilteredProducts;
        //this.sortSettingsStore = data.sortSettingsStore;
        //this.searchSettingsStore = data.searchSettingsStore;
        //this.publicUrlMaker = data.publicUrlMaker;
        //this.rendererOfPaginationBlock = data.rendererOfPaginationBlock;
        //this.menuLinkCssMaker = data.menuLinkCssMaker;

        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        //this.header = el('#productsH1');

        this.timeWhenSearchSettingsWereLastChanged = 0;
        this.timeWhenLastRequestWasSent = 0;
        this.timerId = 0;

        this.messenger = new FrequentAbsoluteFlashMessage();

        this.locked = false;
    }

    // блокировать на время установки sortSettings
    // при загрузке страницы с параметрами сортировки в url
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }

    checkSortSettings() {
        if (this.locked) {
            return;
        }

        this.app.searchSettingsStore.setStartOffset(0);
        this.app.searchSettingsStore.setPageNumber(1);

        if (allProductsMustBeCached()) {
            this._render();
        } else {
            this.timeWhenSearchSettingsWereLastChanged = new Date().getTime();
            this._renderWithDelay();
        }
    }

    _renderWithDelay() {
        const currentTime = new Date().getTime();
        const settingsWereLastChangedAgo = currentTime - this.timeWhenSearchSettingsWereLastChanged;
        const requestWasSentAgo = currentTime - this.timeWhenLastRequestWasSent;

        if (settingsWereLastChangedAgo < 1000 || requestWasSentAgo < 2000) {
            clearTimeout(this.timerId);
            this.timerId = setTimeout(() => {
                this._renderWithDelay();
            }, 1000);
            return;
        }

        this._showLoadingMessage();
        this.timeWhenLastRequestWasSent = new Date().getTime();
        //setTimeout(() => {this._render();}, 2000);
        this._render();
    }

    _showLoadingMessage() {
        this.messenger.render({
            text: 'Загрузка...',
            duration: 9500
        });
    }

    _render() {
        this.app.sourceOfFilteredProducts.getFiltered()
            .then(({filteredProducts, sectionProductsCount}) => {
                this.messenger.hideMessage();
                const itemsHtmlArr = filteredProducts.map((product) => {
                    const productObject = getProductObject(product);
                    return getProductsItemHtml(productObject);
                });
                const itemsHtml = `<div id="productListContent">${ itemsHtmlArr.join('') }</div>`;
                if (el('#productListContent')) {
                    el('#productListContent').remove();
                }
                this.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);
                this.messenger.render({
                    text: `Отсортировано`,
                    duration: 2500
                });
                this._finalActions();
            });
    }


    _finalActions() {
        new FavoriteProductsIndicationOnPageLoad();
        this.app.publicUrlMaker.publishUrl();
        this._switchVisibilityOfViewMoreButton();
        this._makeInvisiblePaginationBlock();
        //this.app.rendererOfPaginationBlock.remake();
    }


    _switchVisibilityOfViewMoreButton() {
        const numberOfDisplayedProducts = document.querySelectorAll(this.productItemSelector).length;
        const sectionProductsCountFromServer = Number(this.wrapper.dataset.sectionProductsCount);
        if (numberOfDisplayedProducts >= sectionProductsCountFromServer) {
            this._turnOffViewMoreButton();
        } else {
            this._turnOnViewMoreButton();
        }
    }
    _turnOnViewMoreButton() {
        const viewMoreButton = el('#viewMoreButton');
        if (viewMoreButton.classList.contains("display-none")) {
            viewMoreButton.classList.remove("display-none");
        }
    }
    _turnOffViewMoreButton() {
        const viewMoreButton = el('#viewMoreButton');
        if (!viewMoreButton.classList.contains("display-none")) {
            viewMoreButton.classList.add("display-none");
        }
    }


    _makeInvisiblePaginationBlock() {
        const paginationBlock = el('#paginationContent');
        if (paginationBlock && !paginationBlock.classList.contains("display-none")) {
            paginationBlock.classList.add("display-none");
        }
    }

}