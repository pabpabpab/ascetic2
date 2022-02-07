import el from "../el";
import Aware from "../parentClasses/app/aware";

// запускается при загрузке страницы с сервера с поисковыми параметрами в url
export default class SettingsSetterOnPageLoad extends Aware {

    constructor() {
        super();
        this.wrapper = el('#productList');
        // задержка для дать время установить указатель на app при загрузке
        setTimeout(() => {
            this._initSettings();
        }, 100);
    }

    _initSettings() {
        const sectionName = this._ucFirst(
            el('#productList').dataset.productSectionName
        );
        if (!sectionName) {
            return;
        }
        const setter = `_setterBy${sectionName}`;

        if (this[setter]) {
            this[setter]();
        }
    }

    _setterByAllProducts() {
        this._setSectionSettings();
        this._setPaginatorSettings();
        this._resetDataAttributes();
    }
    _setterByProductCategory() {
        this._setSectionSettings();
        this._setPaginatorSettings();
        this._resetDataAttributes();
    }
    _setterByFavoriteProducts() {
        this._setSectionSettings();
        this._setPaginatorSettings();
        this._resetDataAttributes();
    }
    _setterByViewedProducts() {
        this._setSectionSettings();
        this._setPaginatorSettings();
        this._resetDataAttributes();
    }

    _setterByProductSearchOnServer() {
        this.components.categoryCache.getEntireList()
            .then(() => {
                // заблокировать на время установки searchSettings
                this.components.rendererBySearchSettings.lock();
                const paramsArr = this.wrapper.dataset.additionalSectionData.split(';');

                this.commit('setMinPrice', Number(paramsArr[0]));
                this.commit('setMaxPrice', Number(paramsArr[1]));
                const categoriesIdsStr = paramsArr[2];
                const categoriesIdsArr = categoriesIdsStr.split('-').map(id => Number(id));

                if (categoriesIdsStr === '0' || categoriesIdsStr === '') {
                    this.commit('setCategoriesIds', []);
                } else {
                    this.commit('setCategoriesIds', categoriesIdsArr);
                }

                // разблокировать после установки searchSettings
                this.components.rendererBySearchSettings.unlock();

                this.commit('setSectionData', {
                    sectionName: this.wrapper.dataset.productSectionName,
                    additionalData: '',
                    h1Text: this.wrapper.dataset.h1Text,
                });
                this._setPaginatorSettings();
                this._resetDataAttributes();
            })
    }

    _setSectionSettings() {
        this.commit('setSectionData', {
            sectionName: this.wrapper.dataset.productSectionName,
            additionalData: this.wrapper.dataset.additionalSectionData,
            h1Text: this.wrapper.dataset.h1Text,
        });
    }

    _setPaginatorSettings() {
        const currentPage = Number(this.wrapper.dataset.currentPage);
        const startOffset = (currentPage - 1) * this.state.paginatorSettings.perPage;

        this.commit('setSectionProductsCount', Number(this.wrapper.dataset.sectionProductsCount));
        this.commit('setStartOffset', startOffset);
        this.commit('setPageCount', Number(this.wrapper.dataset.sectionPageCount));
        this.commit('setPageNumber', currentPage);
    }

    _resetDataAttributes() {
        this.wrapper.dataset.productSectionName = '';
        this.wrapper.dataset.additionalSectionData = '';
        this.wrapper.dataset.h1Text = '';

        this.wrapper.dataset.sectionProductsCount = '0';
        this.wrapper.dataset.sectionPageCount = '0';
        this.wrapper.dataset.currentPage = '0';
    }

    _ucFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }
}

