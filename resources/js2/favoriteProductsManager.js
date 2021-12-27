import el from './el';
import setCookie from './cookie/setCookie';
import getCookie from './cookie/getCookie';

export default class FavoriteProductsManager {

    constructor() {
        this.wrapperSelector = '';
        this.imgSelector = '';
        this.notInFavoritesSrc = '/images/favoriteIcon.svg';
        this.inFavoritesSrc = '/images/filledFavoriteIcon.svg';

        this._displayFavoriteProducts();

        el('body').addEventListener('click', (e) => {
            const productId = parseInt(e.target.parentNode.dataset.favIconWrapper ?? e.target.dataset.favIconWrapper);
            if (productId > 0) {
                this.wrapperSelector = this._getIconWrapperSelector(productId);
                this.imgSelector = this._getIconImgSelector(productId);
                this._switcher(productId);
            }
        });
    }


    _getIconWrapperSelector(productId) {
        return `[data-fav-icon-wrapper="${productId}"]`;
    }
    _getIconImgSelector(productId) {
        return `#favIconImg${productId}`;
    }

    _displayFavoriteProducts() {
        const idsStr = getCookie('favoriteIds');
        if (!Boolean(idsStr)) {
            return;
        }
        const idsArr = idsStr.split('-');
        const that = this;
        idsArr.forEach(function(productId) {
            const iconWrapperSelector = that._getIconWrapperSelector(productId);
            const iconImgSelector = that._getIconImgSelector(productId);
            if (el(iconImgSelector)) {
                el(iconImgSelector).src = that.inFavoritesSrc;
                el(iconWrapperSelector).classList.toggle("set-opacity");
            }
        });
    }

    _switcher(productId) {
        const idsStr = getCookie('favoriteIds');
        const idsArr = Boolean(idsStr) ? idsStr.split('-') : [];
        const index = idsArr.indexOf(String(productId));

        if (index === -1) {
            idsArr.push(String(productId));
            this._turnOnIcon(productId);
        } else {
            idsArr.splice(index, 1);
            this._turnOffIcon(productId);
        }

        //console.log(idsArr);

        const favoriteIds = idsArr.join('-');
        setCookie('favoriteIds', favoriteIds, {'max-age': 2592000}); // 30 дней
    }

    _turnOnIcon(productId) {
        el(this.imgSelector).src = this.inFavoritesSrc;
        el(this.wrapperSelector).classList.toggle("set-opacity");
    }

    _turnOffIcon(productId) {
        el(this.imgSelector).src = this.notInFavoritesSrc;
        el(this.wrapperSelector).classList.toggle("set-opacity");
    }

}
