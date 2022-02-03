import postJson from "./../http/postJson";
import AppAncestor from "../appAncestor";

export default class ViewedProductsAppender extends AppAncestor {

    constructor() {
        super();
        this.postUrl = '/public-js/viewed-products/post';
        this.disabledSubmit = false;
    }

    post(productId) {
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
