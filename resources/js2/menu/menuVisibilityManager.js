import el from '../auxiliaryFunctions/el';

export default class MenuVisibilityManager {

    constructor() {
        this.menu = el('#topMainMenu');
        this.startYControl = 0;
        this.lastScrollY = 0;
        this._start();
        window.addEventListener('scroll', () => {
            this._manage();
        });
    }

    _start() {
        this.startYControl = this.menu.getBoundingClientRect().height + 10;
        //console.log(this.menu.getBoundingClientRect());
    }

    _manage() {
        const currentY = window.pageYOffset;
        if (this.menu && currentY < this.startYControl) {
            return;
        }

        const lastY = this.lastScrollY;
        this.lastScrollY = currentY;

        const direction = (currentY > lastY) ? 'down' : 'up';

        if (currentY < this.startYControl) {
            this._show();
            return;
        }

        if (direction === 'up') {
            this._show();
        } else {
            this._hide();
        }
    }

    _show() {
        //el('#topMainMenu').style.display = 'flex';
        this.menu.classList.remove('hide_menu');
        this.menu.classList.add('show_menu');
    }
    _hide() {
        //el('#topMainMenu').style.display = 'none';
        this.menu.classList.remove('show_menu');
        this.menu.classList.add('hide_menu');
    }

}
