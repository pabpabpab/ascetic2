import el from '../../el';
import getProductObject from "../../productObject/getProductObject";
import getProductsItemHtml from "../../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationOnPageLoad from "../../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import scrollDocument from "../../scrollDocument";
import FrequentAbsoluteFlashMessage from "../../frequentAbsoluteFlashMessage";
import allProductsMustBeCached from "../../allProductsMustBeCached";
import AppAncestor from "../../appAncestor";

export default class RendererOfViewedProductsByLink extends AppAncestor {

    constructor() {
        super();
        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        this.header = el('#productsH1');
        this.messenger = new FrequentAbsoluteFlashMessage();
        this.disabledRequest = false;

        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.viewedProductsLink) {
                e.preventDefault();
                this._setDataAttributes();
                this._setSearchSettings();
                this.app.searchSettingsStore.resetSettingsRelatedToSearchFilter();
                this._showLoadingMessage();
                this._render();
            }
        });
    }


    _setDataAttributes() {
        this.wrapper.dataset.productSectionName = 'viewedProducts';
    }

    _setSearchSettings(e) {
        this.app.searchSettingsStore.setProductSectionData({
            productSectionName: this.wrapper.dataset.productSectionName,
            additionalData: '',
        });
        this.app.searchSettingsStore.setPageNumber(1);
        this.app.searchSettingsStore.setStartOffset(0);
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

        this.app.sourceOfFilteredProducts.getViewedProductsFromServer()
            .then(({filteredProducts, sectionProductsCount, allViewedIdsStr}) => {
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
                this._setAllViewedIds(allViewedIdsStr);
                this._finalActions();
            });
    }

    _setSectionProductsCount(sectionProductsCount) {
        this.wrapper.dataset.sectionProductsCount = sectionProductsCount;
        const settings = this.app.searchSettingsStore.getSettings();
        const sectionPageCount = String(Math.ceil(sectionProductsCount/settings.perPage));
        this.wrapper.dataset.sectionPageCount = sectionPageCount;
        this.app.searchSettingsStore.setPageCount(sectionPageCount);
    }

    _setAllViewedIds(allViewedIdsStr) {
        this.wrapper.dataset.additionalDataOfProductSection = allViewedIdsStr;
        this.app.searchSettingsStore.setProductSectionData({
            productSectionName: this.wrapper.dataset.productSectionName,
            additionalData: allViewedIdsStr,
        });
    }

    _finalActions() {
        new FavoriteProductsIndicationOnPageLoad();
        this.app.publicUrlMaker.publishUrl();
        this._renderHeader();
        this._switchVisibilityOfViewMoreButton();
        this.app.rendererOfPaginationBlock.remake();
        this.app.menuLinkCssMaker.resetMenuLinksCss();

        const distance = window.pageYOffset;
        scrollDocument(distance, 'up');
    }


    _renderHeader() {
        this.header.innerText = 'Вы смотрели';
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
