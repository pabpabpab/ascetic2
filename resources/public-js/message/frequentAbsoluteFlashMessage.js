import el from '../auxiliaryFunctions/el';

export default class FrequentAbsoluteFlashMessage {

    constructor() {
        this.text = '';
        this.duration = 0;
        this.id = `frequentAbsoluteMessage`;
        this.selector = `#frequentAbsoluteMessage`;
        this.fadingTime = 700;
        this.deleteTimerId = 0;
        this.fadeTimerId = 0;
    }

    render(data) {
        this.text = data.text;
        this.duration = data.duration;

        clearTimeout(this.fadeTimerId);
        clearTimeout(this.deleteTimerId);
        this._removeMessage();

        const html = `<div id="${this.id}" class="absolute_message__wrapper show_block">
                           <div class="absolute_message__content arial_sans-serif">
                                ${this.text}
                           </div>
                      </div>`;
        el('body').insertAdjacentHTML('beforeend', html);

        this.fadeTimerId = setTimeout(() => {
            this.hideMessage();
        }, this.duration - this.fadingTime); // 3500
    }

    hideMessage() {
        if (!el(this.selector)) {
            return;
        }
        el(this.selector).classList.remove('show_block');
        el(this.selector).classList.add('hide_block');
        this.deleteTimerId = setTimeout(() => {
            this._removeMessage();
        }, this.fadingTime);
    }

    _removeMessage() {
        if (!el(this.selector)) {
            return;
        }
        el(this.selector).remove();
    }

}
