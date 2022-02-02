export default class SortSettingsStore {

    constructor() {
        this.settings = {
            selectedValue: 'position',
            selectedText: 'По умолчанию',
        };
        this.observers = [];
    }

    getSettings() {
        return {...this.settings};
    }

    setSortingMode({selectedValue, selectedText}) {
        this.settings.selectedValue = selectedValue;
        this.settings.selectedText = selectedText;
        this._notifyObservers();
    }

    addObserver(observer) {
        this.observers.push(observer);
    }
    _notifyObservers() {
        this.observers.forEach(observer => observer.checkSortSettings());
    }
}
