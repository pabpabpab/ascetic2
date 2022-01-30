import el from './../el';
import getProductObject from "./../productObject/getProductObject";
import getProductsItemHtml from "./../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationOnPageLoad from "../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import scrollDocument from "./../scrollDocument";

export default class RendererByViewMoreButton {

    constructor(data) {
        this.sourceOfFilteredProducts = data.sourceOfFilteredProducts;
        this.searchSettingsStore = data.searchSettingsStore;
        this.publicUrlMaker = data.publicUrlMaker;
        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        //this.container = el('#productListContent'); // не делать указатель
        this.disabledRequest = false;

        el('body').addEventListener('click', (e) => {
            if (e.target.id === 'viewMoreButton') {
                this._setSearchSettings();
                this._render();
            }
        });
    }

    _setSearchSettings() {
        this.searchSettingsStore.setProductSectionData({
            productSectionName: this.wrapper.dataset.productSectionName,
            additionalData: this.wrapper.dataset.additionalDataOfProductSection,
        });

        const offsetOfProductsToLoad = document.querySelectorAll(this.productItemSelector).length;
        this.searchSettingsStore.setStartOffset(offsetOfProductsToLoad);
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
                const itemsHtml = itemsHtmlArr.join('');
                // получать элемент только без ранее созданного указателя
                el('#productListContent').insertAdjacentHTML('beforeend', itemsHtml);
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
        this._makeInvisiblePaginationBlock();
        this._switchVisibilityOfViewMoreButton();
        scrollDocument(200, 'down');
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
        if (!el('#paginationContent').classList.contains("display-none")) {
            el('#paginationContent').classList.add("display-none");
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
