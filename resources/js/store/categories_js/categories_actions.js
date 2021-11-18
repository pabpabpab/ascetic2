import categoryValidation from './functions/categoryValidation';

export default {
    // eslint-disable-next-line no-unused-vars
    loadSingleCategory({dispatch, commit, state}, { entity, categoryId }) {
        const singleCategoryUrl = state.singleCategoryUrl[entity] + categoryId;
        dispatch('getJsonWithWaitingScreen', singleCategoryUrl, { root: true })
            .then((data) => {
                commit('setSingleCategoryFromServer', data);
            });
    },

    getCategoriesCount({ dispatch, commit, state }, entity) {
        const url = state.categoriesCountUrl[entity];
        dispatch('getJsonWithWaitingScreen', url, { root: true }).then((data) => {
            commit('setCategoriesCountFromServer', data);
        });
    },

};

