import el from '../auxiliaryFunctions/el';

export default class PasswordTypeChanger {

    constructor(data) {
        this.closedEyeSelector = data.closedEyeSelector;
        this.openedEyeSelector = data.openedEyeSelector;
        this.passwordInputSelector = data.passwordInputSelector;
        if (!el(this.closedEyeSelector)) {
            return;
        }
        if (!el(this.openedEyeSelector)) {
            return;
        }
        el(this.closedEyeSelector).addEventListener('click', (e) => {
            e.stopPropagation();
            this._changePasswordType('toText');
        });
        el(this.openedEyeSelector).addEventListener('click', (e) => {
            e.stopPropagation();
            this._changePasswordType('toPassword');
        });
    }

    _changePasswordType(direction) {
        if (direction === 'toText') {
            el(this.passwordInputSelector).type = 'text';
            el(this.closedEyeSelector).style.display = 'none';
            el(this.openedEyeSelector).style.display = 'block';
        } else {
            el(this.passwordInputSelector).type = 'password';
            el(this.closedEyeSelector).style.display = 'block';
            el(this.openedEyeSelector).style.display = 'none';
        }
    }
}
