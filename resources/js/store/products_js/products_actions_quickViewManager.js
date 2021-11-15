export default {

    showProductQuickViewManager({ dispatch, commit }, productId) {
        commit('setSingleProductFromServer', {});
        dispatch('loadSingleProduct', productId).then(() => {
            commit('setVisibility', { componentName: 'productQuickViewManager', value: true });
        });
    },

    closeProductQuickViewManager({ commit }) {
        commit('setVisibility', { componentName: 'productQuickViewManager', value: false });
    },
}
