import el from './../el';
import getProductObject from "./../productObject/getProductObject";
import getProductsItemHtml from "./../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationByPageLoad from "./../favoriteProducts/favoriteProductsIndicationByPageLoad";
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
            .then((data) => {
                this.disabledRequest = false;
                const products = [...data];
                const itemsHtmlArr = products.map((product) => {
                    const productObject = getProductObject(product);
                    return getProductsItemHtml(productObject);
                });
                const itemsHtml = itemsHtmlArr.join('');
                // получать элемент только без ранее созданного указателя
                el('#productListContent').insertAdjacentHTML('beforeend', itemsHtml);
                this._finalActions();
            });
    }

    _finalActions() {
        new FavoriteProductsIndicationByPageLoad();
        this.publicUrlMaker.publishUrl();
        this._makeInvisiblePaginationBlock();
        this._makeInvisibleViewMoreButtonIfNeeded();
        scrollDocument(200, 'down');
    }

    _makeInvisibleViewMoreButtonIfNeeded() {
        const numberOfDisplayedProducts = document.querySelectorAll(this.productItemSelector).length;
        const sectionProductsCountFromServer = Number(this.wrapper.dataset.sectionProductsCount);
        if (numberOfDisplayedProducts >= sectionProductsCountFromServer) {
            el('#viewMoreButton').classList.add("display-none");
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
