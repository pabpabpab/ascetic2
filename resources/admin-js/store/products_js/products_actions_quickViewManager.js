export default {

    showProductQuickViewManager({ dispatch, commit }, productId) {
        commit('setSingleProductFromServer', {});
        dispatch('loadSingleProduct', productId).then(() => {
            window.document.body.style.overflow = 'hidden';
            commit('setVisibility', { componentName: 'productQuickViewManager', value: true });
        });
    },

    closeProductQuickViewManager({ commit }) {
        window.document.body.style.overflow = 'auto';
        commit('setVisibility', { componentName: 'productQuickViewManager', value: false });
    },
}
