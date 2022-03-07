import priceFilterCore from './functions/priceFilterCore';
import categoryFilterCore from './functions/categoryFilterCore';
import materialFilterCore from './functions/materialFilterCore';
import colorFilterCore from './functions/colorFilterCore';

export default {

    showProductsFilters({commit}) {
        window.document.body.style.overflow = 'hidden';
        commit('setVisibility', { componentName: 'productsFilters', value: true });
    },

    closeProductsFilters({commit}) {
        window.document.body.style.overflow = 'auto';
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
    },



    makeSearchByLotNumber({dispatch, commit, getters, state}, productId) {
        commit('resetSearchObject');

        let products = [ ...getters.products ];
        const filtered = products.filter((el) => {
            const id = Number(el.id);
            return id === productId;
        });
        if (filtered.length === 0) {
            const txt = `Ничего не найдено`
            dispatch('showAbsoluteFlashFiltersMessage', {text: txt, sec: 1.5}, { root: true });
            dispatch('paginateProducts', products);
        } else {
            const txt = `Показан товар номер ${productId}`
            dispatch('showAbsoluteFlashFiltersMessage', {text: txt, sec: 3.5}, { root: true });
            dispatch('paginateProducts', filtered);
        }
    },

}
