export default {
    showCategoriesWithReload({dispatch, commit}, route) {
        const entity = route.params.entity;
        commit('setCategories', { entity: entity, data: [] });
        dispatch('showCategories', entity);
    },

    showCategories({dispatch, commit, getters}, entity) {
        if (getters.reloadAllCategoriesCommand) {
            commit('setReloadAllCategoriesCommand', false);
            commit('resetAllCategories');
        }
        if (getters.categories[entity].length < 2) {
            dispatch('loadCategories', entity);
            return;
        }
        commit('setCategories', { entity: entity, data: [...getters.categories[entity]] });
    },

    loadCategories({ dispatch, commit, state }, entity) {
        const url = state.categoriesUrl[entity];
        dispatch('getJsonWithWaitingScreen', url, { root: true })
            .then((data) => {
                //console.log(data);
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
                commit('setCategoriesCount', { entity: entity, val: categories.length });
            });
    },
}
