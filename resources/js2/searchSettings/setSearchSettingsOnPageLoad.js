import el from "../el";

// запускается при загрузке страницы с сервера с поисковыми параметрами в url
export default function setSearchSettingsOnPageLoad({categoryCache, searchSettingsStore, rendererBySearchSettings}) {
    categoryCache.getEntireList()
        .then(() => {
            // заблокировать на время установки searchSettings
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
            // разблокировать после установки searchSettings
            rendererBySearchSettings.unlock();
        })
}
