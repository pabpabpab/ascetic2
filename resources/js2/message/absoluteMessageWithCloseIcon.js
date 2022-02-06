import el from '../el';
import VisibleBlock from "../parentClasses/visibleBlock";
import getAbsoluteMessageWithCloseIconHtml from "../html/getAbsoluteMessageWithCloseIconHtml";


export default class AbsoluteMessageWithCloseIcon extends VisibleBlock {

    constructor(data) {
        super(data);

        this.text = data.text;
        this.id = `absoluteMessageWithCloseIcon${new Date().getTime()}`;

        this.wrapSelector = `#${this.id}`;
        this.basicCss = 'absolute_message__wrapper';
        this.showCss = 'show_block';
        this.hideCss = 'hide_block';

        this._render();
    }

    _getHtml() {
        const css = {
            basicCss: this.basicCss,
            showCss: this.showCss
        }
        return getAbsoluteMessageWithCloseIconHtml(css, this.id, this.text);
    }

    _additionalHideActions() {
        setTimeout(() => {
            el(this.wrapSelector).remove();
        }, 1000);
    }
}
