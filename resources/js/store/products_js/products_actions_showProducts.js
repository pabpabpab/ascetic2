// отмечено звездочкой (*) функционал для "показать прежнюю paginated страницу"
export default {

    showProductsWithReload({dispatch, commit}, route = {name: 'Products'}) {
        commit('setNeedReload', { entity: 'products', value: true });
        dispatch('showProducts', route);
    },

    async showProducts({dispatch, commit, getters}, route = {name: 'Products'}) {
        commit('setVisibility', { componentName: 'productQuickViewManager', value: false });
        if (getters.productsLength < 2 || getters.needReload('products')) {
            dispatch('loadProducts', route)
                .then(({products, route}) => {
                    commit('setNeedReload', { entity: 'products', value: false });
                    //commit('setPreviousRouteName', ''); // *
                    dispatch('_showLoadedProducts', route);
                });
            return;
        }

        dispatch('_showLoadedProducts', route);
    },

    async _showLoadedProducts({dispatch, commit, getters}, route) {
        commit('setListHeader', route);
        /*
        if (!await dispatch('_needNewPagination', route)) { // *
            return;
        }*/
        const filtered = await dispatch('getFiltered', route);
        dispatch('sortAndPaginateProducts', filtered);
        //commit('setPreviousRouteName', route.name); // *
    },

    loadProducts({ dispatch, commit, state }, route = { name: 'Products' }) {
        dispatch('resetSearchObject');

        const params = route.params;
        const url = {
            Products: state.url['products'],
            ProductsByCategory: state.url['productsByCategory'] + params?.categoryEntity + '/' + params?.slug,
        };

        return dispatch('getJsonWithWaitingScreen', url[route.name], { root: true })
            .then((data) => {
                commit('setProducts', data.products);
                commit('setSeoData', data.seo);
                if (route.name === 'ProductsByCategory') {
                    route.params.categoryId = data.category.id;
                    route.params.categoryName = data.category.name;
                }
                return {products: data.products, route: route};
            });
    },

    async getFiltered({dispatch, commit, getters, state}, route) {
        const filtered = await dispatch('getFilteredProductsByRoute', route);
        if (route.name === 'ProductsByCategory') {
            commit('resetSearchObject');
        }
        return await dispatch('getFilteredBySearch', {
            data: filtered,
            searchObject: {...getters.stateSearchObject}
        });
    },

    async getFilteredProductsByRoute({getters}, route) {
        if (route.name === 'ProductsByCategory') {
            const gettersBook = {
                category: 'getProductsByCategory',
                material: 'getProductsByMaterial',
                color: 'getProductsByColor',
            }
            const getterName = gettersBook[route.params.categoryEntity];
            return [ ...getters[getterName](route.params?.categoryId ?? 0) ];
        }
        return [ ...getters['allProducts'] ];
    },


    paginateProducts({ dispatch }, data) {
        dispatch('setFiltered', { entity: 'products', data: data }, { root: true })
            .then(() => {
                dispatch('divideIntoPages',  {
                    entity: 'products',
                    customQuantityPerPage: 0
                }, { root: true });
            });
    },

    sortAndPaginateProducts({ dispatch, getters }, data) {
        dispatch('sortProducts', {mode: getters.sortingMode, data: data})
            .then((sorted) => {
                dispatch('paginateProducts', sorted);
            });
    },

    async _needNewPagination({getters, rootGetters}, route) { // *
        if (route.name !== 'Products') {
            return true;
        }
        if (getters.previousRouteName !== 'Products') {
            return true;
        }
        const currentPageIndex = rootGetters['pagination/currentPageIndex']('products');
        if (currentPageIndex === -1) {
            return true;
        }
        return false;
    },
}
