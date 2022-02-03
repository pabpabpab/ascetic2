import AppAncestor from "../appAncestor";

export default class SortSettingsStore extends AppAncestor {

    constructor() {
        super();
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
        const previousValue = this.settings.selectedValue;
        this.settings.selectedValue = selectedValue;
        this.settings.selectedText = selectedText;
        if (previousValue !== selectedValue) {
            this._notifyObservers();
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }
    _notifyObservers() {
        this.observers.forEach(observer => observer.checkSortSettings());
    }
}
