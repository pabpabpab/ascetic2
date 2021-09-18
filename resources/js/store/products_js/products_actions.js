import productValidation from './functions/productValidation';
// import thatRouter from "../../router";

export default {
    loadSingleProduct({dispatch, commit, state}, productId) {
        const url = state.url['singleProduct'] + productId;
        dispatch('getJson', url, { root: true })
            .then((data) => {
                //console.log(data);
                commit('setSingleProductFromServer', data);
                commit('setPhotoSeoData', data.photoSeo);
                dispatch('hideWaitingScreen', null, { root: true });
            });
    },

    async getProductsCount({ dispatch, commit, state }) {
        const url = state.url['productsCount'];
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setProductsCountFromServer', data);
        });
    },



    async loadProducts({ dispatch, commit, state }, route) {
        // console.log(route);
        if (!route) {
            route = {
                name: 'Products',
                params: {which: 'active'}
            };
        }

        const params = route.params;

        const url = {
            Products: state.url['products'] + params.which,
            ProductsByCategory: state.url['productsByCategory'] + params.categoryEntity + '/' + params.slug,
        };

        dispatch('getJson', url[route.name], { root: true }).then((data) => {
            //console.log(data);
            const productsBook = {
                Products: data?.products,
                ProductsByCategory: data?.category?.products
            }
            const products = productsBook[route.name];

            commit('setListHeader', { route: route, data: data });
            commit('setProducts', products);
            commit('setSeoData', data.seo);
            dispatch('setFiltered', { entity: 'products', data: products }, { root: true }).then(() => {
                // ниже передаю параметр quantityPerPage = 0 для совместимости,
                // так как данный action может вызываться из других компонентов с параметром quantityPerPage
                dispatch('divideIntoPages',  {
                    entity: 'products',
                    customQuantityPerPage: 0
                }, { root: true });
                dispatch('hideWaitingScreen', null, { root: true });
            });
        });
    },


    // фронт-валидация при вводе (type-in валидация)
    typeinValidation({ dispatch, commit, rootGetters }, product) {
        dispatch('cleanPopupErrors', null, { root: true });
        if (!rootGetters.typeinValidationRequired) {
            return;
        }
        const { typeinErrors } = productValidation(product);
        commit('setTypeinErrors', typeinErrors, { root: true });
        commit('setAlarmingInputs', typeinErrors, { root: true });
    },

    async cleanValidationErrors({dispatch, commit}) {
        dispatch('cleanPopupErrors', null, { root: true });
        commit('resetAlarmingInputs', null, { root: true });
        commit('resetTypeinErrors', null, { root: true });
        commit('disableTypeinValidation', null, { root: true });
    },


    // фронт-валидация, pop-up и type-in сообщения об ошибках
    async _frontValidation({ dispatch, commit }, product) {
        const { popupErrors, typeinErrors } = productValidation(product);
        if (popupErrors) {
            dispatch('showPopupErrorsBox', popupErrors, { root: true });
            commit('enableTypeinValidation', null, { root: true });
            commit('setAlarmingInputs', popupErrors, { root: true });
            commit('setTypeinErrors', typeinErrors, { root: true });
            return false;
        }
        return true;
    },

};
