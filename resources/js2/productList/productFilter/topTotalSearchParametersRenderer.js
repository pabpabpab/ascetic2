import el from "../../el";
import getCategoriesBlockHtmlForFilter from "../../html/productList/filterBlock/getCategoriesBlockHtmlForFilter";

export default class FilterTopTotalParametersRenderer {

    constructor(data) {
        this.searchSettingsStore = data.searchSettingsStore;
        this.categoryCache = data.categoryCache;
        this._render();
    }


    _render() {
        const html = `<div class="top_total_parameters_of_search"></div>`;
        el('.h1_viewing_sorting_filtering_container').insertAdjacentHTML('afterend', html);
        el('.top_total_parameters_of_search').addEventListener('click', (e) => {
            this._collapseIconHandler(e);
        });
    }

    _collapseIconHandler(e) {
        if (!e.target.dataset) {
            return;
        }

        const entity = e.target.dataset.topSearchParameterEntity;
        const entityValue = e.target.dataset.topSearchParameterValue;

        if (entity === 'minPrice') {
            this.searchSettingsStore.setMinPrice(0);
        }
        if (entity === 'maxPrice') {
            this.searchSettingsStore.setMaxPrice(0);
        }
        if (entity === 'category') {
            const categoryId = Number(entityValue);
            const settings = this.searchSettingsStore.getSettings();
            const categoryIds = settings.categoriesIds;
            const index = categoryIds.indexOf(categoryId);
            if (index > -1) {
                categoryIds.splice(index, 1);
            }
            this.searchSettingsStore.setCategoriesIds(categoryIds) ;
        }
    }

    checkSearchSettings() {
        this._removeAllItems();
        const totalCount = this.searchSettingsStore.getTotalCountOfSetFilterParameters();
        if (totalCount > 0) {
            this._renderItems();
        }
    }

    _renderItems() {
        const settings = this.searchSettingsStore.getSettings();
        const container = el('.top_total_parameters_of_search');
        if (settings.minPrice > 0) {
            const minPrice = settings.minPrice;
            const text = `от ${minPrice} руб.`;
            container.insertAdjacentHTML('beforeend', this._getItemHtml('minPrice', minPrice, text));
        }
        if (settings.maxPrice > 0) {
            const maxPrice = settings.maxPrice;
            const text = `до ${maxPrice} руб.`;
            container.insertAdjacentHTML('beforeend', this._getItemHtml('maxPrice', maxPrice, text));
        }

        const cachedCategories = this.categoryCache.getCachedCategories();
        const categoryItems = settings.categoriesIds.map(categoryId => {
            const found = cachedCategories.find(item => item.id === categoryId);
            if (!found) {
                return '';
            }
            return this._getItemHtml('category', categoryId, found.name);
        });
        const categoryItemsHtml = categoryItems.join('');
        container.insertAdjacentHTML('beforeend', categoryItemsHtml);
    }

    _getItemHtml(entity, value, text) {
        return `<p class="top_total_parameters_of_search__item">
                    ${text}
                    <span
                        data-top-search-parameter-entity="${entity}"
                        data-top-search-parameter-value="${value}"
                        class="top_total_parameters_of_search__item__collapse_icon">
                        &#215;
                    </span>
                </p>`;
    }

    _removeAllItems() {
        const container = el('.top_total_parameters_of_search');
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
    }
}
