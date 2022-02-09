import Aware from "./../../parentClasses/app/aware";
import el from "../../auxiliaryFunctions/el";

export default class ProductViewSwitcher extends Aware {
    constructor() {
        super();
        this.itemSelector = '.product_item';
        this.photoSelector = '.photo__size3';
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
            this.commit('setViewMode', 'bigView');
            this._switchToBigView();
        } else {
            icon.src = this.iconSrc.bigView;
            this.commit('setViewMode', 'smallView');
            this._switchToSmallView();
        }
    }

    _switchToBigView() {
        let nodes = el('#productList').querySelectorAll(this.itemSelector);
        for (let node of nodes) {
            node.classList.add('big_view');
        }
        nodes = el('#productList').querySelectorAll(this.photoSelector);
        for (let node of nodes) {
            node.classList.add('big_view');
        }
    }

    _switchToSmallView() {
        let nodes = el('#productList').querySelectorAll(this.itemSelector);
        for (let node of nodes) {
            node.classList.remove('big_view');
        }
        nodes = el('#productList').querySelectorAll(this.photoSelector);
        for (let node of nodes) {
            node.classList.remove('big_view');
        }
    }

}
