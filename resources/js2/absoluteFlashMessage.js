import el from './el';

export default class AbsoluteFlashMessage {

    constructor(data) {
        this.text = data.text;
        this.duration = data.duration;
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
        }, this.duration); // 3500
    }

    _removeHtml() {
        if (el(`#${this.id}`)) {
            el(`#${this.id}`).remove();
        }
    }
}
