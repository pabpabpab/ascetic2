import el from '../el';
import getCookie from '../cookie/getCookie';

export default class FavoriteProductsIndicationByPageLoad {

    constructor() {
        this.iconSrc = {
            notInFavorites: '/images/favoriteIcon.svg',
            inFavorites: '/images/filledFavoriteIcon.svg',
        }

        this._displayFavoriteProducts();
    }


    _displayFavoriteProducts() {
        const idsStr = getCookie('favoriteIds');
        if (!Boolean(idsStr)) {
            return;
        }
        const idsArr = idsStr.split('-');
        idsArr.forEach((productId) => {
            const iconWrapperSelector = this._getIconWrapperSelector(productId);
            const iconImgSelector = this._getIconImgSelector(productId);
            if (el(iconImgSelector)) {
                el(iconImgSelector).src = this.iconSrc.inFavorites;
                el(iconWrapperSelector).classList.toggle("set-opacity");
            }
        });
    }


    _getIconWrapperSelector(productId) {
        return `#favIcon-wrapper-${productId}`;
    }
    _getIconImgSelector(productId) {
        return `#favIcon-img-${productId}`;
    }

}
