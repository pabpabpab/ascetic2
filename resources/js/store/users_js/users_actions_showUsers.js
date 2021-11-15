export default {
    showUsersWithReload({dispatch, commit}, route = {name: 'Users'}) {
        commit('setUsers', []);
        dispatch('showUsers', route);
    },

    showUsers({dispatch, getters, rootGetters}) {
        if (getters.usersLength === 0) {
            dispatch('loadUsers')
                .then((data) => {
                    dispatch('paginateUsers', data);
                });
            return;
        }

        const currentPageIndex = rootGetters['pagination/currentPageIndex']('users');
        if (currentPageIndex === -1) {
            dispatch('paginateUsers', getters.users);
        }
    },

    loadUsers({dispatch, commit, state}) {
        dispatch('showWaitingScreen', null, {root: true});
        return dispatch('getJson', state.url['users'], {root: true})
            .then((data) => {
                commit('setUsers', data);
                return data;
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, {root: true});
            });
    },

    paginateUsers({dispatch}, data) {
        dispatch('setFiltered', {entity: 'users', data: data}, {root: true})
            .then(() => {
                dispatch('divideIntoPages', {
                    entity: 'users',
                    customQuantityPerPage: 0
                }, {root: true});
            });
    },
}