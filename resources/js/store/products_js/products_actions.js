import productValidation from './functions/productValidation';
import thatRouter from './../../router/index';

export default {
    // eslint-disable-next-line no-unused-vars
    loadSingleProduct({dispatch, commit, getters, state}, productId) {
        const singleProductUrl = getters.singleProductUrl + productId;
        dispatch('getJson', singleProductUrl, { root: true })
            .then((data) => {
                // console.log(data);
                commit('setSingleProductFromServer', data);
                dispatch('hideWaitingScreen', null, { root: true });
            });
    },

    async getProductsCount({ dispatch, commit, getters }) {
        const url = getters.productsCountUrl;
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setProductsCountFromServer', data);
        });
    },

    async loadProducts({ dispatch, commit, getters }) {
        const url = getters.productsUrl;
        dispatch('getJson', url, { root: true }).then((data) => {
            //console.log(data);
            commit('setProducts', data);
            dispatch('hideWaitingScreen', null, { root: true });
        });
    },

    // фронт-валидация при вводе (type-in)
    typeinValidation({ dispatch, commit, getters, rootGetters }, product) {
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
    async _frontValidation({ dispatch, commit, getters }, product) {
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
