import el from '../auxiliaryFunctions/el';

export default class AbsoluteFlashMessage {

    constructor(data) {
        this.text = data.text;
        this.duration = data.duration;
        this.id = `absoluteMessage`;
        this.selector = `#absoluteMessage`;
        this.fadingTime = 700;
        this._render();
    }

    _render() {
        this._removeHtml();

        const html = `<div id="${this.id}" class="absolute_message__wrapper show_block">
                           <div class="absolute_message__content arial_sans-serif">
                                ${this.text}
                           </div>
                      </div>`;
        el('body').insertAdjacentHTML('beforeend', html);

        setTimeout(() => {
            this._hideHtml();
        }, this.duration - this.fadingTime);
    }

    _hideHtml() {
        if (el(this.selector)) {
            el(this.selector).classList.remove('show_block');
            el(this.selector).classList.add('hide_block');
        }
        setTimeout(() => {
            this._removeHtml();
        }, this.fadingTime);
    }

    _removeHtml() {
        if (el(this.selector)) {
            el(this.selector).remove();
        }
    }
}
