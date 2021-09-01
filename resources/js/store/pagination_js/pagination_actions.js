export default {

    // =======================скопировать оригинал в filtered=============================
    setFiltered({ dispatch, commit }, { entity, data }) {
        commit('setFiltered', { entity, data });
    },

    // ===============================разбить по страницам================================
    divideIntoPages({ dispatch, commit, getters, state }, { entity, customQuantityPerPage }) {
        commit('setQuantityPerPage',  { entity: entity, quantityPerPage: customQuantityPerPage });
        // указатель страниц на первую
        commit('setCurrentPage',  { entity: entity, index: 0 });
        // очистить массив items
        commit('clearCustomized', entity);
        // очистить css ссылок пагинации
        commit('clearPaginationLinkCssArr', entity);
        // =====<разбиваем по страницам в соответствии со state.quantityPerPage>=====
        let pageCounter = 0;
        let itemCounter = 0;
        const quantityPerPage = getters.quantityPerPage(entity);
        //
        const inactiveCss = getters.inactivePaginationLinkCss;
        for (let i = 0; i < getters.filteredLength(entity); i += 1) {

            // страница заполнена
            if (itemCounter === quantityPerPage) {
                itemCounter = 0;
                pageCounter += 1;
            }

            // начинаем следующую страницу
            if (itemCounter === 0) {
                // создаем следующую страницу
                commit('pushNewPageIntoCustomized', entity);
                // сделать ссылку на эту страницу неактивной
                commit('pushIntoPaginationLinkCssArr', {entity: entity, cssClass: inactiveCss});
            }

            // пушим item в страницу
            commit('pushIntoCustomized', {
                entity: entity,
                pageCounter: pageCounter,
                item: getters.filtered(entity)[i]
            });

            itemCounter += 1;
        }
        // =====</разбиваем по страницам в соответствии со state.quantityPerPage>=====

        // установить активную ссылку
        commit('setPaginationLinkCssArrByIndex', {
            entity: entity,
            index: getters.currentPageIndex(entity),
            cssClass: getters.activePaginationLinkCss,
        });

        // сформировать активный кадр ссылок пагинации
        dispatch('makePaginationLinksShot', entity);
    },


    // ==========================пагинация: какую страницу items показать=======================
    showPage({ dispatch, commit, state, getters }, { entity, page }) {
        const customizedLength = getters.customizedLength(entity);
        let index;
        if (page < 0) {
            index = 0;
        } else if (page >= customizedLength) {
            index = customizedLength - 1;
        } else {
            index = page;
        }
        // установить указатель страницы на требуюмую
        commit('setCurrentPage', { entity, index });
        // сбросить css ссылок пагинации в неактивный css
        dispatch('resetPaginationLinkCss', entity);
        // установить активный css-стиль ссылки для актуальной страницы
        const cssClass = getters.activePaginationLinkCss;
        commit('setPaginationLinkCssArrByIndex', { entity, index, cssClass });
        // сформировать активный кадр ссылок пагинации
        dispatch('makePaginationLinksShot', entity);
    },

    // ========================сбросить css ссылок пагинации==============================
    resetPaginationLinkCss({ state, getters, commit }, entity) {
        const cssArrLength = getters.paginationLinkCssArrLength(entity);
        // очистить css ссылок пагинации
        commit('clearPaginationLinkCssArr', entity);
        // заполнить неактивным css
        const cssClass = getters.inactivePaginationLinkCss;
        for (let i = 0; i < cssArrLength; i += 1) {
            commit('pushIntoPaginationLinkCssArr', {entity, cssClass});
        }
    },

    // ========================сформировать активный кадр ссылок пагинации========================
    makePaginationLinksShot({ commit, state, getters, rootState }, entity) {
        const customizedLength = getters.customizedLength(entity);
        const currentPageNumber = getters.currentPageNumber(entity);
        const minimumPages = getters.minimumPagesForComplexPagination(entity);
        const wing = getters.wing;

        let border1;
        let border2;

        // очистить
        commit('clearPaginationLinksShot', entity);

        // =====================<если страниц мало>=========================
        if ((customizedLength < minimumPages) || (customizedLength <= wing * 3))  {
            border1 = 1;
            border2 = customizedLength;
            commit('fillPaginationLinkShot', { entity, border1, border2 });
            return;
        }

        // ==============<все что ниже это когда страниц много>=============

        // =========<currentPage находится в конце блока пагинации>=========
        if ((currentPageNumber + wing + 2) > customizedLength) {
            border1 = ((currentPageNumber - wing) > (customizedLength - wing * 2))
                ? (customizedLength - wing * 2)
                : (currentPageNumber - wing);
            border2 = customizedLength;
            commit('fillPaginationLinkShot', { entity, border1, border2 });
            return;
        }

        // =========<currentPage находится в начале блока пагинации>========
        if (currentPageNumber - wing - 2 < 1) {
            border1 = 1;
            border2 = ((currentPageNumber + wing) < (wing * 2))
                ? (wing * 2)
                : (currentPageNumber + wing);

            // заплатка
            if (currentPageNumber === 1) {
                if (wing === 1) border2 = 3;
                if (wing === 0) border2 = 1;
            }

            commit('fillPaginationLinkShot', { entity, border1, border2 });
            return;
        }

        // ========<currentPage находится в середине блока пагинации>=======
        border1 = currentPageNumber - wing;
        border2 = currentPageNumber + wing;
        commit('fillPaginationLinkShot', { entity, border1, border2 });
    },
};




