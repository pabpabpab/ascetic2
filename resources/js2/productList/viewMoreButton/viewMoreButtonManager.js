import el from '../../auxiliaryFunctions/el';
import Aware from "../../parentClasses/app/aware";

export default class ViewMoreButtonManager extends Aware {

    constructor() {
        super();
        this.productItemSelector = '[data-product-item]';
    }

    checkSectionSettings() {
        const sectionName = this.state.sectionSettings.productSectionName;
        if (['singleProduct'].includes(sectionName)) {
            this._turnOffVisibility();
        }
    }

    checkPaginatorSettings() {
        const sectionName = this.state.sectionSettings.productSectionName;
        if (['singleProduct'].includes(sectionName)) {
            this._turnOffVisibility();
            return;
        }
        const numberOfDisplayedProducts = document.querySelectorAll(this.productItemSelector).length;
        if (numberOfDisplayedProducts === 0) {
            this._turnOffVisibility();
            return;
        }
        const settings = this.state.paginatorSettings;
        if (settings.pageNumber > 1) {
            this._turnOffVisibility();
            return;
        }
        if (numberOfDisplayedProducts >= settings.sectionProductsCount) {
            this._turnOffVisibility();
        } else {
            this._turnOnVisibility();
        }
    }

    _turnOnVisibility() {
        const viewMoreButton = el('#viewMoreButton');
        if (viewMoreButton && viewMoreButton.classList.contains("display-none")) {
            viewMoreButton.classList.remove("display-none");
        }
    }
    _turnOffVisibility() {
        const viewMoreButton = el('#viewMoreButton');
        if (viewMoreButton && !viewMoreButton.classList.contains("display-none")) {
            viewMoreButton.classList.add("display-none");
        }
    }
}
