import el from '../el.js';
import AbsoluteForm from "../parentClasses/absoluteForm.js";
import getRegisterFormHtml from '../html/auth/getRegisterFormHtml.js';
import registerValidation from "../validation/registerValidation.js";
import AbsoluteFlashMessage from "../absoluteFlashMessage.js";
import getCookie from "../cookie/getCookie";

export default class Register extends AbsoluteForm {

    constructor(data, postUrl= '/register', successUrl = '/my') {
        super(data);

        this.postUrl = postUrl;
        this.successUrl = successUrl;
        this.wrapSelector = '#regForm';
        this.submitSelector = '#regSubmit';

        this.validationFunction = registerValidation;
    }

    _preRenderActions() {
        if (!el('#authAbsoluteMenu')) return;
        el('#authAbsoluteMenu').className = `auth_absolute_menu__wrapper hide_block`;
    }

    _getHtml(data) {
        return getRegisterFormHtml({
            basicCss: this.basicCss,
            showCss: this.showCss,
        });
    }

    _ultimateSuccess() {
        new AbsoluteFlashMessage('Регистрация создана.');
        setTimeout(() => {
            document.location.href = this.successUrl;
        }, 2000);
    }

    _ultimateFail() {
        new AbsoluteFlashMessage('Не удалось создать регистрацию.');
    }

    _getUserData() {
        return {
            name: el('#regName').value,
            email: el('#regEmail').value,
            password: el('#regPassword').value,
            password_confirmation: el('#regPassword_confirmation').value,
            favoriteIds: getCookie('favoriteIds'), // для записи фронт (которые могут быть) в бэк favoriteIds
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
