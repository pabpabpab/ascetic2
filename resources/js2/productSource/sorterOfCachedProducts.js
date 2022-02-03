export default class SorterOfCachedProducts {

    constructor(sortSettingsStore) {
        this.sortSettingsStore = sortSettingsStore;
    }

    doSort(products) {
        const settings = this.sortSettingsStore.getSettings();

        const func = {
            position: this._sortByPosition,
            priceUp: this._sortByPriceUp,
            priceDown: this._sortByPriceDown,
        }

        return func[settings.selectedValue](products);
    }

    _sortByPosition(items) {
        return items.sort((prev, next) => next.position - prev.position);
    }
    _sortByPriceUp(items) {
        return items.sort((prev, next) => prev.price - next.price);
    }
    _sortByPriceDown(items) {
        return items.sort((prev, next) => next.price - prev.price);
    }
}
