import el from "../../auxiliaryFunctions/el";
import getProductObject from "../../productObject/getProductObject";
import getProductsItemHtml from "../../html/productList/productListItem/index-getProductsItemHtml";
import allProductsMustBeCached from "../../auxiliaryFunctions/allProductsMustBeCached";
import FrequentAbsoluteFlashMessage from "../../message/frequentAbsoluteFlashMessage";
import Aware from "../../parentClasses/app/aware";

export default class RendererBySortSettings extends Aware {

    constructor() {
        super();
        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');

        this.timeWhenSearchSettingsWereLastChanged = 0;
        this.timeWhenLastRequestWasSent = 0;
        this.timerId = 0;

        this.messenger = new FrequentAbsoluteFlashMessage();
    }

    checkSortSettings() {
        if (this.locked) {
            return;
        }

        this._setPaginatorSettings();

        if (allProductsMustBeCached()) {
            this._render();
        } else {
            this.timeWhenSearchSettingsWereLastChanged = new Date().getTime();
            this._showLoadingMessage();
            this._renderWithDelay();
        }
    }

    _setPaginatorSettings() {
        this.commit('setStartOffset', 0);
        this.commit('setPageNumber', 1);
    }

    _renderWithDelay() {
        const currentTime = new Date().getTime();
        const settingsWereLastChangedAgo = currentTime - this.timeWhenSearchSettingsWereLastChanged;
        const requestWasSentAgo = currentTime - this.timeWhenLastRequestWasSent;

        if (settingsWereLastChangedAgo < 500 || requestWasSentAgo < 2000) {
            clearTimeout(this.timerId);
            this.timerId = setTimeout(() => {
                this._renderWithDelay();
            }, 500);
            return;
        }

        //this._showLoadingMessage();
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
        this.components.waitingScreen.show();
        this.components.sourceOfFilteredProducts.getFiltered()
            .then(({filteredProducts, sectionProductsCount}) => {
                this.messenger.hideMessage();
                const viewMode = this.state.viewSettings.mode;
                const itemsHtmlArr = filteredProducts.map((product) => {
                    const productObject = getProductObject(product);
                    return getProductsItemHtml(productObject, viewMode);
                });
                const itemsHtml = `<div id="productListContent">${ itemsHtmlArr.join('') }</div>`;
                if (el('#productListContent')) {
                    el('#productListContent').remove();
                }
                this.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);

                this._listenLastItemLoading();
                this._setProductsCount(sectionProductsCount);
                this._finalActions();
                this._showFinalMessage();
            });
    }

    _listenLastItemLoading() {
        let nodes = el('#productListContent').querySelectorAll('.product_item__photo__img');
        let lastNode = nodes[nodes.length-1];
        lastNode.onload = this.components.waitingScreen.hide();
    }

    _setProductsCount(sectionProductsCount) {
        this.commit('setSectionProductsCount', sectionProductsCount);
        const settings = this.state.paginatorSettings;
        const sectionPageCount = String(Math.ceil(sectionProductsCount/settings.perPage));
        this.commit('setPageCount', sectionPageCount);
    }

    _finalActions() {
        this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
        this.components.publicUrlMaker.publishUrl();
        this._makeInvisiblePaginationBlock();
        //this.components.rendererOfPaginationBlock.remake();
    }

    _makeInvisiblePaginationBlock() {
        const paginationBlock = el('#paginationContent');
        if (paginationBlock && !paginationBlock.classList.contains("display_none")) {
            paginationBlock.classList.add("display_none");
        }
    }

    _showFinalMessage() {
        if (!allProductsMustBeCached()) {
            return;
        }
        this.messenger.render({
            text: `Отсортировано`,
            duration: 1500
        });
    }
}
