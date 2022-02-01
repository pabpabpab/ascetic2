import el from "../../el";

export default class SearchSettingsObserverForProductFilterRenderer {

    constructor(data) {
        this.categoryCache = data.categoryCache;
        this.searchSettingsStore = data.searchSettingsStore;
    }

    checkSearchSettings() {
        this._renderMinPrice();
        this._renderMaxPrice();
        this.renderCategoryCheckboxes();
    }

    _renderMinPrice() {
        if (!el('#minPriceTextInput')) {
            return;
        }
        const settings = this.searchSettingsStore.getSettings();
        if (settings.minPrice === 0) {
            el('#minPriceTextInput').value = el('#minPriceRangeInput').min;
            el('#minPriceRangeInput').value = el('#minPriceRangeInput').min;
        }
    }
    _renderMaxPrice() {
        if (!el('#maxPriceTextInput')) {
            return;
        }
        const settings = this.searchSettingsStore.getSettings();
        if (settings.maxPrice === 0) {
            el('#maxPriceTextInput').value = el('#maxPriceRangeInput').max;
            el('#maxPriceRangeInput').value = el('#maxPriceRangeInput').max;
        }
    }

    // при загрузке страницы с сервера с поисковыми параметрами
    renderPriceOnLoad() {
        if (!el('#minPriceTextInput')) {
            return;
        }
        const settings = this.searchSettingsStore.getSettings();
        if (settings.minPrice > 0) {
            el('#minPriceTextInput').value = settings.minPrice;
            el('#minPriceRangeInput').value = settings.minPrice;
        }
        if (settings.maxPrice > 0) {
            el('#maxPriceTextInput').value = settings.maxPrice;
            el('#maxPriceRangeInput').value = settings.maxPrice;
        }
    }

    renderCategoryCheckboxes() {
        if (!el('#productFilterCategoriesWrapper')) {
            return;
        }
        const settings = this.searchSettingsStore.getSettings();
        const categoriesIds = settings.categoriesIds;
        const wrapper = el('#productFilterCategoriesWrapper')
        const nodes = wrapper.querySelectorAll('[data-product-filter-category-checkbox-input]');
        for (let node of nodes) {
            node.checked = false;
        }
        settings.categoriesIds.forEach(categoryId => {
            if (el(`#filterCategory${categoryId}`)) {
                el(`#filterCategory${categoryId}`).checked = true;
            }
        })
    }
}
