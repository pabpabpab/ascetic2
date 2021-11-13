export default {

    showTrashedProducts({dispatch, commit, getters, rootGetters}) {
        commit('setVisibility', { componentName: 'productQuickViewManager', value: false });
        commit('setListHeader', {name: 'TrashedProducts'});

        if (getters.trashedProductsLength > 0 && !getters.needReload('trashedProducts')) {
            const currentPageIndex = rootGetters['pagination/currentPageIndex']('trashedProducts');
            if (currentPageIndex === -1) {
                dispatch('paginateTrashedProducts', getters.trashedProducts);
            }
            return;
        }

        dispatch('loadTrashedProducts');
    },

    loadTrashedProducts({ dispatch, commit, state }) {
        dispatch('showWaitingScreen', null, { root: true });
        dispatch('getJson', state.url['trashedProducts'], { root: true })
            .then((data) => {
                const products = data.products;
                commit('setTrashedProducts', products);
                dispatch('paginateTrashedProducts', products);
                commit('setNeedReload', { entity: 'trashedProducts', value: false });
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
