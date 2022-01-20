import el from './../el';
import areAllProductsCached from "./../areAllProductsCached";
import getProductObject from "./../productObject/getProductObject";
import getSingleProductHtml from "./../html/singleProduct/index-getSingleProductHtml";
import singleProductKit from "./../productSingle/singleProductKit";

export default class SingleProductQuickViewer {

    constructor(data) {
        this.productCache = data.productCache;
        this.viewedProductsAppender = data.viewedProductsAppender;
        this.viewedProductsSummaryMaker = data.viewedProductsSummaryMaker;

        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.quickView) {
                e.preventDefault();
                const productId = Number(e.target.dataset.quickView);
                this._showOneProduct(productId);
                this.viewedProductsAppender.post(productId);
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
        if (areAllProductsCached()) {
            this._showOneFromCache(productId);
        } else {
            this._showOneFromServer(productId);
        }
    }


    _showOneFromServer(productId) {
        return this.productCache.getOneFromServer(productId)
            .then((product) => {
                this.viewedProductsSummaryMaker.remakeWith(product);
                const productObject = getProductObject(product);
                this._renderProduct(productObject);
            });
    }


    _showOneFromCache(productId) {
        return this.productCache.getEntireList()
            .then((data) => {
                const list = [...data];
                const product = list.filter(item => item.id === productId)[0];
                this.viewedProductsSummaryMaker.remakeWith(product);
                const productObject = getProductObject(product);
                this._renderProduct(productObject);
                this.productCache.getOneDescription(productId)
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