/*
export default {

    setFiltered({ dispatch, commit, state, getters }, { moduleName, data }) {

    },



        // ===============================разбить по страницам================================
    divideIntoPages({ dispatch, commit, state, getters, rootState, rootGetters }, { moduleName, customQuantityPerPage }) {
        commit('setQuantityPerPage',  { rootState, moduleName, quantityPerPage: customQuantityPerPage });
        // указатель страниц на первую
        commit('setCurrentPage', 0);
        // очистить массив items
        commit('clearCustomized');
        // очистить css ссылок пагинации
        commit('clearPaginationLinkCssArr');
        // =====<разбиваем по страницам в соответствии со state.quantityPerPage>=====
        let pageCounter = 0;
        let itemCounter = 0;
        //const quantityPerPage = getters.quantityPerPage(moduleName);
        //const quantityPerPage = rootState[moduleName]['quantityPerPage'];
        //const quantityPerPage = rootGetters[moduleName]['quantityPerPage'];
        const quantityPerPage = rootGetters['users/quantityPerPage'];
        console.log(quantityPerPage);
        //console.log(state);
        //
        const inactiveCss = getters.inactivePaginationLinkCss(moduleName);
        for (let i = 0; i < getters.filteredLength(moduleName); i += 1) {

            // страница заполнена
            if (itemCounter === quantityPerPage) {
                itemCounter = 0;
                pageCounter += 1;
            }

            // начинаем следующую страницу
            if (itemCounter === 0) {
                // создаем следующую страницу
                state.customized.push([]);
                // сделать ссылку на эту страницу неактивной
                commit('pushIntoPaginationLinkCssArr', inactiveCss);
            }

            // пушим user в страницу
            commit('pushIntoCustomized', {
                pageCounter,
                item: getters.filtered(moduleName)[i]
            });

            itemCounter += 1;
        }
        // =====</разбиваем по страницам в соответствии со state.quantityPerPage>=====

        // установить активную ссылку
        commit('setPaginationLinkCssArrByIndex', {
            index: getters.currentPageIndex,
            cssClass: getters.activePaginationLinkCss(moduleName),
        });

        // сформировать активный кадр ссылок пагинации
        dispatch('makePaginationLinksShot', moduleName);
    },


    // ==========================пагинация: какую страницу items показать=======================
    showPage({ dispatch, commit, state, getters }, { moduleName, page }) {
        const { customizedLength } = getters;
        let index;
        if (page < 0) {
            index = 0;
        } else if (page >= customizedLength) {
            index = customizedLength - 1;
        } else {
            index = page;
        }
        // установить указатель страницы на требуюмую
        commit('setCurrentPage', index);
        // сбросить css ссылок пагинации в неактивный css
        dispatch('resetPaginationLinkCss', moduleName);
        // установить активный css-стиль ссылки для актуальной страницы
        const cssClass = getters.activePaginationLinkCss(moduleName);
        commit('setPaginationLinkCssArrByIndex', { index, cssClass });
        // сформировать активный кадр ссылок пагинации
        dispatch('makePaginationLinksShot', moduleName);
    },

    // ========================сбросить css ссылок пагинации==============================
    resetPaginationLinkCss({ state, getters, commit }, moduleName) {
        const cssArrLength = getters.paginationLinkCssArrLength;
        // очистить css ссылок пагинации
        commit('clearPaginationLinkCssArr');
        // заполнить неактивным css
        const cssClass = getters.inactivePaginationLinkCss(moduleName);
        for (let i = 0; i < cssArrLength; i += 1) {
            commit('pushIntoPaginationLinkCssArr', cssClass);
        }
    },

    // ========================сформировать активный кадр ссылок пагинации========================
    makePaginationLinksShot({ commit, state, getters, rootState }, moduleName) {
        const {
            customizedLength,
            currentPageNumber,
            minimumPagesForComplexPagination,
            wing,
        } = getters;

        const _minimumPages = minimumPagesForComplexPagination(moduleName);
        const _wing = wing(moduleName);

        let border1;
        let border2;

        // очистить
        commit('clearPaginationLinksShot');

        // =====================<если страниц мало>=========================
        if ((customizedLength < _minimumPages) || (customizedLength <= _wing * 3))  {
            border1 = 1;
            border2 = customizedLength;
            commit('fillPaginationLinkShot', { border1, border2 });
            return;
        }

        // ==============<все что ниже это когда страниц много>=============

        // =========<currentPage находится в конце блока пагинации>=========
        if ((currentPageNumber + _wing + 2) > customizedLength) {
            border1 = ((currentPageNumber - _wing) > (customizedLength - _wing * 2))
                ? (customizedLength - _wing * 2)
                : (currentPageNumber - _wing);
            border2 = customizedLength;
            commit('fillPaginationLinkShot', { border1, border2 });
            return;
        }

        // =========<currentPage находится в начале блока пагинации>========
        if (currentPageNumber - _wing - 2 < 1) {
            border1 = 1;
            border2 = ((currentPageNumber + _wing) < (_wing * 2))
                ? (_wing * 2)
                : (currentPageNumber + _wing);

            // заплатка
            if (currentPageNumber === 1) {
                if (_wing === 1) border2 = 3;
                if (_wing === 0) border2 = 1;
            }

            commit('fillPaginationLinkShot', { border1, border2 });
            return;
        }

        // ========<currentPage находится в середине блока пагинации>=======
        border1 = currentPageNumber - _wing;
        border2 = currentPageNumber + _wing;
        commit('fillPaginationLinkShot', { border1, border2 });
    },
};

 */











