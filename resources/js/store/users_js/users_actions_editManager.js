export default {

    showUserEditManager({ dispatch, commit, getters, state }, userId) {
        //console.log(data);
        dispatch('closeContextMenu', null, { root: true });
        dispatch('showWaitingScreen', null, { root: true });
        document.body.style.cssText='overflow:hidden;';
        commit('setSingleUserFromServer', {});
        dispatch('loadSingleUser', userId).then(() => {
            dispatch('hideWaitingScreen', null, { root: true });
            commit('setEnabledFadingCss', false);
            commit('setShowUserEditManager', true);
        });

    },

    closeUserEditManager({ commit }) {
        document.body.style.cssText='overflow:auto;';
        commit('setEnabledFadingCss', true);
        setTimeout(() => {
            commit('setShowUserEditManager', false);
        }, 500);
    },
}
