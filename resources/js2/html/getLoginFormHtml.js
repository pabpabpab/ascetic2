import getULoginWidgetHtml from './getULoginWidgetHtml.js';

export default function getLoginFormHtml(css) {
    return `<div id="loginForm" class="${css.basicCss} ${css.showCss}">
                <div class="register_form__header">
                    Вход для пользователя
                    <div class='register_form__close'>&#215;</div>
                </div>

                <div id="failedLoginErr" class="mt10"></div>

                <label for="loginEmail" class="register_input__label">E-mail</label>
                <input type='email' name='email' id='loginEmail' required class="register_input__text">
                <div id="loginEmailErr" class="register_input__validation_message"></div>

                <label for="loginPassword" class="register_input__label">Пароль</label>
                <input type='password' name='password' id='loginPassword' required class="register_input__text">
                <div id="loginPasswordErr" class="register_input__validation_message"></div>

                <input type="checkbox" name="remember" id="loginRemember" value="1" class="login__checkbox_input">
                <label for="loginRemember" class="login__checkbox_label">Запомнить меня</label>

                <div class="submit_forgot__flex mt18">
                    <button type="submit" id='loginSubmit' class="register_form__submit_button">
                        Войти
                    </button>
                    <a href="/forgot-password" id="forgotPasswordLink" class="forgot_password__link">
                        Забыли пароль?
                    </a>
                </div>

                <div class="register_form__header mt30">
                    Войти через
                </div>
                ${getULoginWidgetHtml()}
            <div>`;
}
