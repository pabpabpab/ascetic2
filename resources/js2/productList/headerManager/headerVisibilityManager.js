import el from '../../auxiliaryFunctions/el';
import Aware from "../../parentClasses/app/aware";

export default class headerVisibilityManager extends Aware {

    constructor() {
        super();
    }

    checkSectionSettings() {
        const sectionName = this.state.sectionSettings.productSectionName;
        if (['singleProduct'].includes(sectionName)) {
            this._turnOffVisibility();
        } else {
            this._turnOnVisibility();
        }
    }

    _turnOffVisibility() {
        const wrapper = el('.h1_viewing_sorting_filtering_container');
        if (wrapper && !wrapper.classList.contains('display-none')) {
            wrapper.classList.add('display-none');
        }
    }
    _turnOnVisibility() {
        const wrapper = el('.h1_viewing_sorting_filtering_container');
        if (wrapper && wrapper.classList.contains('display-none')) {
            wrapper.classList.remove('display-none');
        }
    }

}
