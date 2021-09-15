import productValidation from './functions/productValidation';
import thatRouter from "../../router";

export default {
    // eslint-disable-next-line no-unused-vars
    loadSingleProduct({dispatch, commit, state}, productId) {
        const url = state.url['singleProduct'] + productId;
        dispatch('getJson', url, { root: true })
            .then((data) => {
                // console.log(data);
                commit('setSingleProductFromServer', data);
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
            // console.log(data);
            const products = {
                Products: data,
                ProductsByCategory: data.products
            }
            commit('setListHeader', { route, data });
            commit('setProducts', products[route.name]);
            dispatch('setFiltered', { entity: 'products', data: products[route.name] }, { root: true }).then(() => {
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


    // фронт-валидация при вводе (type-in)
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


    // фронт-валидация, pop-up и type-in сообщения
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
