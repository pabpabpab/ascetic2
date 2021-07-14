import el from './../el';

export default class VisibleBlock {

    constructor(data) {
        this.wrapSelector = '';
        this.basicCss = '';
        this.showCss = '';
        this.hideCss = '';
    }

    _render() {
        this._preRenderActions();
        if (!el(this.wrapSelector)) {
            this._firstRender();
            return;
        }
        this._show();
    }

    _preRenderActions() {}

    _firstRender() {
        const html = this._getHtml();
        el('body').insertAdjacentHTML('beforeend', html);
        this._listenBody();
        this._listenThisBlock();
        this._additionalFirstRenderActions();
    }

    _getHtml() {}
    _additionalFirstRenderActions() {}

    _listenBody() {
        el('body').addEventListener('click', (e) => {
            // скрыть блок при клике мимо
            this._hide(e);
        });
    }

    _listenThisBlock() {}

    _show(e) {
        if (!el(this.wrapSelector)) {
            return;
        }
        el(this.wrapSelector).className = `${this.basicCss} ${this.showCss}`;
    }

    _hide(e) {
        if (!el(this.wrapSelector)) {
            return;
        }
        if (e.target.parentNode === el(this.wrapSelector)) {
            return;
        }
        if (e.target === el(this.wrapSelector)) {
            return;
        }
        el(this.wrapSelector).className = `${this.basicCss} ${this.hideCss}`;

        this._additionalHideActions();
    }

    _additionalHideActions() {}

}
