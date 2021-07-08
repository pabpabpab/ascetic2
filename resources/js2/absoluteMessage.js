import el from './el.js';


export default class AbsoluteMessage {

    constructor(text) {
        this.text = text;
        this.id = `absoluteMessage${new Date().getTime()}`;
        this._render();
    }

    _render() {
        const html = `<div id="${this.id}" class="absolute_message__wrapper">
                           <div class="absolute_message__div">
                                ${this.text}
                           </div>
                      </div>`;
        el('body').insertAdjacentHTML('beforeend', html);

        setTimeout(() => {
            this._removeHtml();
        }, 2500);
    }

    _removeHtml() {
        el(`#${this.id}`).remove();
    }
}
