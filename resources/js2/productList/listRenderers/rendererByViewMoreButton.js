import el from '../../auxiliaryFunctions/el';
import getProductObject from "../../productObject/getProductObject";
import getProductsItemHtml from "../../html/productList/productListItem/index-getProductsItemHtml";
import scrollDocument from "../../auxiliaryFunctions/scrollDocument";
import FrequentAbsoluteFlashMessage from "../../message/frequentAbsoluteFlashMessage";
import allProductsMustBeCached from "../../auxiliaryFunctions/allProductsMustBeCached";
import Aware from "../../parentClasses/app/aware";

export default class RendererByViewMoreButton extends Aware {

    constructor() {
        super();
        this.messenger = new FrequentAbsoluteFlashMessage();
        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        //this.container = el('#productListContent'); // не делать указатель
        this.disabledRequest = false;

        el('body').addEventListener('click', (e) => {
            if (e.target.id === 'viewMoreButton') {
                this._setPaginatorSettings();
                this._showLoadingMessage();
                this._render();
            }
        });
    }

    _setPaginatorSettings() {
        const offsetOfProductsToLoad = document.querySelectorAll(this.productItemSelector).length;
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
                const itemsHtml = itemsHtmlArr.join('');
                //const itemsHtml = `<div class="product_list__content show_block">${ itemsHtmlArr.join('') }</div>`;
                // получать элемент только без ранее созданного указателя
                el('#productListContent').insertAdjacentHTML('beforeend', itemsHtml);
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
        this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
        this._makeInvisiblePaginationBlock();
        scrollDocument(200, 'down');
    }

    _makeInvisiblePaginationBlock() {
        const paginationBlock = el('#paginationContent');
        if (!paginationBlock) {
            return;
        }
        if (!paginationBlock.classList.contains("display-none")) {
            paginationBlock.classList.add("display-none");
        }
    }

    _getRequestPermission() {
        // защита от частых отправок на 15 сек (от двойного нажатия)
        if (this.disabledRequest) {
            return false;
        }
        this.disabledRequest = true;
        setTimeout(() => {
            this.disabledRequest = false;
        }, 15000);

        return true;
    }
}
