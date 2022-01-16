import el from './../el';
import getJson from "./../http/getJson";
import getViewedProductsItemHtml from "../html/viewedProductsSummary/getViewedProductsItemHtml";
import getViewedProductsHeaderHtml from "../html/viewedProductsSummary/getViewedProductsHeaderHtml";

export default class ViewedProductsSummaryMaker {
    constructor() {
        this.wrapperOfSummary = el('#viewedProductsSummaryWrapper');
        if (!this.wrapperOfSummary) {
            return;
        }
        this.idOfContent = 'viewedProductsSummaryContent';

        this.viewedProductsSummaryWasCreated = false;
        this.summaryListUrl = '/public-js/viewed-product-summary-list';
        this.summaryList = [];

        el('body').addEventListener('mouseover', (e) => {
            this._firstCreation();
        });
    }


    _firstCreation() {
        if (this.viewedProductsSummaryWasCreated) {
            return;
        }
        this.viewedProductsSummaryWasCreated = true;

        this._loadSummaryList()
            .then((data) => {
                const products = [...data];
                //console.log(products);
                this._renderHeader();
                this._renderBody(products);
            });
    }

    remakeWith(product) {
        if (!this.wrapperOfSummary) {
            return;
        }
        const index = this.summaryList.findIndex(item => item.id === product.id);
        if (index > -1) {
            this.summaryList.splice(index, 1);
        }
        this.summaryList = [ ...[product], ...this.summaryList ];
        this._renderBody(this.summaryList);
    }

    _renderHeader() {
        const html = getViewedProductsHeaderHtml();
        this.wrapperOfSummary.insertAdjacentHTML('afterbegin', html);
    }

    _renderBody(products) {
        if (el(`#${this.idOfContent}`)) {
            el(`#${this.idOfContent}`).remove();
        }
        //const html = this._getTotalHtml(products);

        const itemsHtmlArr = products.map((product) => {
            const productObject = this._prepareProductObject(product);
            return getViewedProductsItemHtml(productObject);
        });
        const itemsHtml = itemsHtmlArr.join('');
        const totalHtml = `<div id="${this.idOfContent}">${itemsHtml}</div>`;
        this.wrapperOfSummary.insertAdjacentHTML('beforeend', totalHtml);
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
