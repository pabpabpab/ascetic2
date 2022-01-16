import postJson from "./../http/postJson";

export default class ViewedProductsSynchronizer {

    constructor() {
        this.postUrl = '/public-js/viewed-products/post';
        this.disabledSubmit = false;
    }

    sync(productId) {
        if (! this._getSubmitPermission()) {
            return;
        }

        postJson(this.postUrl, {productId: productId}).then((data) => {
            if (data.success === true) {
                //
            }
        });
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
