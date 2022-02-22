import Aware from "../../parentClasses/app/aware";
import el from "../../auxiliaryFunctions/el";
import FrequentAbsoluteFlashMessage from "../../message/frequentAbsoluteFlashMessage";
import allProductsMustBeCached from "../../auxiliaryFunctions/allProductsMustBeCached";
import getProductObject from "../../productObject/getProductObject";
import getProductsItemHtml from "../../html/productList/productListItem/index-getProductsItemHtml";
import scrollDocument from "../../auxiliaryFunctions/scrollDocument";
import getSingleProductHtml from "../../html/singleProduct/index-getSingleProductHtml";
import singleProductKit from "../../productSingle/singleProductKit";

export default class RendererByLinkOfOneProductItem extends Aware {

    constructor() {
        super();
        this.wrapper = el('#productList');
        this.messenger = new FrequentAbsoluteFlashMessage();

        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.productItemLink) {
                e.preventDefault();
                e.stopPropagation();
                this.components.rendererBySearchSettings.lock();
                this.commit('resetSearchSettings');
                this.components.rendererBySearchSettings.unlock();
                const productId = Number(e.target.dataset.productItemLink);
                this._setSectionSettings(productId);
                this._setPaginatorSettings();
                this._showSingleProductPage(productId);
                this.components.viewedProductsAppender.post(productId);
            }
        });
    }

    _setSectionSettings(productId) {
        this.commit('setSectionData', {
            sectionName: 'singleProduct',
            additionalData: productId,
            h1Text: '',
        });
    }
    _setPaginatorSettings() {
        this.commit('setSectionProductsCount', 0);
        this.commit('setStartOffset', 0);
        this.commit('setPageNumber', 1);
        this.commit('setPageCount', 0);
    }

    _showSingleProductPage(productId) {
        // на страницах где есть список товаров
        if (allProductsMustBeCached()) {
            this._showOneFromCache(productId);
        } else {
            this._showLoadingMessage();
            this._showOneFromServer(productId);
        }
    }

    _showOneFromCache(productId) {
        return this.components.productCache.getEntireList()
            .then((data) => {
                const list = [...data];
                const product = list.filter(item => item.id === productId)[0];
                this.components.viewedProductsSummaryMaker.remakeWith(product);
                const productObject = getProductObject(product);
                this._renderProduct(productObject);
                this._storeSlug(productObject);
                this._finalActions();
                this.components.productCache.getOneDescription(productId)
                    .then((data) => {
                        el('#productDescriptionContainer').innerText = data.description;
                    });
            });
    }

    _showOneFromServer(productId) {
        return this.components.productCache.getOneFromServer(productId)
            .then((product) => {
                this.messenger.hideMessage();
                this.components.viewedProductsSummaryMaker.remakeWith(product);
                const productObject = getProductObject(product);
                this._renderProduct(productObject);
                this._storeSlug(productObject);
                this._finalActions();
            });
    }

    _renderProduct(product) {
        let singleProductHtml = getSingleProductHtml(product);
        singleProductHtml = singleProductHtml.replaceAll("quickProductFavIcon", "favIcon");
        singleProductHtml = `<div id="productListContent" class="show_block">${ singleProductHtml }</div>`;

        if (el('#productListContent')) {
            el('#productListContent').remove();
        }
        this.wrapper.insertAdjacentHTML('afterbegin', singleProductHtml);
        singleProductKit();
    }

    _storeSlug(product) {
        this.commit('setSectionData', {
            sectionName: 'singleProduct',
            additionalData: `${product.id};${product.slug}`,
            h1Text: '',
        });
    }

    _finalActions() {
        this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
        this.components.publicUrlMaker.publishUrl();
        this._makeInvisiblePaginationBlock();

        const distance = window.pageYOffset + window.innerHeight/2;
        scrollDocument(distance, 'up');
    }

    _makeInvisiblePaginationBlock() {
        const paginationBlock = el('#paginationContent');
        if (!paginationBlock) {
            return;
        }
        if (!paginationBlock.classList.contains("display-none")) {
            paginationBlock.classList.add("display-none");
        }
    }

    _showLoadingMessage() {
        this.messenger.render({
            text: 'Загрузка...',
            duration: 9500
        });
    }


}
