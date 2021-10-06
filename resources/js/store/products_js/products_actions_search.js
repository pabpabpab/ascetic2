import priceFilterCore from './functions/priceFilterCore';
import categoryFilterCore from './functions/categoryFilterCore';
import materialFilterCore from './functions/materialFilterCore';
import colorFilterCore from './functions/colorFilterCore';

export default {

    showProductsFilters({commit}) {
        commit('setShowProductsFilters', true);
        commit('setEnabledFiltersHidingCss', false);
        document.body.style.cssText='overflow-y:scroll;';
    },

    closeProductsFilters({commit}) {
        commit('setEnabledFiltersHidingCss', true);
        setTimeout(() => {
            commit('setShowProductsFilters', false);
        }, 500);
        document.body.style.cssText='overflow-y:auto;';
    },

    setShowProductsFilters({commit}, value) {
        commit('setShowProductsFilters', value);
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

        dispatch('doSort', {mode: state.sortingMode, data: filtered}).then((data) => {
            filtered = [ ...data ];
            dispatch('setFiltered', { entity: 'products', data: filtered }, { root: true });
        }).then(() => {
            dispatch('divideIntoPages',  {
                entity: 'products',
                customQuantityPerPage: 0
            }, { root: true });
            const txt = `Показано ${filtered.length}.`
            dispatch('showAbsoluteFlashFiltersMessage', {text: txt, sec: 1}, { root: true });
        });
    },
}
