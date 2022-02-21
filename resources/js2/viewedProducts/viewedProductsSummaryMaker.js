import el from '../auxiliaryFunctions/el';
import getJson from "./../http/getJson";
import getViewedProductsItemHtml from "./../html/viewedProductsSummary/getViewedProductsItemHtml";
import getViewedProductsHeaderHtml from "./../html/viewedProductsSummary/getViewedProductsHeaderHtml";
import getProductObject from "./../productObject/getProductObject";
import Aware from "../parentClasses/app/aware";


export default class ViewedProductsSummaryMaker extends Aware {
    constructor() {
        super();
        this.wrapperOfSummary = el('#viewedProductsSummaryWrapper');
        if (!this.wrapperOfSummary) {
            return;
        }
        this.idOfContent = 'viewedProductsSummaryContent';

        this.viewedProductsSummaryWasCreated = false;
        this.summaryListUrl = '/public-js/viewed-product-summary-list';
        this.viewedCountUrl = '/public-js/viewed-product-total-count';
        this.summaryList = [];
        //this.viewedCount = 0;

        this.mobileVersion = window.innerWidth <= 900; //px

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
                if (products.length > 0) {
                    this._renderHeader();
                    this._renderTotalCount();
                    this._renderBody(products);
                }
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
        this._renderHeader();
        this._renderTotalCount();
        this._renderBody(this.summaryList);
    }

    _renderHeader() {
        if (el('#viewedProductsSummaryHeader')) {
            return;
        }
        const html = getViewedProductsHeaderHtml(this.mobileVersion);
        this.wrapperOfSummary.insertAdjacentHTML('afterbegin', html);
    }

    _renderTotalCount() {
        this._loadViewedCount()
            .then((value) => {
                el('#viewedTotalCount').innerText = value;
            });
    }

    _renderBody(products) {
        if (this.mobileVersion) {
            return;
        }

        if (el(`#${this.idOfContent}`)) {
            el(`#${this.idOfContent}`).remove();
        }

        const itemsHtmlArr = products.map((product) => {
            const productObject = getProductObject(product);
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
            });
    }

    _loadViewedCount() {
        return getJson(this.viewedCountUrl)
            .then((data) => {
                //this.viewedCount = data.value;
                return data.value;
            });
    }

}
