export default {

    showUserEditManager({ dispatch, commit, getters, state }, { userId, task }) {
        //console.log(data);
        dispatch('closeContextMenu', null, { root: true });
        dispatch('showWaitingScreen', null, { root: true });
        document.body.style.cssText='overflow:hidden;';
        commit('setSingleUserFromServer', {});
        dispatch('loadSingleUser', userId).then(() => {
            dispatch('hideWaitingScreen', null, { root: true });
            commit('setTaskOfUserEditManager', task);
            commit('setShowUserEditManager', true);
        });

    },

    closeUserEditManager({ commit }) {
        document.body.style.cssText='overflow:auto;';
        commit('setShowUserEditManager', false);
    },
}
