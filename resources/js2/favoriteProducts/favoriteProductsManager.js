import el from '../el';
import setCookie from '../cookie/setCookie';
import getCookie from '../cookie/getCookie';
import postJson from "../http/postJson";
// import AbsoluteFlashMessage from "./absoluteFlashMessage";

export default class FavoriteProductsManager {

    constructor() {
        this.cookieLifetime = 864000; // 10 дней
        this.postUrl = '/public-js/favorite-products/post';
        this.disabledSubmit = false;

        this.iconSrc = {
            notInFavorites: '/images/favoriteIcon.svg',
            inFavorites: '/images/filledFavoriteIcon.svg',
        }

        el('body').addEventListener('click', (e) => {
            // id="favIcon-wrapper-$id" / id="favIcon-img-$id"
            if (!e.target.id) {
                return;
            }
            if (e.target.id.split('-')[0] !== 'favIcon') {
                return;
            }
            const productId = parseInt(e.target.id.split('-')[2]);
            if (productId > 0) {
                this._switcher(productId);
            }
        });
    }

    _switcher(productId) {
        const idsStr = getCookie('favoriteIds');
        const idsArr = Boolean(idsStr) ? idsStr.split(',') : [];
        const index = idsArr.indexOf(String(productId));

        if (index === -1) {
            idsArr.push(String(productId));
            this._turnOnIcon(productId);
        } else {
            idsArr.splice(index, 1);
            this._turnOffIcon(productId);
        }

        const favoriteIds = idsArr.join(',');
        setCookie('favoriteIds', favoriteIds, {'max-age': this.cookieLifetime});

        this._submit({productIds: favoriteIds});
    }

    _turnOnIcon(productId) {
        const imgSelector = this._getIconImgSelector(productId);
        const wrapperSelector = this._getIconWrapperSelector(productId);
        el(imgSelector).src = this.iconSrc.inFavorites;
        el(wrapperSelector).classList.toggle("set-opacity");
    }

    _turnOffIcon(productId) {
        const imgSelector = this._getIconImgSelector(productId);
        const wrapperSelector = this._getIconWrapperSelector(productId);
        el(imgSelector).src = this.iconSrc.notInFavorites;
        el(wrapperSelector).classList.toggle("set-opacity");
    }


    _getIconWrapperSelector(productId) {
        return `#favIcon-wrapper-${productId}`;
    }
    _getIconImgSelector(productId) {
        return `#favIcon-img-${productId}`;
    }

    _submit(dataObject) {
        if (! this._getSubmitPermission()) {
            return;
        }

        postJson(this.postUrl, dataObject).then((data) => {
            if (data.success === true) {
                setCookie('favoriteIds', data.finalIds, {'max-age': this.cookieLifetime});
            }
        });
    }

    _getSubmitPermission() {
        // защита от частых отправок на 5 сек
        if (this.disabledSubmit) {
            return false;
        }
        this.disabledSubmit = true;
        setTimeout(() => {
            this.disabledSubmit = false;
        }, 5000);

        return true;
    }

}
