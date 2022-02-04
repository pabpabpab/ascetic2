import el from "../../el";
import Aware from "../../parentClasses/app/aware";

export default class TotalIndicatorOfFilterParameters extends Aware {

    constructor() {
        super();
        if (!el('.filter_icon__wrapper')) {
            return;
        }
        this._render();
    }

    _render() {
        const html = `<div class="filter_icon__total_indicator display-none"></div>`;
        el('.filter_icon__wrapper').insertAdjacentHTML('beforeend', html);
    }

    checkSearchSettings() {
        const totalCount = this.components.searchSettingsStore.getTotalCountOfSetFilterParameters();
        if (totalCount > 0) {
            this._setVisibilityToTrue();
            el('.filter_icon__total_indicator').innerText = totalCount;
        } else {
            this._setVisibilityToFalse();
            el('.filter_icon__total_indicator').innerText = '';
        }
    }

    _setVisibilityToTrue() {
        const indicator = el('.filter_icon__total_indicator');
        if (indicator.classList.contains('display-none')) {
            indicator.classList.remove('display-none');
        }
    }
    _setVisibilityToFalse() {
        const indicator = el('.filter_icon__total_indicator');
        if (!indicator.classList.contains('display-none')) {
            indicator.classList.add('display-none');
        }
    }
}
