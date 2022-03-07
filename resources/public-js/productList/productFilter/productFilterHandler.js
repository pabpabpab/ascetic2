import el from "../../auxiliaryFunctions/el";
import Aware from "../../parentClasses/app/aware";

export default class ProductFilterHandler extends Aware {

    constructor() {
        super();
        this.currentMinPrice = null;
        this.currentMaxPrice = null;

        el('body').addEventListener('input', (e) => {
            if (!el('#productFilterWrapper')) {
                return;
            }
            if (!e.target.id) {
                return;
            }

            let initiator = e.target.id;
            if (initiator.includes('filterCategory')) {
                initiator = 'filterCategory';
            }
            const handlers = {
                minPriceTextInput: this._minPriceHandler.bind(this),
                maxPriceTextInput: this._maxPriceHandler.bind(this),
                minPriceRangeInput: this._minPriceHandler.bind(this),
                maxPriceRangeInput: this._maxPriceHandler.bind(this),
                filterCategory: this._categoriesHandler.bind(this),
            };
            if (initiator && handlers[initiator]) {
                this._setSectionSettings();
                handlers[initiator](Number(e.target.value));
            }
        });
    }

    _setSectionSettings() {
        this.commit('setSectionData', {
            sectionName: 'search',
            additionalData: '',
            h1Text: 'Поиск',
        });
    }

    _minPriceHandler(value) {
        this._checkCurrentMinMaxPrice();
        const filterBlock = this.components.productFilterRenderer;
        let validValue = value < filterBlock.minPriceLimit ? filterBlock.minPriceLimit : value;
        validValue = validValue >= this.currentMaxPrice ? this.currentMaxPrice - 100 : validValue;
        el('#minPriceTextInput').value = validValue;
        el('#minPriceRangeInput').value = validValue;
        this.currentMinPrice = validValue;
        if (validValue <= filterBlock.minPriceLimit) {
            validValue = 0;
        }
        this.commit('setMinPrice', validValue);
    }
    _maxPriceHandler(value) {
        this._checkCurrentMinMaxPrice();
        const filterBlock = this.components.productFilterRenderer;
        let validValue = value > filterBlock.maxPriceLimit ? filterBlock.maxPriceLimit : value;
        validValue = validValue <= this.currentMinPrice ? this.currentMinPrice + 100 : validValue;
        el('#maxPriceTextInput').value = validValue;
        el('#maxPriceRangeInput').value = validValue;
        this.currentMaxPrice = validValue;
        if (validValue >= filterBlock.maxPriceLimit) {
            validValue = 0;
        }
        this.commit('setMaxPrice', validValue);
    }

    _checkCurrentMinMaxPrice() {
        const filterBlock = this.components.productFilterRenderer;
        this.currentMinPrice = this.currentMinPrice ?? filterBlock.minPriceLimit;
        this.currentMaxPrice = this.currentMaxPrice ?? filterBlock.maxPriceLimit;
    }

    _categoriesHandler(value) {
        const settings = this.state.searchSettings;
        const idsArr = settings.categoriesIds;
        const index = idsArr.indexOf(value);
        if (index === -1) {
            idsArr.push(value);
        } else {
            idsArr.splice(index, 1);
        }
        this.commit('setCategoriesIds', idsArr);
    }
}
