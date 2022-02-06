export default class Aware {

    constructor() {
        this.app = null;
        this.locked = false;
    }

    setAppRef(ref) {
        this.app = ref;
    }

    // блокировать экземпляры (наследники) класса в settingsSetterOnPageLoad
    // на время установки settings при загрузке страницы с сервера
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }

    // метода наблюдения вызываемые из коммитера
    checkSortSettings() {}
    checkSectionSettings() {}
    checkSearchSettings() {}
    checkPaginatorSettings() {}
}
