import el from '../auxiliaryFunctions/el';

export default class quickProductDestructor {

    constructor() {
        if (!el('.quick_view_manager__collapse_icon')) {
            return;
        }
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
