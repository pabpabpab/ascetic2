export default class Aware {

    constructor() {
        this.app = null;
    }

    setAppRef(ref) {
        this.app = ref;
    }

    checkSortSettings() {}
    checkSectionSettings() {}
    checkSearchSettings() {}
    checkPaginatorSettings() {}
}
