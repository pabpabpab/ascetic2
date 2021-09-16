import setCookie from './functions/setCookie';

export default {

    // =======================скопировать оригинал в filtered=============================
    setFiltered: {
        root: true,
        handler ({ dispatch, commit }, { entity, data }) {
            commit('setFiltered', { entity, data });
        }
    },
    // ===============================разбить по страницам================================
    divideIntoPages: {
        root: true,
        handler ({dispatch, commit, getters}, {entity, customQuantityPerPage}) {
            //document.body.style.cssText='overflow: scroll;';

            if (customQuantityPerPage > 0) {
                setCookie(entity + 'QuantityPerPage', customQuantityPerPage, {'max-age': 31536000});
            }

            commit('setQuantityPerPage', {entity: entity, quantityPerPage: customQuantityPerPage});
            // указатель страниц на первую
            commit('setCurrentPage', {entity: entity, index: 0});
            // очистить массив items
            commit('clearCustomized', entity);
            // очистить css ссылок пагинации
            commit('clearPaginationLinkCssArr', entity);
            // =====<разбиваем по страницам в соответствии со state.quantityPerPage>=====
            let pageCounter = 0;
            let itemCounter = 0;
            const quantityPerPage = Number(getters.quantityPerPage(entity));
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
    },

    // ==========================пагинация: какую страницу items показать=======================
    showPage({ dispatch, commit, getters }, { entity, page }) {
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
    resetPaginationLinkCss({ commit, getters }, entity) {
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
    makePaginationLinksShot({ commit, getters }, entity) {
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

    //============================move item by drag and drop==============================
    moveItemInPaginated: {
        root: true,
        handler ({ commit }, { currentIndexInPage, newIndexInPage, operatedId, targetId, entity }) {
            commit('moveItemInFiltered', { operatedId, targetId, entity });
            commit('moveItemInCustomized', { currentIndexInPage, newIndexInPage, entity });
        }
    },

    //============================update photoSet of item in paginated==============================
    updatePhotosetOfItemInPaginated: {
        root: true,
        handler ({ commit }, { entity, itemId, photoSet }) {
            commit('updatePhotosetOfItemInFiltered', { entity, itemId, photoSet });
            commit('updatePhotosetOfItemInCustomized', { entity, itemId, photoSet });
        }
    },

    //==================================update item in paginated====================================
    updateItemInPaginated: {
        root: true,
        handler ({ commit }, { entity, item }) {
            commit('updateItemInFiltered', { entity, item });
            commit('updateItemInCustomized', { entity, item });
        }
    },

};



