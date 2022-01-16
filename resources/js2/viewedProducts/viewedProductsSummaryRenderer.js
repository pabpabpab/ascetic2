import el from './../el';
import getJson from "./../http/getJson";
import getViewedProductsItemHtml from "../html/viewedProducts/getViewedProductsItemHtml";

export default class ViewedProductsSummaryRenderer {
    constructor() {
        this.htmlWrapper = el('#viewedProductsSummaryWrapper');
        if (!this.htmlWrapper) {
            return;
        }

        this.viewedProductsSummaryWasRendered = false;
        this.summaryListUrl = '/public-js/viewed-product-summary-list';
        this.summaryList = [];

        el('body').addEventListener('mouseover', (e) => {
            this._firstRender();
        });
    }


    _firstRender() {
        if (this.viewedProductsSummaryWasRendered) {
            return;
        }
        this.viewedProductsSummaryWasRendered = true;

        this._loadSummaryList()
            .then((data) => {
                const products = [...data];
                //console.log(products);
                const html = this._getTotalHtml(products);
                this.htmlWrapper.insertAdjacentHTML('beforeend', html);
            });
    }


    _getTotalHtml(products) {
        const itemsHtmlArr = products.map((product) => {
            const productObject = this._prepareProductObject(product);
            return getViewedProductsItemHtml(productObject);
        });
        const itemsHtml = itemsHtmlArr.join('');
        return `<div id="viewedProductsSummaryContent" class="display-flex">${itemsHtml}</div>`;
    }


    _loadSummaryList() {
        return getJson(this.summaryListUrl)
            .then((data) => {
                //console.log(data);
                this.summaryList = [ ...data.products ];
                return [ ...data.products ];
            })
            .catch(() => {
                //
            });
    }


    _prepareProductObject(product) {
        const obj = {};
        obj.id = product.id;
        obj.name = product.name;
        obj.slug = product.slug;

        const params = JSON.parse(product.parameters);
        obj.price = params.price;

        obj.photoName = JSON.parse(product.photo_set)[0];

        return obj;
    }
}
