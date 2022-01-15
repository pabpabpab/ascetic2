import setCookie from '../cookie/setCookie';
import getCookie from '../cookie/getCookie';
import postJson from "../http/postJson";

export default class ViewedProductsSynchronizer {

    constructor() {
        this.cookieLifetime = 864000; // 100 дней
        this.postUrl = '/public-js/viewed-products/post';
        this.disabledSubmit = false;
    }

    sync(productId) {
        //console.log(productId);
        this._addProductIdToCookie(productId);

        if (! this._getSubmitPermission()) {
            return;
        }

        postJson(this.postUrl, {productId: productId}).then((data) => {
            if (data.success === true) {
                // console.log(data.sessionViewedProductIds);
                this._addBackIdsToCookieIds(data.sessionViewedProductIds);
            }
        });
    }

    _addProductIdToCookie(productId) {
        const idsStr = getCookie('viewedIds');
        const idsArr = Boolean(idsStr) ? idsStr.split(',') : [];
        const index = idsArr.indexOf(String(productId));

        let totalIdsArr;
        if (index === -1) {
            totalIdsArr = [ ...[String(productId)], ...idsArr ];
        } else {
            idsArr.splice(index, 1);
            totalIdsArr = [ ...[String(productId)], ...idsArr ];
        }

        const viewedIds = totalIdsArr.join(',');
        setCookie('viewedIds', viewedIds, {'max-age': this.cookieLifetime});
    }

    _addBackIdsToCookieIds(backIdsStr) {
        const backIdsArr = Boolean(backIdsStr) ? backIdsStr.split(',') : [];

        const frontIdsStr = getCookie('viewedIds');
        const frontIdsArr = Boolean(frontIdsStr) ? frontIdsStr.split(',') : [];


        const totalIdsArr = [ ...frontIdsArr, ...backIdsArr ];

        // вернет только первые вхождения
        const uniqueIdsArr = totalIdsArr.filter((value, index, arr) => arr.indexOf(value) === index);

        //console.log(uniqueIdsArr);

        const viewedIdsStr = uniqueIdsArr.join(',');
        setCookie('viewedIds', viewedIdsStr, {'max-age': this.cookieLifetime});
    }

    _getSubmitPermission() {
        // защита от частых отправок на 3 сек
        if (this.disabledSubmit) {
            return false;
        }
        this.disabledSubmit = true;
        setTimeout(() => {
            this.disabledSubmit = false;
        }, 3000);

        return true;
    }
}
