export default {

    showUsers({dispatch, getters, rootGetters}) {
        if (getters.usersLength > 0) {
            const currentPageIndex = rootGetters['pagination/currentPageIndex']('users');
            if (currentPageIndex === -1) {
                dispatch('paginateUsers', getters.users);
            }
            return;
        }

        dispatch('loadUsers');
    },

    loadUsers({ dispatch, commit, state }) {
        dispatch('showWaitingScreen', null, { root: true });
        dispatch('getJson', state.url['users'], { root: true })
            .then((data) => {
                commit('setUsers', data);
                dispatch('paginateUsers', data);
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, { root: true });
            });
    },

    paginateUsers({ dispatch }, data) {
        dispatch('setFiltered', { entity: 'users', data: data }, { root: true })
            .then(() => {
                dispatch('divideIntoPages',  {
                    entity: 'users',
                    customQuantityPerPage: 0
                }, { root: true });
            });
    },

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
