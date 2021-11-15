import categoryValidation from './functions/categoryValidation';

export default {
    // eslint-disable-next-line no-unused-vars
    async loadSingleCategory({dispatch, commit, state}, { entity, categoryId }) {
        const singleCategoryUrl = state.singleCategoryUrl[entity] + categoryId;
        dispatch('getJson', singleCategoryUrl, { root: true })
            .then((data) => {
                commit('setSingleCategoryFromServer', data);
            });
    },

    async getCategoriesCount({ dispatch, commit, state }, entity) {
        const url = state.categoriesCountUrl[entity];
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setCategoriesCountFromServer', data);
        });
    },

   async loadCategories({ dispatch, commit, state }, entity) {
        dispatch('showWaitingScreen', null, { root: true });
        const url = state.categoriesUrl[entity];
        dispatch('getJson', url, { root: true })
            .then((data) => {
                const categoriesBook = {
                    categories: data?.categories,
                    materials: data,
                    colors: data,
                }
                const categories = categoriesBook[entity];
                commit('setCategories', { entity: entity, data: categories });
                if (entity === 'categories') {
                    commit('setSeoData', data.seo);
                }
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, { root: true });
            });
   },

};

