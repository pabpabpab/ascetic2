import el from '../auxiliaryFunctions/el';

export default class VisibleBlock {

    constructor(data) {
        this.wrapSelector = '';
        this.basicCss = '';
        this.showCss = '';
        this.hideCss = '';

        // this._render(); // не снимать комментарий
    }

    _render() {
        this._preRenderActions();
        if (!el(this.wrapSelector)) {
            this._firstRender();
            this._justSetVisibilityToTrue();
            return;
        }
        this._justSetVisibilityToTrue();
    }

    _preRenderActions() {}

    _firstRender() {
        const html = this._getHtml();
        el('body').insertAdjacentHTML('beforeend', html);
        this._listenBodyTag();
        this._listenThisBlock();
        this._additionalFirstRenderActions();
    }

    _getHtml() {}
    _additionalFirstRenderActions() {}

    _listenBodyTag() {
        el('body').addEventListener('click', (e) => {
            // скрыть блок при клике мимо
            this._setVisibilityToFalse(e);
        });
    }

    _listenThisBlock() {}

    _justSetVisibilityToTrue() {
        if (!el(this.wrapSelector)) {
            return;
        }
        el(this.wrapSelector).className = `${this.basicCss} ${this.showCss}`;
    }

    _setVisibilityToFalse(e) {
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
