import getULoginWidgetHtml from './getULoginWidgetHtml.js';

export default function getLoginFormHtml() {
    return `<div id="loginForm">
                <div class="js_reg_form__header">
                    Вход для пользователя
                    <div class='js_reg_form__close'>&#215;</div>
                </div>

                <div id="failedLoginErr" class="mt10"></div>

                <label for="loginEmail" class="js_reg_form__input__label">E-mail</label>
                <input type='email' name='email' id='loginEmail' required class="js_reg_form__input__text_input">
                <div id="loginEmailErr" class="js_reg_form__input__validation_message"></div>


                <label for="loginPassword" class="js_reg_form__input__label">Пароль</label>
                <input type='password' name='password' id='loginPassword' required class="js_reg_form__input__text_input">
                <div class="height0 relative">
                    <img alt="" src="/images/closedEye.svg" id="closedEyeImg" class="js_reg_form__closed_eye_img">
                    <img alt="" src="/images/openedEye.svg" id="openedEyeImg" class="js_reg_form__opened_eye_img">
                </div>
                <div id="loginPasswordErr" class="js_reg_form__input__validation_message"></div>



                <input type="checkbox" name="remember" id="loginRemember" value="1" class="js_reg_form__checkbox_input">
                <label for="loginRemember" class="js_reg_form__checkbox_label">Запомнить меня</label>

                <div class="js_reg_form__submit_and_forgot_flex mt18">
                    <button type="submit" id='loginSubmit' class="js_reg_form__submit_button">
                        Войти
                    </button>
                    <a href="/forgot-password" id="forgotPasswordLink" class="js_reg_form__forgot_password_link">
                        Забыли пароль?
                    </a>
                </div>

                <div class="js_reg_form__header mt20">
                    <a href="/uLoginWidget" class="js_reg_form__forgot_password_link">
                        Войти через соцсети
                    </a>
                </div>
                ${getULoginWidgetHtml()}
            <div>`;
}
