import el from './el';
import getDropMenuHtml from './html/getDropMenuHtml.js';

export default class TopDropMenuFiller {
    constructor() {
        el('#topMenu-dropMenuContainer').addEventListener('mouseover', (e) => {
            this._fillMenu();
        });
    }

    _fillMenu() {
        if (el('#topMenu-dropMenuWrapper')) {
            return;
        }
        const innerHtml = el('#bottomMenu-allCategories').innerHTML;
        const dropMenuHtml = getDropMenuHtml(innerHtml);

        const container = el('#topMenu-dropMenuContainer');
        container.insertAdjacentHTML('beforeend', dropMenuHtml);

        let nodes = container.querySelectorAll('.bottom_menu__link');
        for (let node of nodes) {
            node.className = 'top_menu__drop_menu__link';
        }
    }
}
