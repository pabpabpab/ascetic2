import el from '../auxiliaryFunctions/el';
import getCookie from '../cookie/getCookie';
import Aware from "./../parentClasses/app/aware";

export default class FavoriteProductsIndicationOnPageLoad extends Aware {

    constructor() {
        super();

        this.iconSrc = {
            notInFavorites: '/images/favoriteIcon.svg',
            inFavorites: '/images/filledFavoriteIcon.svg',
        }

        this.displayFavoriteProducts();
    }


    displayFavoriteProducts() {
        const idsStr = getCookie('favoriteIds');
        if (!Boolean(idsStr)) {
            return;
        }

        const idsArr = idsStr.split(',');
        idsArr.forEach((productId) => {
            const imgSelector = this._getIconImgSelector(productId);
            if (el(imgSelector)) {
                el(imgSelector).src = this.iconSrc.inFavorites;

                const wrapperSelector = this._getIconWrapperSelector(productId);
                if (!el(wrapperSelector).classList.contains("set-opacity")) {
                    el(wrapperSelector).classList.add("set-opacity");
                }

                const textSelector = this._getIconTextSelector(productId);
                if (el(textSelector)) {
                    el(textSelector).innerText = 'ИЗ ИЗБРАННОГО';
                }
            }
        });
    }


    _getIconWrapperSelector(productId) {
        return `#favIcon-wrapper-${productId}`;
    }
    _getIconImgSelector(productId) {
        return `#favIcon-img-${productId}`;
    }
    _getIconTextSelector(productId) {
        return `#favIcon-text-${productId}`;
    }
}
