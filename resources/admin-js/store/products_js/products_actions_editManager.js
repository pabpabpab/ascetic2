export default {

    showProductEditManager({ dispatch, commit }, productId) {
        dispatch('closeContextMenu', null, { root: true });
        commit('setSingleProductFromServer', {});
        dispatch('loadSingleProduct', productId)
            .then(() => {
                window.document.body.style.overflow = 'hidden';
                commit('setVisibility', { componentName: 'productEditManager', value: true });
            });
    },

    closeProductEditManager({ commit }) {
        window.document.body.style.overflow = 'auto';
        commit('setVisibility', { componentName: 'productEditManager', value: false });
    },
}
