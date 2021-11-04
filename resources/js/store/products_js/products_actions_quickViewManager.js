export default {

    showProductQuickViewManager({ dispatch, commit }, productId) {
        dispatch('showWaitingScreen', null, { root: true });
        commit('setSingleProductFromServer', {});
        dispatch('loadSingleProduct', productId).then(() => {
            dispatch('hideWaitingScreen', null, { root: true });
            commit('setShowProductQuickViewManager', true);
        });

    },

    closeProductQuickViewManager({ commit }) {
        commit('setShowProductQuickViewManager', false);
    },
}
