import el from './auxiliaryFunctions/el';
import Aware from "./parentClasses/app/aware";

export default class WaitingScreen extends Aware {
    constructor() {
        super();
        window.onload = this.hide;
    }

    hide() {
        if (el('#loadingScreen').classList.contains('show_block')) {
            el('#loadingScreen').classList.remove('show_block');
        }
        el('#loadingScreen').classList.add('hide_block');
    }

    show() {
        if (el('#loadingScreen').classList.contains('hide_block')) {
            el('#loadingScreen').classList.remove('hide_block');
        }
        //el('#loadingScreen').classList.add('show_block');
    }
}
