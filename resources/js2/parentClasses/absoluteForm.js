import el from '../auxiliaryFunctions/el';
import postJson from "../http/postJson";
import VisibleBlockByClick from "./visibleBlockByClick";

export default class AbsoluteForm extends VisibleBlockByClick {

    constructor(clickSourceSelector) {
        super(clickSourceSelector);

        this.postUrl = '';
        this.successUrl = '';

        this.disabledSubmit = false;
        this.enabledTypeinValidation = false;

        this.wrapSelector = '';
        this.submitSelector = '';

        this.basicCss = 'js_reg_form';
        this.showCss = 'show_block';
        this.hideCss = 'hide_block';
        this.alarmCss = 'js_reg_form__alarm';

        this.validationFunction = null;
    }

    _listenThisBlock() {
        // submit
        el(this.submitSelector).addEventListener('click', () => {
            this._submit(this._getUserData());
        });

        // слушать keyup для запуска type-in валидации
        el(this.wrapSelector).addEventListener('keyup', () => {
            this._doTypeInValidation(this._getUserData());
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

        el(this.submitSelector).innerText = 'Ждите...';

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
        // защита от повторного нажатия на 9 сек
        if (this.disabledSubmit) {
            return false;
        }
        this.disabledSubmit = true;
        setTimeout(() => {
            this.disabledSubmit = false;
        }, 9000);

        return true;
    }

    _turnOnAlarm() {
        el(this.wrapSelector).className = `${this.basicCss} ${this.alarmCss}`;
    }

    _turnOffAlarm() {
        el(this.wrapSelector).classList.remove(this.alarmCss);
    }
}
