import el from '../../auxiliaryFunctions/el';
import getProductObject from "../../productObject/getProductObject";
import getProductsItemHtml from "../../html/productList/productListItem/index-getProductsItemHtml";
import scrollDocument from "../../auxiliaryFunctions/scrollDocument";
import FrequentAbsoluteFlashMessage from "../../message/frequentAbsoluteFlashMessage";
import allProductsMustBeCached from "../../auxiliaryFunctions/allProductsMustBeCached";
import Aware from "../../parentClasses/app/aware";

export default class RendererOfViewedProductsByLink extends Aware {

    constructor() {
        super();
        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        this.messenger = new FrequentAbsoluteFlashMessage();
        this.disabledRequest = false;

        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.viewedProductsLink) {
                e.preventDefault();
                this.components.waitingScreen.show();
                this.commit('resetSearchSettings');
                this._setSectionSettings();
                this._setPaginatorSettings();
                this._showLoadingMessage();
                this._render();
            }
        });
    }

    _setSectionSettings() {
        this.commit('setSectionData', {
            sectionName: 'viewedProducts',
            additionalData: '',
            h1Text: 'Вы смотрели',
        });
    }

    _setPaginatorSettings() {
        this.commit('setStartOffset', 0);
        this.commit('setPageNumber', 1);
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

        this.components.sourceOfFilteredProducts.getViewedProductsFromServer()
            .then(({filteredProducts, sectionProductsCount, allViewedIdsStr}) => {
                this.disabledRequest = false;
                this.messenger.hideMessage();
                const viewMode = this.state.viewSettings.mode;
                const itemsHtmlArr = filteredProducts.map((product) => {
                    const productObject = getProductObject(product);
                    return getProductsItemHtml(productObject, viewMode);
                });
                const itemsHtml = `<div id="productListContent" class="show_block">${ itemsHtmlArr.join('') }</div>`;
                if (el('#productListContent')) {
                    el('#productListContent').remove();
                }
                this.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);

                this._listenLastItemLoading();
                this._setProductsCount(sectionProductsCount);
                this._setAllViewedIds(allViewedIdsStr);
                this._finalActions();
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

    _setAllViewedIds(allViewedIdsStr) {
        this.commit('setSectionData', {
            sectionName: 'viewedProducts',
            additionalData: allViewedIdsStr,
            h1Text: 'Вы смотрели',
        });
    }

    _finalActions() {
        this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
        this.components.publicUrlMaker.publishUrl();
        this.components.rendererOfPaginationBlock.remake();

        const distance = window.pageYOffset + window.innerHeight/2;
        scrollDocument(distance, 'up');
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
