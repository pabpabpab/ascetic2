import el from '../../auxiliaryFunctions/el';
import getProductObject from "../../productObject/getProductObject";
import getProductsItemHtml from "../../html/productList/productListItem/index-getProductsItemHtml";
import scrollDocument from "../../auxiliaryFunctions/scrollDocument";
import allProductsMustBeCached from "../../auxiliaryFunctions/allProductsMustBeCached";
import FrequentAbsoluteFlashMessage from "../../message/frequentAbsoluteFlashMessage";
import Aware from "../../parentClasses/app/aware";

export default class RendererBySectionLink extends Aware {

    constructor() {
        super();
        this.productItemSelector = '[data-product-item]';
        this.wrapper = el('#productList');
        this.messenger = new FrequentAbsoluteFlashMessage();
        this.disabledRequest = false;

        el('body').addEventListener('click', (e) => {
            const dataset = e.target.dataset;
            if (dataset.menuLinkSectionName || dataset.linkSectionName) {
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
        const dataset = e.target.dataset;
        const sectionName = dataset.menuLinkSectionName ?? dataset.linkSectionName;
        if (sectionName === 'allProducts') {
            this.commit('setSectionData', {
                sectionName: sectionName,
                additionalData: '',
                h1Text: dataset.menuLinkTitleText,
            });
            return;
        }
        if (sectionName === 'favoriteProducts') {
            this.commit('setSectionData', {
                sectionName: sectionName,
                additionalData: '',
                h1Text: dataset.menuLinkTitleText,
            });
            return;
        }
        if (sectionName === 'productCategory') {
            const categoryId = dataset.menuLinkCategoryId ?? dataset.linkCategoryId;
            const categorySlug = dataset.menuLinkCategorySlug ?? dataset.linkCategorySlug;
            const categoryName = dataset.menuLinkCategoryName ?? dataset.linkCategoryName;
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
        this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
        this.components.publicUrlMaker.publishUrl();
        this.components.rendererOfPaginationBlock.remake();

        const distance = window.pageYOffset;
        scrollDocument(distance, 'up');
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
