import el from '../../el';
import Aware from "../../parentClasses/app/aware";

export default class SortMenuVisibilityManager extends Aware {

    constructor() {
        super();
    }

    checkSectionSettings() {
        const sectionName = this.state.sectionSettings.productSectionName;
        if (['viewedProducts'].includes(sectionName)) {
            this._turnOffVisibility();
        } else {
            this._turnOnVisibility();
        }
    }

    _turnOffVisibility() {
        const wrapper = el('.sorting_modes__wrapper');
        if (wrapper && !wrapper.classList.contains('display-none')) {
            wrapper.classList.add('display-none');
        }
    }
    _turnOnVisibility() {
        const wrapper = el('.sorting_modes__wrapper');
        if (wrapper && wrapper.classList.contains('display-none')) {
            wrapper.classList.remove('display-none');
        }
    }

}
