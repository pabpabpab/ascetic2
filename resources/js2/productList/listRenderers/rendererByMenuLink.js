import el from '../../el';
import getProductObject from "../../productObject/getProductObject";
import getProductsItemHtml from "../../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationOnPageLoad from "../../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import scrollDocument from "../../scrollDocument";
import allProductsMustBeCached from "../../allProductsMustBeCached";
import FrequentAbsoluteFlashMessage from "../../frequentAbsoluteFlashMessage";
import AppAncestor from "../../appAncestor";

export default class RendererByMenuLink extends AppAncestor {

    constructor(data) {
        super();
        //this.sourceOfFilteredProducts = data.sourceOfFilteredProducts;
        //this.searchSettingsStore = data.searchSettingsStore;
        //this.publicUrlMaker = data.publicUrlMaker;
        //this.rendererOfPaginationBlock = data.rendererOfPaginationBlock;
        //this.menuLinkCssMaker = data.menuLinkCssMaker;
        this.messenger = new FrequentAbsoluteFlashMessage();

        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        this.header = el('#productsH1');

        this.disabledRequest = false;

        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.menuLinkSectionName) {
                e.preventDefault();
                this._setDataAttributes(e);
                this._setSearchSettings(e);
                this.app.searchSettingsStore.resetSettingsRelatedToSearchFilter();
                this._showLoadingMessage();
                this._render();
            }
        });
    }

    _setDataAttributes(e) {
        const sectionName = e.target.dataset.menuLinkSectionName;
        this.wrapper.dataset.productSectionName = sectionName;
        if (sectionName === 'all') {
            const h1Text = e.target.dataset.menuLinkTitleText;
            this.wrapper.dataset.additionalDataOfProductSection = `;;${h1Text}`;
            return;
        }
        if (sectionName === 'favoriteProducts') {
            const h1Text = e.target.dataset.menuLinkTitleText;
            this.wrapper.dataset.additionalDataOfProductSection = `;;${h1Text}`;
            return;
        }
        if (sectionName === 'productCategory') {
            const categoryId = e.target.dataset.menuLinkCategoryId;
            const categorySlug = e.target.dataset.menuLinkCategorySlug;
            const categoryName = e.target.dataset.menuLinkCategoryName;
            this.wrapper.dataset.additionalDataOfProductSection = `${categoryId};${categorySlug};${categoryName}`;
            return;
        }
    }

    _setSearchSettings(e) {
        this.app.searchSettingsStore.setProductSectionData({
            productSectionName: this.wrapper.dataset.productSectionName,
            additionalData: this.wrapper.dataset.additionalDataOfProductSection,
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

        this.app.sourceOfFilteredProducts.getFiltered()
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
        const settings = this.app.searchSettingsStore.getSettings();
        const sectionPageCount = String(Math.ceil(sectionProductsCount/settings.perPage));
        this.wrapper.dataset.sectionPageCount = sectionPageCount;
        this.app.searchSettingsStore.setPageCount(sectionPageCount);
    }


    _finalActions() {
        new FavoriteProductsIndicationOnPageLoad();
        this.app.publicUrlMaker.publishUrl();
        this._renderHeader();
        this._switchVisibilityOfViewMoreButton();
        // this._makeInvisiblePaginationBlock();
        this.app.rendererOfPaginationBlock.remake();
        this.app.menuLinkCssMaker.resetMenuLinksCss();
        this.app.menuLinkCssMaker.markActiveMenuLink();

        const distance = window.pageYOffset;
        scrollDocument(distance, 'up');
    }

    _renderHeader() {
        const headerText = this.wrapper.dataset.additionalDataOfProductSection.split(';')[2];
        this.header.innerText = headerText;
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

    /*
    _makeInvisiblePaginationBlock() {
        const paginationBlock = el('#paginationContent');
        if (paginationBlock && !paginationBlock.classList.contains("display-none")) {
            paginationBlock.classList.add("display-none");
        }
    }
   */

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
