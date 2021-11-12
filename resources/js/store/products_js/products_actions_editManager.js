export default {

    showProductEditManager({ dispatch, commit }, productId) {
        dispatch('closeContextMenu', null, { root: true });
        dispatch('showWaitingScreen', null, { root: true });
        commit('setSingleProductFromServer', {});
        dispatch('loadSingleProduct', productId).then(() => {
            dispatch('hideWaitingScreen', null, { root: true });
            commit('setVisibility', { componentName: 'productEditManager', value: true });
        });

    },

    closeProductEditManager({ commit }) {
        commit('setVisibility', { componentName: 'productEditManager', value: false });
    },
}
