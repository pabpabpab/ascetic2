import el from '../auxiliaryFunctions/el';
import allProductsMustBeCached from "../auxiliaryFunctions/allProductsMustBeCached";
import getProductObject from "./../productObject/getProductObject";
import getSingleProductHtml from "./../html/singleProduct/index-getSingleProductHtml";
import singleProductKit from "./../productSingle/singleProductKit";
import Aware from "../parentClasses/app/aware";

export default class SingleProductQuickViewer extends Aware {

    constructor() {
        super();
        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.quickView) {
                e.preventDefault();
                const productId = Number(e.target.dataset.quickView);
                this._showOneProduct(productId);
                this.components.viewedProductsAppender.post(productId);
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
        return this.components.productCache.getOneFromServer(productId)
            .then((product) => {
                this.components.viewedProductsSummaryMaker.remakeWith(product);
                const productObject = getProductObject(product);
                this._renderProduct(productObject);
            });
    }

    _showOneFromCache(productId) {
        return this.components.productCache.getEntireList()
            .then((data) => {
                const list = [...data];
                const product = list.filter(item => item.id === productId)[0];
                this.components.viewedProductsSummaryMaker.remakeWith(product);
                const productObject = getProductObject(product);
                this._renderProduct(productObject);
                this.components.productCache.getOneDescription(productId)
                    .then((data) => {
                        el('#productDescriptionContainer').innerText = data.description;
                    });
            });
    }

    _renderProduct(product) {
        const singleProductHtml = getSingleProductHtml(product);
        const quickProductHtml = `<div id="quickProduct" class="quick_view_manager__screen">
                                      <div class="quick_view_manager__content_wrapper">
                                          <div class="quick_view_manager__content">
                                              ${singleProductHtml}
                                          </div>
                                          <div class='quick_view_manager__collapse_icon'>&#215;</div>
                                      </div>
                                  </div>`;

        if (el('#quickProduct')) {
            el('#quickProduct').remove();
        }

        document.body.style.overflow = 'hidden';
        el('body').insertAdjacentHTML('beforeend', quickProductHtml);

        singleProductKit();
    }

}
