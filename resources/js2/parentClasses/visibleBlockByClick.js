import el from '../auxiliaryFunctions/el';
import VisibleBlock from "./visibleBlock";

export default class VisibleBlockByClick extends VisibleBlock {
    constructor(data) {
        super(data);
        if (!el(data.clickSourceSelector)) {
            return;
        }
        el(data.clickSourceSelector).addEventListener('click', (e) => {
            e.preventDefault();
            //e.stopPropagation();
            setTimeout(() => {
                this._render(e);
            }, 100);
        });
    }


    _render(e) {
        this._preRenderActions();
        if (!el(this.wrapSelector)) {
            this._firstRender();
            this._justSetVisibilityToTrue();
            return;
        }

        if (!el(this.wrapSelector).classList.contains(this.showCss)) {
            this._justSetVisibilityToTrue();
        } else {
            this._setVisibilityToFalse(e);
        }
    }
}
