import el from './../el';
import getProductObject from "./../productObject/getProductObject";
import getProductsItemHtml from "./../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationOnPageLoad from "../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import scrollDocument from "./../scrollDocument";
import FrequentAbsoluteFlashMessage from "../frequentAbsoluteFlashMessage";
import allProductsMustBeCached from "../allProductsMustBeCached";

export default class RendererByPaginationButton {

    constructor(data) {
        this.sourceOfFilteredProducts = data.sourceOfFilteredProducts;
        this.searchSettingsStore = data.searchSettingsStore;
        this.publicUrlMaker = data.publicUrlMaker;
        this.rendererOfPaginationBlock = data.rendererOfPaginationBlock;
        this.messenger = new FrequentAbsoluteFlashMessage();
        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        this.disabledRequest = false;

        this.currentPageNumber = 0;

        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.paginatorPageNumber) {
                e.preventDefault();
                this._setSearchSettings(e);
                this._showLoadingMessage();
                this._render();
            }
        });
    }

    _setSearchSettings(e) {
        this.searchSettingsStore.setProductSectionData({
            productSectionName: this.wrapper.dataset.productSectionName,
            additionalData: this.wrapper.dataset.additionalDataOfProductSection,
        });

        const settings = { ...this.searchSettingsStore.getSettings() };

        const pageNumber = Number(e.target.dataset.paginatorPageNumber);
        this.searchSettingsStore.setPageNumber(pageNumber);

        this.currentPageNumber = pageNumber;

        const offsetOfProductsToLoad = (pageNumber - 1) * settings.perPage;
        this.searchSettingsStore.setStartOffset(offsetOfProductsToLoad);

        const pageCount = Number(this.wrapper.dataset.sectionPageCount);
        this.searchSettingsStore.setPageCount(pageCount);
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

        this.sourceOfFilteredProducts.getFiltered()
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
                this._setSectionProductsCount(sectionProductsCount);
                this._finalActions();
            });
    }


    _setSectionProductsCount(sectionProductsCount) {
        this.wrapper.dataset.sectionProductsCount = sectionProductsCount;
        const settings = { ...this.searchSettingsStore.getSettings() };
        const sectionPageCount = String(Math.ceil(sectionProductsCount/settings.perPage));
        this.wrapper.dataset.sectionPageCount = sectionPageCount;
        this.searchSettingsStore.setPageCount(sectionPageCount);
    }


    _finalActions() {
        new FavoriteProductsIndicationOnPageLoad();
        this.publicUrlMaker.publishUrl();
        if (this.currentPageNumber === 1) {
            this._makeVisibleViewMoreButton();
        } else {
            this._makeInvisibleViewMoreButton();
        }
        this.rendererOfPaginationBlock.remake();
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
