import el from './el.js';
import AbsoluteForm from "./parentClasses/absoluteForm.js";
import getRegisterFormHtml from './html/getRegisterFormHtml.js';
import registerValidation from "./validation/registerValidation.js";
import AbsoluteMessage from "./absoluteMessage.js";

export default class Register extends AbsoluteForm {

    constructor(clickSourceSelector, postUrl= '/register', successUrl = '/home') {
        super(clickSourceSelector);

        this.postUrl = postUrl;
        this.successUrl = successUrl;
        this.wrapSelector = '#regForm';
        this.submitSelector = '#regSubmit';
        this.basicCss = 'register_form__wrapper';
        this.showCss = 'register_form__show';
        this.hideCss = 'register_form__hide';
        this.alarmCss = 'register_form__alarm';

        this.validationFunction = registerValidation;
    }

    _getFormHtml(data) {
        return getRegisterFormHtml({
            basicCss: this.basicCss,
            showCss: this.showCss,
        });
    }

    _ultimateSuccess() {
        document.location.href = this.successUrl;
    }

    _ultimateFail() {
        new AbsoluteMessage('Не удалось создать регистрацию.');
    }

    _getUserData() {
        return {
            name: el('#regName').value,
            email: el('#regEmail').value,
            password: el('#regPassword').value,
            password_confirmation: el('#regPassword_confirmation').value
        };
    }

    _showErrors(err) {
        if (!err) err = {};
        el('#regNameErr').innerText = err.name ? err.name[0] : '';
        el('#regEmailErr').innerText = err.email ? err.email[0] : '';
        el('#regPasswordErr').innerText = err.password ? err.password[0] : '';
        el('#regPasswordConfirmationErr').innerText = err.password_confirmation ? err.password_confirmation[0] : '';
    }
}
