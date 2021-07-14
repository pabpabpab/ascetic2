import el from './el';
import AbsoluteForm from "./parentClasses/absoluteForm";
import getLoginFormHtml from './html/getLoginFormHtml';
import getFailedLoginHtml from './html/getFailedLoginHtml';
import getAuthenticatedMenuHtml from './html/getAuthenticatedMenuHtml';
import loginValidation from "./validation/loginValidation";
import AbsoluteFlashMessage from "./absoluteFlashMessage";
import ForgotPassword from "./forgotPassword";

export default class Login extends AbsoluteForm {

    constructor(data, postUrl= '/login/do', successUrl = '/home') {
        super(data);

        this.postUrl = postUrl;
        this.successUrl = successUrl;
        this.wrapSelector = '#loginForm';
        this.submitSelector = '#loginSubmit';

        this.validationFunction = loginValidation;
    }


    _preRenderActions() {
        if (!el('#authBlock')) return;
        el('#authBlock').className = `auth_block__wrapper hide_block`;
    }

    _additionalFirstRenderActions() {
        new ForgotPassword({ clickSourceSelector: '#forgotPasswordLink' });
    }


    _getHtml() {
        return getLoginFormHtml({
            basicCss: this.basicCss,
            showCss: this.showCss,
        });
    }


    _ultimateSuccess(data) {
        el('#authMenuContent').remove();
        const html = getAuthenticatedMenuHtml(data.userName);
        el('#authMenu').insertAdjacentHTML('afterbegin', html);
        el(this.wrapSelector).className = `${this.basicCss} ${this.hideCss}`;
        setTimeout(() => {
            el(this.wrapSelector).remove();
        }, 3000);
        new AbsoluteFlashMessage(`Добро пожаловать, ${data.userName}`);
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
            remember: el('#loginRemember').value
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

}
