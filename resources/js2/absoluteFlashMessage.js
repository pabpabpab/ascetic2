import el from './el';

export default class AbsoluteFlashMessage {

    constructor(text) {
        this.text = text;
        this.id = `absoluteMessage${new Date().getTime()}`;
        this._render();
    }

    _render() {
        const html = `<div id="${this.id}" class="absolute_message__wrapper absolute_message__show_and_hide">
                           <div class="absolute_message__div arial_sans-serif">
                                ${this.text}
                           </div>
                      </div>`;
        el('body').insertAdjacentHTML('beforeend', html);

        setTimeout(() => {
            this._removeHtml();
        }, 3500);
    }

    _removeHtml() {
        el(`#${this.id}`).remove();
    }
}
