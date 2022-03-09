import el from '../../auxiliaryFunctions/el';
import Aware from "../../parentClasses/app/aware";

export default class SortMenuVisibilityManager extends Aware {

    constructor() {
        super();
    }

    checkSectionSettings() {
        const sectionName = this.state.sectionSettings.productSectionName;
        if (['viewedProducts', 'singleProduct'].includes(sectionName)) {
            this._turnOffVisibility();
        } else {
            this._turnOnVisibility();
        }
    }

    _turnOffVisibility() {
        const wrapper = el('.sorting_modes__wrapper');
        if (wrapper && !wrapper.classList.contains('display_none')) {
            wrapper.classList.add('display_none');
        }
        if (el('#relativeWrapperOfSortingValues')) {
            el('#relativeWrapperOfSortingValues').remove();
        }
    }
    _turnOnVisibility() {
        const wrapper = el('.sorting_modes__wrapper');
        if (wrapper && wrapper.classList.contains('display_none')) {
            wrapper.classList.remove('display_none');
        }
    }

}
