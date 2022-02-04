import Aware from "../parentClasses/app/aware";

export default class SectionSettingsStore extends Aware {

    constructor() {
        super();
        this.settings = {
            productSectionName: '',
            additionalDataOfProductSection: '',
        };
        this.observers = [];
    }

    getSettings() {
        return { ...this.settings };
    }

    setProductSectionData({productSectionName, additionalData}) {
        this.settings.productSectionName = productSectionName;
        this.settings.additionalDataOfProductSection = additionalData;
        this._notifyObservers();
    }

    reset() {
        this.settings.productSectionName = '';
        this.settings.additionalDataOfProductSection = '';
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    _notifyObservers() {
        this.observers.forEach(observer => observer.checkSectionSettings());
    }
}
