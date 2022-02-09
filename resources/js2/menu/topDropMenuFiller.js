import el from '../auxiliaryFunctions/el';
import getDropMenuHtml from '../html/getDropMenuHtml.js';

export default class TopDropMenuFiller {
    constructor() {
        this.initiatorContainer = el('#topMenu-dropMenuInitiatorContainer');
        this.initiatorContainer.addEventListener('mouseover', (e) => {
            this._fillMenu();
        });
    }

    _fillMenu() {
        if (el('#topMenu-dropMenuWrapper')) {
            return;
        }
        const innerHtml = el('#bottomMenu-allCategories').innerHTML;
        const dropMenuHtml = getDropMenuHtml(innerHtml);

        this.initiatorContainer.insertAdjacentHTML('beforeend', dropMenuHtml);

        let nodes = this.initiatorContainer.querySelectorAll('.bottom_menu__link');
        for (let node of nodes) {
            node.className = 'top_menu__drop_menu__link';
        }
    }
}
