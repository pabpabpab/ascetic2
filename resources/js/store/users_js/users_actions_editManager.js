export default {

    showUserEditManager({dispatch, commit, getters, state}, {userId, task}) {
        dispatch('closeContextMenu', null, {root: true});
        dispatch('showWaitingScreen', null, {root: true});
        document.body.style.cssText = 'overflow:hidden;';
        commit('setSingleUserFromServer', {});
        dispatch('loadSingleUser', userId)
            .then(() => {
                commit('setTaskOfUserEditManager', task);
                commit('setVisibility', {componentName: 'userEditManager', value: true});
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, {root: true});
            });
    },

    closeUserEditManager({ commit }) {
        document.body.style.cssText='overflow:auto;';
        commit('setVisibility', { componentName: 'userEditManager', value: false });
    },
}
