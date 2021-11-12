export default {

    getUsersCount({ dispatch, commit, state }) {
        const url = state.url['usersCount'];
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setUsersCount', data);
        });
    },

    loadUsers({ dispatch, commit, state }) {
        const url = state.url['users'];
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setUsers', data);
            dispatch('setFiltered', { entity: 'users', data: data }, { root: true }).then(() => {
                // ниже передаю параметр quantityPerPage = 0 для совместимости,
                // так как данный action может вызываться из других компонентов с параметром quantityPerPage
                dispatch('divideIntoPages',  {
                    entity: 'users',
                    customQuantityPerPage: 0
                }, { root: true });
                dispatch('hideWaitingScreen', null, { root: true });
            });
        });
    },

    loadSingleUser({ dispatch, commit, state }, userId) {
        const url = state.url['singleUser'] + userId;
        dispatch('getJson', url, {root: true}).then((data) => {
            commit('setSingleUserFromServer', data);
        });
    },

};
