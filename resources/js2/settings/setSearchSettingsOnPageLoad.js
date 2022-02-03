import el from "../el";
import AppAncestor from "../appAncestor";

// запускается при загрузке страницы с сервера с поисковыми параметрами в url
export default class SetSearchSettingsOnPageLoad extends AppAncestor {

    constructor(data) {
        super();

        if (el('#productList').dataset.productSectionName !== 'serverProductSearch') {
            return;
        }

        //this.categoryCache = data.categoryCache;
        //this.searchSettingsStore = data.searchSettingsStore;
        //this.rendererBySearchSettings = data.rendererBySearchSettings;

        // задержка для дать время установить указатель на app при загрузке
        setTimeout(() => {
            this._initSettings();
        }, 100);
    }

    _initSettings() {
        this.app.categoryCache.getEntireList()
            .then(() => {
                // заблокировать на время установки searchSettings
                this.app.rendererBySearchSettings.lock();
                const listWrapper = el('#productList');
                const paramsArr = listWrapper.dataset.additionalDataOfProductSection.split(';');
                this.app.searchSettingsStore.setMinPrice(Number(paramsArr[0]));
                this.app.searchSettingsStore.setMaxPrice(Number(paramsArr[1]));

                const categoriesIdsStr = paramsArr[2];
                const categoriesIdsArr = categoriesIdsStr.split('-').map(id => Number(id));

                if (categoriesIdsStr === '0' || categoriesIdsStr === '') {
                    this.app.searchSettingsStore.setCategoriesIds([]);
                } else {
                    this.app.searchSettingsStore.setCategoriesIds(categoriesIdsArr);
                }

                listWrapper.dataset.productSectionName = '';
                listWrapper.dataset.additionalDataOfProductSection = '';
                // разблокировать после установки searchSettings
                this.app.rendererBySearchSettings.unlock();
            })
    }

}










/*
export default function setSearchSettingsOnPageLoad({categoryCache, searchSettingsStore, rendererBySearchSettings}) {
    categoryCache.getEntireList()
        .then(() => {
            rendererBySearchSettings.lock();
            const listWrapper = el('#productList');
            const paramsArr = listWrapper.dataset.additionalDataOfProductSection.split(';');
            searchSettingsStore.setMinPrice(Number(paramsArr[0]));
            searchSettingsStore.setMaxPrice(Number(paramsArr[1]));

            const categoriesIdsStr = paramsArr[2];
            const categoriesIdsArr = categoriesIdsStr.split('-').map(id => Number(id));

            if (categoriesIdsStr === '0' || categoriesIdsStr === '') {
                searchSettingsStore.setCategoriesIds([]);
            } else {
                searchSettingsStore.setCategoriesIds(categoriesIdsArr);
            }

            listWrapper.dataset.productSectionName = '';
            listWrapper.dataset.additionalDataOfProductSection = '';

            rendererBySearchSettings.unlock();
        })
}
*/
