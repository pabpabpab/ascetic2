import priceFilterCore from './functions/priceFilterCore';
import categoryFilterCore from './functions/categoryFilterCore';
import materialFilterCore from './functions/materialFilterCore';
import colorFilterCore from './functions/colorFilterCore';

export default {

    showProductsFilters({commit}) {
        commit('setVisibility', { componentName: 'productsFilters', value: true });
    },

    closeProductsFilters({commit}) {
        commit('setVisibility', { componentName: 'productsFilters', value: false });
    },

    setProductsFiltersVisibility({commit}, value) {
        commit('setVisibility', { componentName: 'productsFilters', value: value });
    },

    setSearchObject({commit}, data) {
        commit('setSearchObject', data);
    },

    setSearchTotalParameters({commit}, data) {
        commit('setSearchTotalParameters', data);
    },

    resetSearchObject({commit, state}) {
        commit('resetSearchObject');
    },

    async makeSearch({dispatch, getters, state}, searchObject) {
        let filtered = [ ...getters.products ];
        filtered = await dispatch('getFilteredBySearch', {data: filtered, searchObject: searchObject});
        dispatch('sortProducts', {mode: state.sortingMode, data: filtered})
            .then((sorted) => {
                dispatch('paginateProducts', sorted);
            })
            .then(() => {
                const txt = `Показано ${filtered.length}.`
                dispatch('showAbsoluteFlashFiltersMessage', {text: txt, sec: 0.7}, { root: true });
            });
    },

    async getFilteredBySearch(context, {data, searchObject}) {
        let filtered = [ ...data ];
        if (searchObject.minPrice > 0 || searchObject.maxPrice > 0) {
            filtered = priceFilterCore(filtered, searchObject);
        }
        if (searchObject.category_ids.length > 0) {
            filtered = categoryFilterCore(filtered, searchObject);
        }
        if (searchObject.material_ids.length > 0) {
            filtered = materialFilterCore(filtered, searchObject);
        }
        if (searchObject.color_ids.length > 0) {
            filtered = colorFilterCore(filtered, searchObject);
        }
        return [...filtered];
    }
}
