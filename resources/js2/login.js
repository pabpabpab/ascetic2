import el from './el.js';
import AbsoluteForm from "./parentClasses/absoluteForm.js";
import getLoginFormHtml from './html/getLoginFormHtml.js';
import getAuthenticatedMenuHtml from './html/getAuthenticatedMenuHtml.js';
import loginValidation from "./validation/loginValidation.js";
import AbsoluteMessage from "./absoluteMessage.js";

export default class Login extends AbsoluteForm {

    constructor(clickSourceSelector, postUrl= '/login/do', successUrl = '/home') {
        super(clickSourceSelector);

        this.postUrl = postUrl;
        this.successUrl = successUrl;
        this.wrapSelector = '#loginForm';
        this.submitSelector = '#loginSubmit';
        this.basicCss = 'register_form__wrapper';
        this.showCss = 'register_form__show';
        this.hideCss = 'register_form__hide';
        this.alarmCss = 'register_form__alarm';

        this.validationFunction = loginValidation;
    }


    _getFormHtml() {
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
        new AbsoluteMessage(`Добро пожаловать, ${data.userName}`);
    }

    _ultimateFail() {
        this._turnOffAlarm();
        setTimeout(this._turnOnAlarm.bind(this), 1);
        this._showErrors({
            failedLogin: ['Неправильный логин или пароль']
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
        el('#failedLoginErr').innerText = err.failedLogin ? err.failedLogin[0] : '';
    }

}
