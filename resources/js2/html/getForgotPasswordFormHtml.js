export default function getForgotPasswordFormHtml(css) {
    return `<div id="forgotPasswordForm" class="${css.basicCss} ${css.showCss}">
                <div class="js_reg_form__header">
                    Забыли пароль?
                    <div class='js_reg_form__close'>&#215;</div>
                </div>

                <div id="sendResetLinkReply" class="mt10"></div>

                <label for="forgotPasswordEmail" class="js_reg_form__input__label">
                    Введите e-mail, который Вы указали при регистрации,
                    отправим Вам ссылку для создания нового пароля.
                </label>
                <input type='email' name='email' id='forgotPasswordEmail' required class="js_reg_form__input__text_input">
                <div id="forgotPasswordEmailErr" class="js_reg_form__input__validation_message"></div>

                <button type="submit" id='sendResetLinkSubmit' class="js_reg_form__submit_button mt18">
                    Отправить
                </button>
            <div>`;
}
