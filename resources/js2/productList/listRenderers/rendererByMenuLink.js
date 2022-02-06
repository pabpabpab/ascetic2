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
                this.commit('resetSearchSettings');
                this._setSectionSettings(e);
                this._setPaginatorSettings();
                this._showLoadingMessage();
                this._render();
            }
        });
    }

    _setSectionSettings(e) {
        const sectionName = e.target.dataset.menuLinkSectionName;
        if (sectionName === 'allProducts') {
            this.commit('setSectionData', {
                sectionName: sectionName,
                additionalData: '',
                h1Text: e.target.dataset.menuLinkTitleText,
            });
            return;
        }
        if (sectionName === 'favoriteProducts') {
            this.commit('setSectionData', {
                sectionName: sectionName,
                additionalData: '',
                h1Text: e.target.dataset.menuLinkTitleText,
            });
            return;
        }
        if (sectionName === 'productCategory') {
            const categoryId = e.target.dataset.menuLinkCategoryId;
            const categorySlug = e.target.dataset.menuLinkCategorySlug;
            const categoryName = e.target.dataset.menuLinkCategoryName;
            this.commit('setSectionData', {
                sectionName: sectionName,
                additionalData: `${categoryId};${categorySlug};${categoryName}`,
                h1Text: categoryName,
            });
            return;
        }
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
        this._renderHeader();
        this._switchVisibilityOfViewMoreButton();
        // this._makeInvisiblePaginationBlock();
        this.components.rendererOfPaginationBlock.remake();

        const distance = window.pageYOffset;
        scrollDocument(distance, 'up');
    }

    _renderHeader() {
        this.header.innerText = this.state.sectionSettings.h1Text;
    }


    _switchVisibilityOfViewMoreButton() {
        const numberOfDisplayedProducts = document.querySelectorAll(this.productItemSelector).length;
        const sectionProductsCount = this.state.paginatorSettings.sectionProductsCount;
        if (numberOfDisplayedProducts >= sectionProductsCount) {
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
