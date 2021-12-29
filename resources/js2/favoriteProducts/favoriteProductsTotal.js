import el from '../el';
import getCookie from '../cookie/getCookie';

export default class FavoriteProductsTotal {

    constructor() {
        // рендер при загрузке страницы
        this._renderFavoriteTotal();

        el('body').addEventListener('click', (e) => {
            // и рендер при клике на favIcon товаров
            if (!e.target.id) {
                return;
            }
            if (e.target.id.split('-')[0] !== 'favIcon') {
                return;
            }
            this._renderFavoriteTotal();
        });
    }

    _renderFavoriteTotal() {
        const idsStr = getCookie('favoriteIds');
        const total = Boolean(idsStr) ? idsStr.split('-').length : 0;
        el('.topMenu-favIcon-total').innerText = total;
    }
}
