import categoryValidation from './functions/categoryValidation';

export default {
    // eslint-disable-next-line no-unused-vars
    async loadSingleCategory({dispatch, commit, getters}, { entity, categoryId }) {
        const singleCategoryUrl = getters.singleCategoryUrl(entity) + categoryId;
        dispatch('getJson', singleCategoryUrl, { root: true })
            .then((data) => {
                commit('setSingleCategoryFromServer', data);
            });
    },


    async getCategoriesCount({ dispatch, commit, getters }, entity) {
        const url = getters.categoriesCountUrl(entity);
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setCategoriesCountFromServer', data);
        });
    },


   async loadCategories({ dispatch, commit, getters }, entity) {
        const url = getters.categoriesUrl(entity);
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setCategories', { entity, data });
            dispatch('hideWaitingScreen', null, { root: true });
        });
   },

    // фронт-валидация при вводе (type-in)
    typeinValidation({ dispatch, commit, getters, rootGetters }, { entity, category }) {
        dispatch('cleanPopupErrors', null, { root: true });
        if (!rootGetters.typeinValidationRequired) {
            return;
        }
        const categories = getters.categories[entity];
        const { typeinErrors } = categoryValidation(category, categories);
        commit('setTypeinErrors', typeinErrors, { root: true });
        commit('setAlarmingInputs', typeinErrors, { root: true });
    },

    // обнулить ошибки
    async cleanValidationErrors({dispatch, commit}) {
        dispatch('cleanPopupErrors', null, { root: true });
        commit('resetAlarmingInputs', null, { root: true });
        commit('resetTypeinErrors', null, { root: true });
        commit('disableTypeinValidation', null, { root: true });
    },

    // фронт-валидация, pop-up и type-in сообщения
    async _frontValidation({ dispatch, commit, getters }, { entity, category }) {
        const categories = getters.categories[entity];
        const { popupErrors, typeinErrors } = categoryValidation(category, categories);
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

