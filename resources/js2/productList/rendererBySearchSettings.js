import el from "../el";
import getProductObject from "../productObject/getProductObject";
import getProductsItemHtml from "../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationOnPageLoad from "../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import scrollDocument from "../scrollDocument";
import AbsoluteFlashMessage from "../absoluteFlashMessage";

export default class RendererBySearchSettings {

    constructor(data) {
        this.sourceOfFilteredProducts = data.sourceOfFilteredProducts;
        this.searchSettingsStore = data.searchSettingsStore;
        this.publicUrlMaker = data.publicUrlMaker;
        //this.rendererOfPaginationBlock = data.rendererOfPaginationBlock;
        this.menuLinkCssMaker = data.menuLinkCssMaker;

        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        this.header = el('#productsH1');

        this.disabledRequest = false;
    }

    checkSearchSettings() {
        const settings = this.searchSettingsStore.getSettings();
        if (settings.productSectionName.length > 0) {
            return;
        }
        this._render();
    }


    _render() {
        if (! this._getRequestPermission()) {
            return;
        }

        this.sourceOfFilteredProducts.getFiltered()
            .then(({filteredProducts, sectionProductsCount}) => {
                this.disabledRequest = false;
                const itemsHtmlArr = filteredProducts.map((product) => {
                    const productObject = getProductObject(product);
                    return getProductsItemHtml(productObject);
                });
                const itemsHtml = `<div id="productListContent">${ itemsHtmlArr.join('') }</div>`;
                if (el('#productListContent')) {
                    el('#productListContent').remove();
                }
                this.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);
                new AbsoluteFlashMessage(`Показано ${sectionProductsCount}`);
                this._setSectionProductsCount(sectionProductsCount);
                this._finalActions();
            });
    }

    _setSectionProductsCount(sectionProductsCount) {
        this.wrapper.dataset.sectionProductsCount = sectionProductsCount;
        const settings = this.searchSettingsStore.getSettings();
        const sectionPageCount = String(Math.ceil(sectionProductsCount/settings.perPage));
        this.wrapper.dataset.sectionPageCount = sectionPageCount;
        this.searchSettingsStore.setPageCount(sectionPageCount);
    }


    _finalActions() {
        new FavoriteProductsIndicationOnPageLoad();
        this.publicUrlMaker.publishUrl();
        this._renderHeader();
        this._switchVisibilityOfViewMoreButton();
        this._makeInvisiblePaginationBlock();
        //this.rendererOfPaginationBlock.remake();
        this.menuLinkCssMaker.resetMenuLinksCss();
        //this.menuLinkCssMaker.markActiveMenuLink();

        const distance = window.pageYOffset;
        scrollDocument(distance, 'up');
    }

    _renderHeader() {
        this.header.innerText = 'Поиск товаров';
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

    _getRequestPermission() {
        // защита от частых отправок на 3 сек
        if (this.disabledRequest) {
            return false;
        }
        this.disabledRequest = true;
        setTimeout(() => {
            this.disabledRequest = false;
        }, 3000);

        return true;
    }
}
