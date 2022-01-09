import VisibleBlockByClick from "../parentClasses/visibleBlockByClick";
import getAuthAbsoluteMenuHtml from "../html/auth/getAuthAbsoluteMenuHtml";
import Register from "./register";
import Login from "./login";


export default class AuthAbsoluteMenu extends VisibleBlockByClick {

    constructor(data) {
        super(data);

        this.wrapSelector = `#authAbsoluteMenu`;
        this.basicCss = 'auth_absolute_menu__wrapper';
        this.showCss = 'show_block';
        this.hideCss = 'hide_block';
    }

    _getHtml() {
        const css = {
            basicCss: this.basicCss,
            showCss: this.showCss
        }
        return getAuthAbsoluteMenuHtml(css);
    }

    _additionalFirstRenderActions() {
        new Login({ clickSourceSelector: '#loginLink' });
        new Register({ clickSourceSelector: '#registerLink' });
    }

}