/*
export default {
    // ===============================разбить по страницам================================
    divideIntoPages({ dispatch, commit, state, getters, rootState, rootGetters }, { moduleName, customQuantityPerPage }) {
        commit('setQuantityPerPage',  { rootState, moduleName, quantityPerPage: customQuantityPerPage });
        // указатель страниц на первую
        commit('setCurrentPage', { rootState, moduleName, index: 0 });
        // очистить массив items
        commit('clearCustomized', { rootState, moduleName });
        // очистить css ссылок пагинации
        commit('clearPaginationLinkCssArr', { rootState, moduleName });
        // =====<разбиваем по страницам в соответствии со state.quantityPerPage>=====
        let pageCounter = 0;
        let itemCounter = 0;
        const quantityPerPage = getters.quantityPerPage(moduleName);
        //
        const inactiveCss = getters.inactivePaginationLinkCss(moduleName);
        for (let i = 0; i < getters.filteredLength(moduleName); i += 1) {

            // страница заполнена
            if (itemCounter === quantityPerPage) {
                itemCounter = 0;
                pageCounter += 1;
            }

            // начинаем следующую страницу
            if (itemCounter === 0) {
                // создаем следующую страницу
                rootState[moduleName]['customized'].push([]);
                // сделать ссылку на эту страницу неактивной
                commit('pushIntoPaginationLinkCssArr', { rootState, moduleName, cssClass: inactiveCss });
            }

            // пушим user в страницу
            commit('pushIntoCustomized', {
                rootState,
                moduleName,
                pageCounter,
                item: getters.filtered(moduleName)[i],
                // item: rootState[moduleName]['filtered'][i]
            });

            itemCounter += 1;
        }
        // =====</разбиваем по страницам в соответствии со state.quantityPerPage>=====
        // установить активную ссылку
        commit('setPaginationLinkCssArrByIndex', {
            rootState,
            moduleName,
            index: getters.currentPageIndex(moduleName),
            cssClass: getters.activePaginationLinkCss(moduleName),
        });
        // сформировать активный кадр ссылок пагинации
        dispatch('makePaginationLinksShot', moduleName);
    },


    // ==========================пагинация: какую страницу items показать=======================
    showPage({ dispatch, commit, state, getters, rootState }, { moduleName, page }) {
        const { customizedLength } = getters;
        let index;
        if (page < 0) {
            index = 0;
        } else if (page >= customizedLength(moduleName)) {
            index = customizedLength(moduleName) - 1;
        } else {
            index = page;
        }
        // установить указатель страницы на требуюмую
        commit('setCurrentPage', { rootState, moduleName, index });
        // сбросить css ссылок пагинации
        dispatch('resetPaginationLinkCss', moduleName);
        // установить активный css-стиль ссылки для актуальной страницы
        const cssClass = getters.activePaginationLinkCss(moduleName);
        commit('setPaginationLinkCssArrByIndex', { rootState, moduleName, index, cssClass });
        // сформировать активный кадр ссылок пагинации
        dispatch('makePaginationLinksShot', moduleName);
    },

    // ========================сбросить css ссылок пагинации==============================
    resetPaginationLinkCss({ state, getters, commit, rootState }, moduleName) {
        const paginationCssArrLength = getters.paginationLinkCssArrLength(moduleName);
        // очистить css ссылок пагинации
        commit('clearPaginationLinkCssArr', { rootState, moduleName });
        // заполнить неактивным css
        const cssClass = getters.inactivePaginationLinkCss(moduleName);
        for (let i = 0; i < paginationCssArrLength; i += 1) {
            commit('pushIntoPaginationLinkCssArr', { rootState, moduleName, cssClass });
        }
    },

    // ========================сформировать активный кадр ссылок пагинации========================
    makePaginationLinksShot({ commit, state, getters, rootState }, moduleName) {
        const {
            customizedLength,
            currentPageNumber,
            minimumPagesForComplexPagination,
            wing,
        } = getters;

        const _customizedLength = customizedLength(moduleName);
        const _currentPageNumber = currentPageNumber(moduleName);
        const _minimumPagesForComplexPagination = minimumPagesForComplexPagination(moduleName);
        const _wing = wing(moduleName);

        let border1;
        let border2;

        // очистить
        commit('clearPaginationLinksShot', { rootState, moduleName });

        // =====================<если страниц мало>=========================
        if ((_customizedLength < _minimumPagesForComplexPagination) || (_customizedLength <= _wing * 3))  {
            border1 = 1;
            border2 = _customizedLength;
            commit('fillPaginationLinkShot', { rootState, moduleName, border1, border2 });
            return;
        }

        // ==============<все что ниже это когда страниц много>=============

        // =========<currentPage находится в конце блока пагинации>=========
        if ((_currentPageNumber + _wing + 2) > _customizedLength) {
            border1 = ((_currentPageNumber - _wing) > (_customizedLength - _wing * 2))
                ? (_customizedLength - _wing * 2)
                : (_currentPageNumber - _wing);
            border2 = _customizedLength;
            commit('fillPaginationLinkShot', { rootState, moduleName, border1, border2 });
            return;
        }

        // =========<currentPage находится в начале блока пагинации>========
        if (_currentPageNumber - _wing - 2 < 1) {
            border1 = 1;
            border2 = ((_currentPageNumber + _wing) < (_wing * 2))
                ? (_wing * 2)
                : (_currentPageNumber + _wing);

            // заплатка
            if (_currentPageNumber === 1) {
                if (_wing === 1) border2 = 3;
                if (_wing === 0) border2 = 1;
            }

            commit('fillPaginationLinkShot', { rootState, moduleName, border1, border2 });
            return;
        }

        // ========<currentPage находится в середине блока пагинации>=======
        border1 = _currentPageNumber - _wing;
        border2 = _currentPageNumber + _wing;
        commit('fillPaginationLinkShot', { rootState, moduleName, border1, border2 });
    },
};

 */
