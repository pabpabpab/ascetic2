import csrfToken from './csrfToken.js';
import getJson from "./getJson";


export default class CsrfUpdater {

    constructor() {
        this.url = '/public-js/csrf';
        this._updater();
    }

    _updater() {
        setInterval(() => {
            this._updaterCore();
        }, 15*1000);
    }

    _updaterCore() {
        getJson(this.url).then((data) => {
            csrfToken.set(data);
        });
    }
}


