export default {
    showProducts({dispatch, commit, getters}, route) {
        commit('setVisibility', { componentName: 'productQuickViewManager', value: false });

        if (getters.productsLength > 1 && !getters.needReload('products')) {
            commit('setListHeader', route);
            dispatch('getFilteredProductsByRoute', route)
                .then((data) => {
                    dispatch('paginateProducts', data);
                });
            return;
        }

        dispatch('loadProducts', route);
    },


    loadProducts({ dispatch, commit, state }, route = { name: 'Products' }) {
        dispatch('showWaitingScreen', null, { root: true });
        dispatch('resetSearchObject');

        const params = route.params;
        const url = {
            Products: state.url['products'],
            ProductsByCategory: state.url['productsByCategory'] + params?.categoryEntity + '/' + params?.slug,
        };

        dispatch('getJson', url[route.name], { root: true })
            .then((data) => {
                commit('setProducts', data.products);
                commit('setSeoData', data.seo);
                commit('setNeedReload', { entity: 'products', value: false });

                if (route.name === 'ProductsByCategory') {
                    route.params.categoryId = data.category.id;
                    route.params.categoryName = data.category.name;
                }
                dispatch('showProducts', route);
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
}

