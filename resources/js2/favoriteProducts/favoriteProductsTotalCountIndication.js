import el from '../el';
import getCookie from '../cookie/getCookie';
import Aware from "../parentClasses/app/aware";

export default class FavoriteProductsTotalCountIndication {

    constructor() {
        // рендер при загрузке страницы
        this._renderFavoriteTotal();

        el('body').addEventListener('click', (e) => {
            // и рендер при клике на favIcon товаров
            if (!e.target.id) {
                return;
            }
            if (!['favIcon', 'quickProductFavIcon'].includes(e.target.id.split('-')[0])) {
                return;
            }
            this._renderFavoriteTotal();
        });
    }

    _renderFavoriteTotal() {
        const idsStr = getCookie('favoriteIds');
        const totalCount = Boolean(idsStr) ? idsStr.split(',').length : 0;
        el('.topMenu-favIcon-total').innerText = totalCount;
    }
}
