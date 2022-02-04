export default class Aware {

    constructor() {
        this.app = null;
        // инициируется после инициализации app в listApp.js
        // this.components = this.app.components; //инициируется после
    }

    setAppRef(ref) {
        this.app = ref;
    }

    checkState() {}
}
