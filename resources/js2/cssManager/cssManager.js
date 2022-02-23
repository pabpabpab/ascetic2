import el from '../auxiliaryFunctions/el';
import Aware from "../parentClasses/app/aware";

export default class headerVisibilityManager extends Aware {

    constructor() {
        super();
    }

    checkSectionSettings() {
        const sectionName = this.state.sectionSettings.productSectionName;
        if (['singleProduct'].includes(sectionName)) {
            el('.content_wrapper').classList.add('content_wrapper_of_single_product');
        } else {
            el('.content_wrapper').classList.remove('content_wrapper_of_single_product');
        }
    }
}
