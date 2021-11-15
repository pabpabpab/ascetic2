export default {

    showTrashedProductsWithReload({dispatch, commit}, route = {name: 'TrashedProducts'}) {
        commit('setNeedReload', { entity: 'trashedProducts', value: true });
        dispatch('showTrashedProducts');
    },

    showTrashedProducts({dispatch, commit, getters, rootGetters}) {
        commit('setVisibility', { componentName: 'productQuickViewManager', value: false });
        commit('setListHeader', {name: 'TrashedProducts'});

        if (getters.trashedProductsLength === 0 || getters.needReload('trashedProducts')) {
            dispatch('loadTrashedProducts')
                .then((data) => {
                    commit('setNeedReload', { entity: 'trashedProducts', value: false });
                    dispatch('paginateTrashedProducts', data);
                });
            return;
        }

        const currentPageIndex = rootGetters['pagination/currentPageIndex']('trashedProducts');
        if (currentPageIndex === -1) {
            dispatch('paginateTrashedProducts', getters.trashedProducts);
        }
    },

    loadTrashedProducts({ dispatch, commit, state }) {
        dispatch('showWaitingScreen', null, { root: true });
        return dispatch('getJson', state.url['trashedProducts'], { root: true })
            .then((data) => {
                const products = data.products;
                commit('setTrashedProducts', products);
                return products;
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, { root: true });
            });
    },

    paginateTrashedProducts({ dispatch }, data) {
        dispatch('setFiltered', { entity: 'trashedProducts', data: data }, { root: true })
            .then(() => {
                dispatch('divideIntoPages',  {
                    entity: 'trashedProducts',
                    customQuantityPerPage: 0
                }, { root: true });
            });
    }
}
