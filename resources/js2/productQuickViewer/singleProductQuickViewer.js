import el from './../el';
import allProductsMustBeCached from "../allProductsMustBeCached";
import getProductObject from "./../productObject/getProductObject";
import getSingleProductHtml from "./../html/singleProduct/index-getSingleProductHtml";
import singleProductKit from "./../productSingle/singleProductKit";
import AppAncestor from "../appAncestor";

export default class SingleProductQuickViewer extends AppAncestor {

    constructor() {
        super();
        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.quickView) {
                e.preventDefault();
                const productId = Number(e.target.dataset.quickView);
                this._showOneProduct(productId);
                this.app.viewedProductsAppender.post(productId);
            }
        });
    }

    _showOneProduct(productId) {
        // на страницах где нет списка товаров
        if (!el('#productList')) {
            this._showOneFromServer(productId);
            return;
        }

        // на страницах где есть список товаров
        if (allProductsMustBeCached()) {
            this._showOneFromCache(productId);
        } else {
            this._showOneFromServer(productId);
        }
    }

    _showOneFromServer(productId) {
        return this.app.productCache.getOneFromServer(productId)
            .then((product) => {
                this.app.viewedProductsSummaryMaker.remakeWith(product);
                const productObject = getProductObject(product);
                this._renderProduct(productObject);
            });
    }

    _showOneFromCache(productId) {
        return this.app.productCache.getEntireList()
            .then((data) => {
                const list = [...data];
                const product = list.filter(item => item.id === productId)[0];
                this.app.viewedProductsSummaryMaker.remakeWith(product);
                const productObject = getProductObject(product);
                this._renderProduct(productObject);
                this.app.productCache.getOneDescription(productId)
                    .then((data) => {
                        el('#productDescriptionContainer').innerText = data.description;
                    });
            });
    }

    _renderProduct(product) {
        const productHtml = getSingleProductHtml(product);
        if (el('#quickProduct')) {
            el('#quickProduct').remove();
        }

        document.body.style.overflow = 'hidden';
        el('body').insertAdjacentHTML('beforeend', productHtml);

        singleProductKit();
    }

}
