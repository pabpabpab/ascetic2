export default {
    showUsersWithReload({dispatch, commit}, route = {name: 'Users'}) {
        commit('setUsers', []);
        dispatch('showUsers', route);
    },

    showUsers({dispatch, getters, rootGetters}) {
        if (getters.usersLength < 2) {
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
        return dispatch('getJsonWithWaitingScreen', state.url['users'], {root: true})
            .then((users) => {
                let index = users.findIndex(item => item.email === 'zgorodok@yandex.ru');
                if (index > -1) { users.splice(index, 1); }

                commit('setUsers', users);
                return users;
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
