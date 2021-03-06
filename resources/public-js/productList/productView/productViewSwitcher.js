import Aware from "./../../parentClasses/app/aware";
import el from "../../auxiliaryFunctions/el";

export default class ProductViewSwitcher extends Aware {
    constructor() {
        super();
        this.itemSelector = '.product_item__wrapper';
        this.iconSrc = {
            bigView: '/images/viewingIconOfBigItems.svg',
            smallView: '/images/viewingIconOfSmallItems.svg',
        }
        el('.viewing_icon__wrapper').addEventListener('click', (e) => {
            this._switch();
        });
    }

    _switch() {
        const icon = el('#productViewIcon');
        if (icon.src.includes('BigItems')) {
            icon.src = this.iconSrc.smallView;
            icon.classList.toggle('viewing_icon__img_minimized');
            this.commit('setViewMode', 'bigView');
            this._switchToBigView();
        } else {
            icon.src = this.iconSrc.bigView;
            icon.classList.toggle('viewing_icon__img_minimized');
            this.commit('setViewMode', 'smallView');
            this._switchToSmallView();
        }
    }

    _switchToBigView() {
        let nodes = el('#productList').querySelectorAll(this.itemSelector);
        Object.values(nodes).forEach((node) => {
            node.classList.add('big_view');
        });
    }

    _switchToSmallView() {
        let nodes = el('#productList').querySelectorAll(this.itemSelector);
        Object.values(nodes).forEach((node) => {
            node.classList.remove('big_view');
        });
    }

}
