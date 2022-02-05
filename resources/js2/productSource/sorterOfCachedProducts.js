import Aware from "../parentClasses/app/aware";

export default class SorterOfCachedProducts extends Aware {

    constructor() {
        super();
    }

    doSort(products) {
        const sortingMode = this.state.sortSettings.mode;

        const func = {
            position: this._sortByPosition,
            priceUp: this._sortByPriceUp,
            priceDown: this._sortByPriceDown,
        }

        return func[sortingMode](products);
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
