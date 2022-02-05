import el from '../../el';
import getProductObject from "../../productObject/getProductObject";
import getProductsItemHtml from "../../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationOnPageLoad from "../../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import scrollDocument from "../../scrollDocument";
import allProductsMustBeCached from "../../allProductsMustBeCached";
import FrequentAbsoluteFlashMessage from "../../frequentAbsoluteFlashMessage";
import Aware from "../../parentClasses/app/aware";

export default class RendererByMenuLink extends Aware {

    constructor() {
        super();
        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        this.header = el('#productsH1');
        this.messenger = new FrequentAbsoluteFlashMessage();
        this.disabledRequest = false;

        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.menuLinkSectionName) {
                e.preventDefault();
                this._setDataAttributes(e);
                this.commit('resetSearchSettings');
                this._setSectionSettings(e);
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

    _setSectionSettings(e) {
        this.commit('setSectionData', {
            sectionName: this.wrapper.dataset.productSectionName,
            additionalData: this.wrapper.dataset.additionalDataOfProductSection,
        });
        this.commit('setPageNumber', 1);
        this.commit('setStartOffset', 0);
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
                this._setSectionProductsCount(sectionProductsCount);
                this._finalActions();
            });
    }

    _setSectionProductsCount(sectionProductsCount) {
        this.wrapper.dataset.sectionProductsCount = sectionProductsCount;
        const settings = this.state.paginatorSettings;
        const sectionPageCount = String(Math.ceil(sectionProductsCount/settings.perPage));
        this.wrapper.dataset.sectionPageCount = sectionPageCount;
        this.commit('setPageCount', sectionPageCount);
    }


    _finalActions() {
        new FavoriteProductsIndicationOnPageLoad();
        this.components.publicUrlMaker.publishUrl();
        this._renderHeader();
        this._switchVisibilityOfViewMoreButton();
        // this._makeInvisiblePaginationBlock();
        this.components.rendererOfPaginationBlock.remake();

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
