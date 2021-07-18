import VisibleBlockByClick from "./parentClasses/visibleBlockByClick";
import getAuthBlockHtml from "./html/getAuthBlockHtml";
import Register from "./register";
import Login from "./login";


export default class AuthBlock extends VisibleBlockByClick {

    constructor(data) {
        super(data);

        this.wrapSelector = `#authBlock`;
        this.basicCss = 'auth_block__wrapper';
        this.showCss = 'show_block';
        this.hideCss = 'hide_block';
    }

    _getHtml() {
        const css = {
            basicCss: this.basicCss,
            showCss: this.showCss
        }
        return getAuthBlockHtml(css);
    }

    _additionalFirstRenderActions() {
        new Login({ clickSourceSelector: '#loginLink' });
        new Register({ clickSourceSelector: '#registerLink' });
    }

}
