import el from './el';
import AbsoluteForm from "./parentClasses/absoluteForm";
import forgotPasswordValidation from "./validation/forgotPasswordValidation";
import getForgotPasswordFormHtml from "./html/getForgotPasswordFormHtml";
import AbsoluteMessageWithCloseIcon from "./absoluteMessageWithCloseIcon";

export default class ForgotPassword extends AbsoluteForm {
    constructor(data, postUrl= '/forgot-password/send-reset-link', successUrl = '') {
        super(data);

        this.postUrl = postUrl;
        this.successUrl = successUrl;
        this.wrapSelector = '#forgotPasswordForm';
        this.submitSelector = '#sendResetLinkSubmit';

        this.reply = `Если Вы правильно указали вашу почту, ссылка была отправлена. Проверьте пожалуйста Вашу почту.`;

        this.validationFunction = forgotPasswordValidation;
    }

    _preRenderActions() {
        el('#loginForm').className = `${this.basicCss} ${this.hideCss}`;
    }

    _getHtml() {
        return getForgotPasswordFormHtml({
            basicCss: this.basicCss,
            showCss: this.showCss,
        });
    }

    _ultimateSuccess() {
        new AbsoluteMessageWithCloseIcon({ text: this.reply });
        el('#forgotPasswordForm').className = `${this.basicCss} ${this.hideCss}`;
    }

    _ultimateFail() {
        new AbsoluteMessageWithCloseIcon({ text: this.reply });
        el('#forgotPasswordForm').className = `${this.basicCss} ${this.hideCss}`;
    }

    _getUserData() {
        return {
            email: el('#forgotPasswordEmail').value
        };
    }

    _showErrors(err) {
        if (!err) err = {};
        el('#forgotPasswordEmailErr').innerText = err.email ? err.email[0] : '';
    }
}
