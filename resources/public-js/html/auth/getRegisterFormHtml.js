import getULoginWidgetHtml from './getULoginWidgetHtml.js';

export default function getRegisterFormHtml() {
    return `<div id="regForm">
                <div class="js_reg_form__header">
                    Регистрация
                    <div class='js_reg_form__close'>&#215;</div>
                </div>
                <label for="regName" class="js_reg_form__input__label">Ваше имя</label>
                <input type='text' name='name' id='regName' required class="js_reg_form__input__text_input">
                <div id="regNameErr" class="js_reg_form__input__validation_message"></div>

                <label for="regEmail" class="js_reg_form__input__label">E-mail</label>
                <input type='email' name='email' id='regEmail' required class="js_reg_form__input__text_input">
                <div id="regEmailErr" class="js_reg_form__input__validation_message"></div>

                <label for="regPassword" class="js_reg_form__input__label">Пароль</label>
                <input type='password' name='password' id='regPassword' required class="js_reg_form__input__text_input">
                <div id="regPasswordErr" class="js_reg_form__input__validation_message"></div>

                <label for="regPassword_confirmation" class="js_reg_form__input__label">Подтвердите пароль</label>
                <input type='password' name='password_confirmation' id='regPassword_confirmation' required class="js_reg_form__input__text_input">
                <div id="regPasswordConfirmationErr" class="js_reg_form__input__validation_message"></div>

                <button type="submit" id='regSubmit' class="js_reg_form__submit_button mt18">
                   Зарегистрироваться
                </button>

                <div class="js_reg_form__header mt20">
                    <a href="/uLoginWidget" class="js_reg_form__social_login_link">
                        Регистрация через соцсети
                    </a>
                </div>

                ${getULoginWidgetHtml()}
            <div>`;
}
