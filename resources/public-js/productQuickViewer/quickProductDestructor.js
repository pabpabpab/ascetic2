import el from '../auxiliaryFunctions/el';

export default class quickProductDestructor {

    constructor() {
        if (!el('.quick_view_manager__collapse_icon')) {
            return;
        }
        el('.quick_view_manager__collapse_icon').addEventListener('click', () => {
            this._removeQuickProduct();
        });
        el('.single_product__top_characteristics').addEventListener('click', (e) => {
            // так как линков может быть больше одного
            if (e.target.classList.contains('single_product__category_item__link')) {
                e.preventDefault();
                this._removeQuickProduct();
            }
        });
    }

    _removeQuickProduct() {
        if (el('#quickProduct')) {
           el('#quickProduct').remove();
        }
        document.body.style.overflow = 'auto';
    }
}
