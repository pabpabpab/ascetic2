import el from './el.js';
import postJson from './http/postJson.js';
import registerValidation from "./validation/registerValidation.js";
import AbsoluteMessage from "./absoluteMessage.js";

export default class Register {

    constructor(postUrl= '/register', successUrl = '/home') {
        if (!el('#registerLink')) {
            return;
        }
        this.postUrl = postUrl;
        this.successUrl = successUrl;
        this.disabledSubmit = false;
        this.enabledTypeinValidation = false;
        this.basicCss = 'register_form__wrapper';
        this.showCss = 'register_form__show';
        this.hideCss = 'register_form__hide';
        this.alarmCss = 'register_form__alarm';
        el('#registerLink').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this._render();
        });
    }

    _render() {
        if (!el('#regForm')) {
            this._firstRender();
            return;
        }
        this._show();
    }

    _firstRender() {
        const html = `<div id="regForm" class="${this.basicCss} ${this.showCss}">
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
                      </div>`;

        el('body').insertAdjacentHTML('beforeend', html);

        el('#regSubmit').addEventListener('click', () => {
            this._submit(this._getUserData());
        });

        el('#regForm').addEventListener('keyup', () => {
            if (!this.enabledTypeinValidation) return;
            const { popupErrors, typeinErrors } = registerValidation(this._getUserData());
            this._showErrors(typeinErrors);
        });

        el('body').addEventListener('click', (e) => {
            this._hide(e);
        });
    }

    _submit(userData) {
        this._turnOffAlarm();
        const { popupErrors, typeinErrors } = registerValidation(userData);
        if (popupErrors) {
            // console.log(popupErrors);
            setTimeout(this._turnOnAlarm.bind(this), 1);
            this._showErrors(typeinErrors);
            this.enabledTypeinValidation = true;
            return;
        }
        // защита от повторного нажатия на 5 сек
        if (this.disabledSubmit) {
            return;
        }
        this.disabledSubmit = true;
        setTimeout(() => {this.disabledSubmit = false;}, 5000);

        // отправить данные и получить ответ
        postJson(this.postUrl, userData).then((data) => {
            console.log(data);
            if (data.backValidatorErrors) {
                setTimeout(this._turnOnAlarm.bind(this), 1);
                this._showErrors(data.backValidatorErrors);
                this.enabledTypeinValidation = true;
                return;
            }

            if (data.saveSuccess === true) {
                document.location.href = this.successUrl;
            } else {
                new AbsoluteMessage('Не удалось создать регистрацию.');
            }
        });
    }

    _showErrors(err) {
        if (!err) err = {};
        el('#regNameErr').innerText = err.name ? err.name[0] : '';
        el('#regEmailErr').innerText = err.email ? err.email[0] : '';
        el('#regPasswordErr').innerText = err.password ? err.password[0] : '';
        el('#regPasswordConfirmationErr').innerText = err.password_confirmation ? err.password_confirmation[0] : '';
    }

    _getUserData() {
        return {
            name: el('#regName').value,
            email: el('#regEmail').value,
            password: el('#regPassword').value,
            password_confirmation: el('#regPassword_confirmation').value
        };
    }


    _turnOnAlarm() {
        el('#regForm').className = `${this.basicCss} ${this.alarmCss}`;
    }

    _turnOffAlarm() {
        el('#regForm').classList.remove(this.alarmCss);
    }

    _hide(e) {
        if (!el('#regForm')) {
            return;
        }
        if (e.target.parentNode === el('#regForm')) {
            return;
        }
        if (e.target === el('#regForm')) {
            return;
        }
        el('#regForm').className = `${this.basicCss} ${this.hideCss}`;
    }

    _show(e) {
        if (!el('#regForm')) {
            return;
        }
        el('#regForm').className = `${this.basicCss} ${this.showCss}`;
    }

}
