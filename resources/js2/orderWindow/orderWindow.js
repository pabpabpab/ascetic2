import el from '../auxiliaryFunctions/el';
import Aware from "./../parentClasses/app/aware";
import getOrderWindowHtml from "../html/orderWindow/index-getOrderWindowHtml";
import allProductsMustBeCached from "../auxiliaryFunctions/allProductsMustBeCached";
import getProductObject from "../productObject/getProductObject";

export default class OrderWindow extends Aware {

    constructor() {
        super();
        this.wrapId = 'orderWindow';
        this.wrapSelector = '#orderWindow';
        this.collapseIconSelector = '.order_window__collapse_icon';
        this.basicCss = 'order_window__wrapper';
        this.showCss = 'show_block';
        this.hideCss = 'hide_block';

        this.css = '';
        this.contacts = {};

        el('body').addEventListener('click', (e) => {
            if (!e.target.dataset || !e.target.dataset.orderButton) {
                return;
            }
            const productId = Number(e.target.dataset.orderButton);
            e.preventDefault();
            e.stopPropagation();
            this._render(productId);
        });
    }

    _render(productId) {
        this._preRenderActions();
        this._getOneProduct(productId).then((product) => {
            const productObject = getProductObject(product);
            const html = getOrderWindowHtml(productObject, this.contacts);
            el('body').insertAdjacentHTML('beforeend', html);
            this._listenThisBlock();
        });
    }

    _getOneProduct(productId) {
        if (allProductsMustBeCached()) {
            return this.components.productCache.getEntireList()
                .then((data) => {
                    const list = [...data];
                    return list.filter(item => item.id === productId)[0];
                });
        } else {
            return this.components.productCache.getOneFromServer(productId)
                .then((product) => {
                    return product;
                });
        }
    }


    _listenThisBlock() {
        el(this.collapseIconSelector).addEventListener('click', (e) => {
            this._collapseWindow(e);
        });
        el(this.wrapSelector).addEventListener('click', (e) => {
            if (e.target.id === this.wrapId) {
                this._collapseWindow(e);
            }
        });
    }

    _preRenderActions() {
        const dataset = el('#siteFooter').dataset;
        this.contacts = {
            domain: dataset.siteDomain,
            address: dataset.siteAddress,
            phone: dataset.sitePhone,
            phoneTime: dataset.sitePhoneTime,
            whatsapp: dataset.siteWhatsapp,
            tg: dataset.siteTg,
            vkontakte: dataset.siteVkontakte,
            ok: dataset.siteOk,
            meta: dataset.siteMeta,
            email: dataset.siteEmail,
        }
    }

    _collapseWindow() {
        el(this.wrapSelector).className = `${this.basicCss} ${this.hideCss}`;
        setTimeout(() => {
            el(this.wrapSelector).remove();
        }, 700);
    }

}
