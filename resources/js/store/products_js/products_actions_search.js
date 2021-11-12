import priceFilterCore from './functions/priceFilterCore';
import categoryFilterCore from './functions/categoryFilterCore';
import materialFilterCore from './functions/materialFilterCore';
import colorFilterCore from './functions/colorFilterCore';

export default {

    showProductsFilters({commit}) {
        commit('setVisibility', { componentName: 'productsFilters', value: true });
        document.body.style.cssText='overflow-y:scroll;';
    },

    closeProductsFilters({commit}) {
        commit('setVisibility', { componentName: 'productsFilters', value: false });
        document.body.style.cssText='overflow-y:auto;';
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
        commit('setSearchObject', state.initialSearch);
    },

    makeSearch({dispatch, getters, state}, searchObject) {
        let filtered = [ ...getters.products ];
        filtered = priceFilterCore(filtered, searchObject);

        if (searchObject.category_ids.length > 0) {
            filtered = categoryFilterCore(filtered, searchObject);
        }
        if (searchObject.material_ids.length > 0) {
            filtered = materialFilterCore(filtered, searchObject);
        }
        if (searchObject.color_ids.length > 0) {
            filtered = colorFilterCore(filtered, searchObject);
        }

        dispatch('doSort', {mode: state.sortingMode, data: filtered, initiator: 'search'})
            .then((data) => {
                filtered = [ ...data ];
                dispatch('paginateProducts', filtered);
            })
            .then(() => {
                const txt = `Показано ${filtered.length}.`
                dispatch('showAbsoluteFlashFiltersMessage', {text: txt, sec: 0.5}, { root: true });
            });
    },
}
