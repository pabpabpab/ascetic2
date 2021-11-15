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
                    commit('setPreviousRouteName', ''); // *
                    dispatch('_showLoadedProducts', route);
                });
            return;
        }

        dispatch('_showLoadedProducts', route);
    },


    async _showLoadedProducts({dispatch, commit, getters}, route) {
        commit('setListHeader', route);
        if (!await dispatch('_needNewPagination', route)) { // *
            return;
        }
        dispatch('getFilteredProductsByRoute', route)
            .then((data) => {
                dispatch('paginateProducts', data);
            });
        commit('setPreviousRouteName', route.name); // *
    },


    loadProducts({ dispatch, commit, state }, route = { name: 'Products' }) {
        dispatch('showWaitingScreen', null, { root: true });
        dispatch('resetSearchObject');

        const params = route.params;
        const url = {
            Products: state.url['products'],
            ProductsByCategory: state.url['productsByCategory'] + params?.categoryEntity + '/' + params?.slug,
        };

        return dispatch('getJson', url[route.name], { root: true })
            .then((data) => {
                commit('setProducts', data.products);
                commit('setSeoData', data.seo);
                if (route.name === 'ProductsByCategory') {
                    route.params.categoryId = data.category.id;
                    route.params.categoryName = data.category.name;
                }
                return {products: data.products, route: route};
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, { root: true });
            });
    },

    getFilteredProductsByRoute({getters}, route) {
        const gettersBook = {
            Products: {
                all: 'allProducts'
            },
            ProductsByCategory: {
                category: 'getProductsByCategory',
                material: 'getProductsByMaterial',
                color: 'getProductsByColor',
            }
        }
        const getterName = gettersBook[route.name][route.params?.categoryEntity ?? 'all'];
        return [ ...getters[getterName](route.params?.categoryId ?? 0) ];
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
