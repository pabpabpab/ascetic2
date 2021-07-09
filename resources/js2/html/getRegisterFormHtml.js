export default function getRegisterFormHtml(css) {
    return `<div id="regForm" class="${css.basicCss} ${css.showCss}">
                <div class="register_form__header">
                    Регистрация
                    <div class='register_form__close'>&#215;</div>
                </div>
                <label for="regName" class="register_input__label">Ваше имя</label>
                <input type='text' name='name' id='regName' required class="register_input__text">
                <div id="regNameErr" class="register_input__validation_message"></div>

                <label for="regEmail" class="register_input__label">E-mail</label>
                <input type='email' name='email' id='regEmail' required class="register_input__text">
                <div id="regEmailErr" class="register_input__validation_message"></div>

                <label for="regPassword" class="register_input__label">Пароль</label>
                <input type='password' name='password' id='regPassword' required class="register_input__text">
                <div id="regPasswordErr" class="register_input__validation_message"></div>

                <label for="regPassword_confirmation" class="register_input__label">Подтвердите пароль</label>
                <input type='password' name='password_confirmation' id='regPassword_confirmation' required class="register_input__text">
                <div id="regPasswordConfirmationErr" class="register_input__validation_message"></div>

                <button type="submit" id='regSubmit' class="register_form__submit_button">
                   Зарегистрироваться
                </button>
            <div>`;
}
