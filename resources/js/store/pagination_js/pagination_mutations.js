export default {

    setFiltered: (state, { entity, data }) => {
        // state.filtered[entity].splice(0, state.filtered[entity].length);
        const filtered = state.filtered;
        filtered[entity] = [];
        for (let i = 0; i < data.length; i += 1) {
            filtered[entity].push(data[i]);
        }
        state.filtered = filtered;
    },
    // =========================================================
    setCurrentPage: (state, { entity, index }) => {
        const currentPage = state.currentPage;
        currentPage[entity] = index;
        state.currentPage = currentPage;
    },

    // =================PaginationLinkCssArr======================
    clearPaginationLinkCssArr: (state, entity) => {
        const paginationLinkCssArr = state.paginationLinkCssArr;
        paginationLinkCssArr[entity] = [];
        state.paginationLinkCssArr = paginationLinkCssArr;
    },
    pushIntoPaginationLinkCssArr: (state, {entity, cssClass}) => {
        const paginationLinkCssArr = state.paginationLinkCssArr;
        paginationLinkCssArr[entity].push(cssClass);
        state.paginationLinkCssArr = paginationLinkCssArr;
    },
    setPaginationLinkCssArrByIndex: (state, { entity, index, cssClass }) => {
        const paginationLinkCssArr = state.paginationLinkCssArr;
        paginationLinkCssArr[entity].splice(index, 1, cssClass);
        state.paginationLinkCssArr = paginationLinkCssArr;
    },

    // ==================paginationLinksShot=======================
    clearPaginationLinksShot: (state, entity) => {
        const paginationLinksShot = state.paginationLinksShot;
        paginationLinksShot[entity] = [];
        state.paginationLinksShot = paginationLinksShot;
    },
    pushIntoPaginationLinkShot: (state, {entity, item}) => {
        const paginationLinksShot = state.paginationLinksShot;
        paginationLinksShot[entity].push(item);
        state.paginationLinksShot = paginationLinksShot;
    },
    fillPaginationLinkShot: (state, { entity, border1, border2 }) => {
        const paginationLinksShot = state.paginationLinksShot;
        for (let i = border1; i <= border2; i += 1) {
            paginationLinksShot[entity].push(i);
        }
        state.paginationLinksShot = paginationLinksShot;
    },

    // ======================customized=========================
    clearCustomized: (state, entity) => {
        const customized = { ...state.customized };
        customized[entity] = [];
        state.customized = { ...customized };
    },
    pushIntoCustomized: (state, { entity, pageCounter, item }) => {
        const customized = state.customized;
        customized[entity][pageCounter].push(item);
        state.customized = customized;
    },
    pushNewPageIntoCustomized: (state, entity) => {
        const customized = state.customized;
        customized[entity].push([]);
        state.customized = customized;
    },
    // =================quantityPerPage===================
    setQuantityPerPage: (state, { entity, quantityPerPage }) => {
        if (!quantityPerPage) {
            return;
        }
        state.quantityPerPage[entity] = quantityPerPage;
    },
    //===================move item by drag and drop==================

    moveItemInFiltered: (state, { operatedId, targetId, entity }) => {
        const filtered = state.filtered[entity];

        // найти индексы элементов по id
        let currentIndex = filtered.findIndex(item => item.id === operatedId);
        let newIndex = filtered.findIndex(item => item.id === targetId);

        // вырвать из массива и получить наш элемент, который двигаем
        const operatedItem = filtered.splice(currentIndex, 1)[0];

        // заплатка (когда тащим сверху вниз, но не за нижний предел списка)
        if ((currentIndex < newIndex) && (newIndex !== state.filtered[entity].length)) {
            newIndex--;
        }

        // вставить наш элемент на новое место
        filtered.splice(newIndex, 0, operatedItem);
        state.filtered[entity] = [ ...filtered ];
    },

    moveItemInCustomized: (state, { currentIndexInPage, newIndexInPage, entity }) => {
        const customized = state.customized;
        const currentPageIndex = state.currentPage[entity];

        // взять items той страницы где происходило перемещение
        const pageItems = customized[entity][currentPageIndex];

        // вырвать из массива и получить наш элемент, который двигаем
        const operatedItem = pageItems.splice(currentIndexInPage, 1)[0];

        // заплатка (когда тащим сверху вниз, но не за нижний предел списка)
        if ((currentIndexInPage < newIndexInPage) && (newIndexInPage !== state.customized[entity][currentPageIndex].length)) {
            newIndexInPage--;
        }

        // вставить наш элемент на новое место
        pageItems.splice(newIndexInPage, 0, operatedItem);
        // обновить локальный customized
        customized[entity][currentPageIndex] = [ ...pageItems ];

        // обновить весь customized в state
        state.customized = { ...customized };
    },

    //===================update photoSet of item in filtered==================
    updatePhotosetOfItemInFiltered: (state, { entity, itemId, photoSet }) => {
        const filtered = state.filtered[entity];

        // заплатка, когда нет customized
        if (filtered.length === 0) {
            return;
        }

        const itemIndex = filtered.findIndex(item => item.id === itemId);
        filtered[itemIndex].photo_set = photoSet;
        state.filtered[entity] = [ ...filtered ];
    },

    //===================update item in filtered==================
    updateItemInFiltered: (state, { entity, item }) => {
        const filtered = state.filtered[entity];
        const itemIndex = filtered.findIndex(el => el.id === item.id);
        filtered[itemIndex] = item;
        state.filtered[entity] = [ ...filtered ];
    },

    //===================update photoSet of item in customized==================
    updatePhotosetOfItemInCustomized: (state, { entity, itemId, photoSet }) => {
        const customized = state.customized;
        const currentPageIndex = state.currentPage[entity];

        // взять items той страницы где обновляется элемент
        const pageItems = customized[entity][currentPageIndex];

        // заплатка, когда нет customized
        if (!pageItems) {
            return;
        }

        // его индекс
        const itemIndex = pageItems.findIndex(item => item.id === itemId);
        // обновить элемент
        pageItems[itemIndex].photo_set = photoSet;

        // обновить локальный customized
        customized[entity][currentPageIndex] = [ ...pageItems ];
        // обновить весь customized в state
        state.customized = { ...customized };
    },

    //===================update item in customized==================
    updateItemInCustomized: (state, { entity, item }) => {

        const customized = state.customized;
        const currentPageIndex = state.currentPage[entity];

        // взять items той страницы где обновляется элемент
        const pageItems = customized[entity][currentPageIndex];

        // заплатка, когда нет customized
        if (!pageItems) {
            return;
        }

        // его индекс
        const itemIndex = pageItems.findIndex(el => el.id === item.id);
        // обновить элемент
        pageItems[itemIndex] = item;

        // обновить локальный customized
        customized[entity][currentPageIndex] = [ ...pageItems ];
        // обновить весь customized в state
        state.customized = { ...customized };
    },

};
