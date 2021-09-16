export default {

    showProductEditManager({ dispatch, commit, getters, state }, productId) {
        //console.log(data);
        dispatch('closeContextMenu', null, { root: true });
        dispatch('showWaitingScreen', null, { root: true });
        document.body.style.cssText='overflow:hidden;';
        commit('setSingleProductFromServer', {});
        dispatch('loadSingleProduct', productId).then(() => {
            dispatch('hideWaitingScreen', null, { root: true });
            commit('setEnabledFadingCss', false);
            commit('setShowProductEditManager', true);
        });

    },

    closeProductEditManager({ commit }) {
        document.body.style.cssText='overflow:auto;';
        commit('setEnabledFadingCss', true);
        setTimeout(() => {
            commit('setShowProductEditManager', false);
        }, 500);
    },
}
