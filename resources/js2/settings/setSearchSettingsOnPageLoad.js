import el from "../el";
import Aware from "../parentClasses/app/aware";

// запускается при загрузке страницы с сервера с поисковыми параметрами в url
export default class SetSearchSettingsOnPageLoad extends Aware {

    constructor() {
        super();
        if (el('#productList').dataset.productSectionName !== 'serverProductSearch') {
            return;
        }
        // задержка для дать время установить указатель на app при загрузке
        setTimeout(() => {
            this._initSettings();
        }, 100);
    }

    _initSettings() {
        this.components.categoryCache.getEntireList()
            .then(() => {
                // заблокировать на время установки searchSettings
                this.components.rendererBySearchSettings.lock();
                const listWrapper = el('#productList');
                const paramsArr = listWrapper.dataset.additionalDataOfProductSection.split(';');

                this.commit('setMinPrice', Number(paramsArr[0]));
                this.commit('setMaxPrice', Number(paramsArr[1]));

                const categoriesIdsStr = paramsArr[2];
                const categoriesIdsArr = categoriesIdsStr.split('-').map(id => Number(id));

                if (categoriesIdsStr === '0' || categoriesIdsStr === '') {
                    this.commit('setCategoriesIds', []);
                } else {
                    this.commit('setCategoriesIds', categoriesIdsArr);
                }

                listWrapper.dataset.productSectionName = '';
                listWrapper.dataset.additionalDataOfProductSection = '';
                // разблокировать после установки searchSettings
                this.components.rendererBySearchSettings.unlock();
            })
    }

}

