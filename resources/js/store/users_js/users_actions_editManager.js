export default {

    showUserEditManager({dispatch, commit, getters, state}, {userId, task}) {
        dispatch('closeContextMenu', null, {root: true});
        dispatch('showWaitingScreen', null, {root: true});
        commit('setSingleUserFromServer', {});
        dispatch('loadSingleUser', userId)
            .then(() => {
                window.document.body.style.overflow = 'hidden';
                commit('setTaskOfUserEditManager', task);
                commit('setVisibility', {componentName: 'userEditManager', value: true});
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, {root: true});
            });
    },

    closeUserEditManager({ commit }) {
        window.document.body.style.overflow = 'auto';
        commit('setVisibility', { componentName: 'userEditManager', value: false });
    },
}
