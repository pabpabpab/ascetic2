import el from '../el';

export default class quickProductDestructor {

    constructor() {
        el('.quick_view_manager__collapse_icon').addEventListener('click', (e) => {
            this._removeQuickProduct();
        });
    }

    _removeQuickProduct() {
        if (el('#quickProduct')) {
           el('#quickProduct').remove();
        }
        document.body.style.overflow = 'auto';
    }
}
