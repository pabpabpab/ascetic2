export default {

    loadSingleUser({ dispatch, commit, state }, userId) {
        const url = state.url['singleUser'] + userId;
        dispatch('getJson', url, {root: true}).then((data) => {
            commit('setSingleUserFromServer', data);
        });
    },

    getUsersCount({ dispatch, commit, state }) {
        const url = state.url['usersCount'];
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setUsersCount', data);
        });
    },

};
