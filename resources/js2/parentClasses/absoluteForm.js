import el from './../el.js';
import postJson from "../http/postJson";

export default class AbsoluteForm {

    constructor(clickSourceSelector) {
        this.disabledSubmit = false;
        this.enabledTypeinValidation = false;

        if (!el(clickSourceSelector)) {
            return;
        }
        el(clickSourceSelector).addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this._render();
        });

        this.postUrl = '';
        this.successUrl = '';

        this.wrapSelector = '';
        this.submitSelector = '';
        this.basicCss = '';
        this.alarmCss = '';
        this.showCss = '';
        this.hideCss = '';

        this.validationFunction = null;
    }

    _render() {
        if (!el(this.wrapSelector)) {
            this._firstRender();
            return;
        }
        this._show();
    }

    _firstRender() {
        const html = this._getFormHtml();
        el('body').insertAdjacentHTML('beforeend', html);
        this._listenForm();
    }

    _getFormHtml() {}

    _listenForm() {
        // submit
        el(this.submitSelector).addEventListener('click', () => {
            this._submit(this._getUserData());
        });

        // слушать keyup для запуска type-in валидации
        el(this.wrapSelector).addEventListener('keyup', () => {
            this._doTypeInValidation(this._getUserData());
        });

        // скрыть форму при клике мимо
        el('body').addEventListener('click', (e) => {
            this._hide(e);
        });
    }

    _getUserData() {}

    _doTypeInValidation(userData) {
        if (!this.enabledTypeinValidation) {
            return;
        }
        const errors = this.validationFunction(userData);
        this._showErrors(errors);
    }

    _submit(userData) {
        this._turnOffAlarm();

        // фронт-валидация введенных данных
        const errors = this.validationFunction(userData);
        if (errors) {
            this._weHaveErrors(errors);
            return;
        }

        // если не получено разрешение на submit
        if (! this._getSubmitPermission()) {
            return;
        }

        // отправить данные и получить ответ
        postJson(this.postUrl, userData).then((data) => {
            if (data.backValidatorErrors) {
                this._weHaveErrors(data.backValidatorErrors);
                return;
            }
            if (data.success === true) {
                this._ultimateSuccess(data);
            } else {
                this._ultimateFail();
            }
        });
    }

    _weHaveErrors(errors) {
        setTimeout(this._turnOnAlarm.bind(this), 1);
        this._showErrors(errors);
        this.enabledTypeinValidation = true;
    }

    _showErrors(errors) {}
    _ultimateSuccess() {}
    _ultimateFail() {}

    _getSubmitPermission() {
        // защита от повторного нажатия на 5 сек
        if (this.disabledSubmit) {
            return false;
        }
        this.disabledSubmit = true;
        setTimeout(() => {
            this.disabledSubmit = false;
        }, 5000);

        return true;
    }

    _turnOnAlarm() {
        el(this.wrapSelector).className = `${this.basicCss} ${this.alarmCss}`;
    }

    _turnOffAlarm() {
        el(this.wrapSelector).classList.remove(this.alarmCss);
    }

    _hide(e) {
        if (!el(this.wrapSelector)) {
            return;
        }
        if (e.target.parentNode === el(this.wrapSelector)) {
            return;
        }
        if (e.target === el(this.wrapSelector)) {
            return;
        }
        el(this.wrapSelector).className = `${this.basicCss} ${this.hideCss}`;
    }

    _show(e) {
        if (!el(this.wrapSelector)) {
            return;
        }
        el(this.wrapSelector).className = `${this.basicCss} ${this.showCss}`;
    }
}
