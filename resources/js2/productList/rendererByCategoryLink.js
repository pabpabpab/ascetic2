import el from './../el';
import getProductObject from "./../productObject/getProductObject";
import getProductsItemHtml from "./../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationByPageLoad from "./../favoriteProducts/favoriteProductsIndicationByPageLoad";
import scrollDocument from "./../scrollDocument";

export default class RendererByCategoryLink {

    constructor(data) {
        this.sourceOfFilteredProducts = data.sourceOfFilteredProducts;
        this.searchSettingsStore = data.searchSettingsStore;
        this.publicUrlMaker = data.publicUrlMaker;
        this.rendererOfPaginationBlock = data.rendererOfPaginationBlock;
        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        this.header = el('#productsH1');
        this.disabledRequest = false;

        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.menuLinkCategoryId) {
                e.preventDefault();
                this._setDataAttributes(e);
                this._setSearchSettings(e);
                this._render();
            }
        });
    }


    _setDataAttributes(e) {
        const categoryId = e.target.dataset.menuLinkCategoryId;
        const categorySlug = e.target.dataset.menuLinkCategorySlug;
        const categoryName = e.target.dataset.menuLinkCategoryName;

        this.wrapper.dataset.productSectionName = 'productCategory';
        this.wrapper.dataset.additionalDataOfProductSection = `${categoryId};${categorySlug};${categoryName}`;
    }

    _setSearchSettings(e) {
        this.searchSettingsStore.setProductSectionData({
            productSectionName: this.wrapper.dataset.productSectionName,
            additionalData: this.wrapper.dataset.additionalDataOfProductSection,
        });
        this.searchSettingsStore.setPageNumber(1);
        this.searchSettingsStore.setStartOffset(0);
    }


    _render() {
        if (! this._getRequestPermission()) {
            return;
        }

        this.sourceOfFilteredProducts.getFiltered()
            .then((data) => {
                this.disabledRequest = false;
                const products = [...data];
                const itemsHtmlArr = products.map((product) => {
                    const productObject = getProductObject(product);
                    return getProductsItemHtml(productObject);
                });
                const itemsHtml = `<div id="productListContent">${ itemsHtmlArr.join('') }</div>`;
                if (el('#productListContent')) {
                    el('#productListContent').remove();
                }
                this.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);
                this._finalActions();
            });
    }

    _finalActions() {
        new FavoriteProductsIndicationByPageLoad();
        this.publicUrlMaker.publishUrl();
        this._renderHeader();
        this._makeVisibleViewMoreButton();
        this._makeInvisibleViewMoreButtonIfNeeded();
        this._makeInvisiblePaginationBlock();
        //this.rendererOfPaginationBlock.remake();

        const distance = window.pageYOffset;
        scrollDocument(distance, 'up');
    }

    _renderHeader() {
        const headerText = this.wrapper.dataset.additionalDataOfProductSection.split(';')[2];
        this.header.innerText = headerText;
    }

    _makeVisibleViewMoreButton() {
        const viewMoreButton = el('#viewMoreButton');
        if (viewMoreButton && viewMoreButton.classList.contains("display-none")) {
            viewMoreButton.classList.remove("display-none");
        }
    }

    _makeInvisibleViewMoreButtonIfNeeded() {
        const viewMoreButton = el('#viewMoreButton');
        const numberOfDisplayedProducts = document.querySelectorAll(this.productItemSelector).length;
        const sectionProductsCount = Number(this.wrapper.dataset.sectionProductsCount);
        if (numberOfDisplayedProducts >= sectionProductsCount) {
            if (viewMoreButton && !viewMoreButton.classList.contains("display-none")) {
                viewMoreButton.classList.add("display-none");
            }
        }
    }

    _makeInvisiblePaginationBlock() {
        const paginationBlock = el('#paginationContent');
        if (paginationBlock && !paginationBlock.classList.contains("display-none")) {
            paginationBlock.classList.add("display-none");
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
