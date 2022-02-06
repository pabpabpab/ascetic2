import el from '../el';
import AbsoluteForm from "../parentClasses/absoluteForm";
import getLoginFormHtml from '../html/auth/getLoginFormHtml';
import getFailedLoginHtml from '../html/auth/getFailedLoginHtml';
import getAuthenticatedMenuHtml from '../html/auth/getAuthenticatedMenuHtml';
import loginValidation from "../validation/loginValidation";
import AbsoluteFlashMessage from "../message/absoluteFlashMessage";
import ForgotPassword from "./forgotPassword";
import PasswordTypeChanger from "./passwordTypeChanger";
import getCookie from "../cookie/getCookie";
import setCookie from '../cookie/setCookie';
import FavoriteProductsIndicationOnPageLoad from "../favoriteProducts/favoriteProductsIndicationOnPageLoad";

export default class Login extends AbsoluteForm {

    constructor(data, postUrl= '/login/do', successUrl = '/my') {
        super(data);

        this.cookieLifetime = 8640000; // 100 дней

        this.postUrl = postUrl;
        this.successUrl = successUrl;
        this.wrapSelector = '#loginForm';
        this.submitSelector = '#loginSubmit';

        this.validationFunction = loginValidation;
    }


    _preRenderActions() {
        if (!el('#authAbsoluteMenu')) return;
        el('#authAbsoluteMenu').className = `auth_absolute_menu__wrapper hide_block`;
    }

    _additionalFirstRenderActions() {
        new ForgotPassword({ clickSourceSelector: '#forgotPasswordLink' });

        new PasswordTypeChanger({
            closedEyeSelector: "#closedEyeImg",
            openedEyeSelector: "#openedEyeImg",
            passwordInputSelector: "#loginPassword",
        });
    }


    _getHtml() {
        return getLoginFormHtml();
    }


    _ultimateSuccess(data) {
        el('#authMenuContent').remove();
        const html = getAuthenticatedMenuHtml(data.userName, data.isAdmin);
        el('#authMenu').insertAdjacentHTML('afterbegin', html);
        el(this.wrapSelector).className = `${this.basicCss} ${this.hideCss}`;
        setTimeout(() => {
            el(this.wrapSelector).remove();
        }, 3000); // чтобы успел отработать hideCss
        new AbsoluteFlashMessage({
            text: `Добро пожаловать, ${data.userName}`,
            duration: 3500
        });

        setCookie('favoriteIds', String(data.mixedFavoriteIds), {'max-age': this.cookieLifetime});
        this._indicateFavoriteProductsAfterLogin();
    }


    _ultimateFail() {
        this._turnOffAlarm();
        setTimeout(this._turnOnAlarm.bind(this), 1);

        this._showErrors({
            failedLogin: true
        });
        this.enabledTypeinValidation = true;
    }

    _getUserData() {
        return {
            email: el('#loginEmail').value,
            password: el('#loginPassword').value,
            remember: el('#loginRemember').value,
            favoriteIds: getCookie('favoriteIds'), // для слияния фронт (которые могут быть) и бэк favoriteIds
        };
    }

    _showErrors(err) {
        if (!err) err = {};
        el('#loginEmailErr').innerText = err.email ? err.email[0] : '';
        el('#loginPasswordErr').innerText = err.password ? err.password[0] : '';

        if (el('#failedLoginErrorContent')) {
            el('#failedLoginErrorContent').remove()
        }

        if (err.failedLogin) {
            const html = getFailedLoginHtml();
            el('#failedLoginErr').insertAdjacentHTML('afterbegin', html);
        }
    }

    _indicateFavoriteProductsAfterLogin() {
        new FavoriteProductsIndicationOnPageLoad();
        const idsStr = getCookie('favoriteIds');
        const total = Boolean(idsStr) ? idsStr.split(',').length : 0;
        el('.topMenu-favIcon-total').innerText = total;
    }
}
