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
            e.stopPropagation();
            this._render();
        });
    }
}
