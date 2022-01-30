import el from './el';

export default class AbsoluteFlashMessage {

    constructor(text) {
        this.text = text;
        //this.id = `absoluteMessage${new Date().getTime()}`;
        this.id = `absoluteMessage`;
        this._render();
    }

    _render() {
        this._removeHtml();

        const html = `<div id="${this.id}" class="absolute_message__wrapper absolute_message__show_and_hide">
                           <div class="absolute_message__div arial_sans-serif">
                                ${this.text}
                           </div>
                      </div>`;
        el('body').insertAdjacentHTML('beforeend', html);

        const message = el(`#${this.id}`);

        setTimeout(() => {
            if (message) {
                message.remove();
            }
            //this._removeHtml();
        }, 3500);
    }

    _removeHtml() {
        if (el(`#${this.id}`)) {
            el(`#${this.id}`).remove();
        }
    }
}
