export default {

    showProductQuickViewManager({ dispatch, commit }, productId) {
        dispatch('showWaitingScreen', null, { root: true });
        commit('setSingleProductFromServer', {});
        dispatch('loadSingleProduct', productId).then(() => {
            dispatch('hideWaitingScreen', null, { root: true });
            commit('setVisibility', { componentName: 'productQuickViewManager', value: true });
        });

    },

    closeProductQuickViewManager({ commit }) {
        commit('setVisibility', { componentName: 'productQuickViewManager', value: false });
    },
}
