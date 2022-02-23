import el from '../auxiliaryFunctions/el';
import getMobileMenuHtml from '../html/menu/getMobileMenuHtml.js';
import getMobileMenuCollapseIconHtml from '../html/menu/getMobileMenuCollapseIconHtml';

export default class MobileMenu {
    constructor() {
        this.wrapSelector = '#mobileMenuWrapper';
        this.basicCss = 'mobile_menu__wrapper';
        this.showCss = 'show_block';
        this.hideCss = 'hide_block';
        this.menuIconSelector = '#mobileMenuIconContent';
        this.collapseIconSelector = '#mobileMenuCollapseIconContent';
        this.authMenuSelector = '.top_menu__li_auth';

        this.initiator = el('#mobileMenuIconWrapper');
        if (!this.initiator) {
            return;
        }
        this.initiator.addEventListener('click', () => {
            this._render();
        });
    }

    _render() {
        if (!el(this.wrapSelector)) {
            this._firstRender();
            this._setVisibilityToTrue();
            return;
        }

        if (el(this.wrapSelector).classList.contains(this.hideCss)) {
            this._setVisibilityToTrue();
        } else {
            this._setVisibilityToFalse();
        }
    }

    _firstRender() {
        let innerHtml = el('#bottomMenu-allCategories').innerHTML;
        innerHtml = innerHtml.replaceAll("bottom_menu", "mobile_menu");
        const html = getMobileMenuHtml(innerHtml);
        el('body').insertAdjacentHTML('beforeend', html);
        this._listenBodyTag();
    }
    _listenBodyTag() {
        el('body').addEventListener('click', (e) => {
            if (e.target.dataset.menuLinkSectionName) { // линки категорий содержат такой датасет
                this._setVisibilityToFalse();
            }
        });
    }
    _setVisibilityToTrue() {
        if (!el(this.wrapSelector)) {
            return;
        }
        document.body.style.overflow = 'hidden';
        el(this.wrapSelector).className = `${this.basicCss} ${this.showCss}`;
        this._switchMenuIcon();
        this._turnOnAuthMenu();
    }
    _setVisibilityToFalse() {
        // только если блок видимый влиять на свойство overflow
        if (!el(this.wrapSelector).classList.contains(this.hideCss)) {
            document.body.style.overflow = 'auto';
        }
        el(this.wrapSelector).className = `${this.basicCss} ${this.hideCss}`;
        this._switchMenuIcon();
        this._turnOffAuthMenu();
    }

    _switchMenuIcon() {
        if (!el(this.collapseIconSelector)) {
            const html = getMobileMenuCollapseIconHtml();
            el('#mobileMenuIconWrapper').insertAdjacentHTML('beforeend', html);
        }

        if (el(this.wrapSelector).classList.contains(this.showCss)) {
            this._turnOffMenuIcon();
            this._turnOnCollapseIcon();
        } else {
            this._turnOffCollapseIcon();
            this._turnOnMenuIcon();
        }
    }
    _turnOnMenuIcon() {
        el(this.menuIconSelector).classList.remove('display-none');
    }
    _turnOffMenuIcon() {
        el(this.menuIconSelector).classList.add('display-none');
    }
    _turnOnCollapseIcon() {
        el(this.collapseIconSelector).classList.remove('display-none');
    }
    _turnOffCollapseIcon() {
        el(this.collapseIconSelector).classList.add('display-none');
    }


    _turnOnAuthMenu() {
        el(this.authMenuSelector).classList.remove('hide_block_forwards');
        el(this.authMenuSelector).classList.add('show_block_forwards');
    }
    _turnOffAuthMenu() {
        el(this.authMenuSelector).classList.remove('show_block_forwards');
        el(this.authMenuSelector).classList.add('hide_block_forwards');
    }
}

