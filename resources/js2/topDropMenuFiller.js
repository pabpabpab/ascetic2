import el from './el';

export default class TopDropMenuFiller {
    constructor() {
        el('#topMenu-allCategoriesIcon').addEventListener('mouseover', (e) => {
            this._fillMenu();
        });
    }

    _fillMenu() {
        if (el('#topMenu-dropMenuContent')) {
            return;
        }
        const innerHTML = el('#bottomMenu-allCategories').innerHTML;
        const wholeHTML = `<ul id="topMenu-dropMenuContent" class="top_menu__drop_menu__ul">
                              ${innerHTML}
                           </ul>`;

        const dropMenuWrapper = el('#topMenu-dropMenuWrapper');
        dropMenuWrapper.insertAdjacentHTML('afterbegin', wholeHTML);

        let nodes = dropMenuWrapper.querySelectorAll('.bottom_menu__link');
        for (let node of nodes) {
            node.className = 'top_menu__link';
        }
    }
}
