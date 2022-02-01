// при загрузке страницы с сервера с поисковыми параметрами в url
export default function setSearchSettingsOnLoad({searchSettingsStore, wrapper, rendererBySearchSettings}) {
    rendererBySearchSettings.lock(); // заблокировать на время установки searchSettings
    const paramsArr = wrapper.dataset.additionalDataOfProductSection.split(';');
    searchSettingsStore.setMinPrice(Number(paramsArr[0]));
    searchSettingsStore.setMaxPrice(Number(paramsArr[1]));

    const categoriesIdsStr = paramsArr[2];
    const categoriesIdsArr = categoriesIdsStr.split('-').map(id => Number(id));

    if (categoriesIdsStr === '0' || categoriesIdsStr === '') {
        searchSettingsStore.setCategoriesIds([]);
    } else {
        searchSettingsStore.setCategoriesIds(categoriesIdsArr);
    }

    wrapper.dataset.productSectionName = '';
    wrapper.dataset.additionalDataOfProductSection = '';
    rendererBySearchSettings.unlock(); // разблокировать после установки searchSettings
}
