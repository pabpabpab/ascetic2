import el from "../../el";

export default class ProductFilterHandler {

    constructor(data) {
        this.filterBlock = data.filterBlock;
        this.searchSettingsStore = data.searchSettingsStore;
        this.currentMinPrice = null;
        this.currentMaxPrice = null;

        el('#productFilterWrapper').addEventListener('input', (e) => {

            this._resetProductSectionData();

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
                handlers[initiator](Number(e.target.value));
            }
        });
    }

    _resetProductSectionData() {
        const wrapper = el('#productList');
        wrapper.dataset.productSectionName = '';
        wrapper.dataset.additionalDataOfProductSection = '';
        this.searchSettingsStore.setProductSectionData({
            productSectionName: '',
            additionalData: '',
        });
    }

    _minPriceHandler(value) {
        this._checkCurrentMinMaxPrice();
        let validValue = value < this.filterBlock.minPriceLimit ? this.filterBlock.minPriceLimit : value;
        validValue = validValue >= this.currentMaxPrice ? this.currentMaxPrice - 100 : validValue;
        el('#minPriceTextInput').value = validValue;
        el('#minPriceRangeInput').value = validValue;
        this.currentMinPrice = validValue;
        if (validValue <= this.filterBlock.minPriceLimit) {
            validValue = 0;
        }
        this.searchSettingsStore.setMinPrice(validValue);
    }
    _maxPriceHandler(value) {
        this._checkCurrentMinMaxPrice();
        let validValue = value > this.filterBlock.maxPriceLimit ? this.filterBlock.maxPriceLimit : value;
        validValue = validValue <= this.currentMinPrice ? this.currentMinPrice + 100 : validValue;
        el('#maxPriceTextInput').value = validValue;
        el('#maxPriceRangeInput').value = validValue;
        this.currentMaxPrice = validValue;
        if (validValue >= this.filterBlock.maxPriceLimit) {
            validValue = 0;
        }
        this.searchSettingsStore.setMaxPrice(validValue);
    }

    _checkCurrentMinMaxPrice() {
        this.currentMinPrice = this.currentMinPrice ?? this.filterBlock.minPriceLimit;
        this.currentMaxPrice = this.currentMaxPrice ?? this.filterBlock.maxPriceLimit;
    }

    _categoriesHandler(value) {
        const settings = this.searchSettingsStore.getSettings();
        const idsArr = settings.categoriesIds;
        const index = idsArr.indexOf(value);
        if (index === -1) {
            idsArr.push(value);
        } else {
            idsArr.splice(index, 1);
        }
        this.searchSettingsStore.setCategoriesIds(idsArr);

        // console.log(this.searchSettingsStore.settings);
    }
}
