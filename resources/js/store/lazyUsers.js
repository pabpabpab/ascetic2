export default {
    namespaced: true,
    state: {
        lazyUsersUrl: '/api/admin/lazy-users/',
        lazyUsers: [],
        lastLoadedLazyUserId: 0,
    },
    getters: {
        lazyUsersUrl: (state) => state.lazyUsersUrl,
        lazyUsers: (state) => state.lazyUsers,
        lastLoadedLazyUserId: (state) => state.lastLoadedLazyUserId,
        showLoadMoreButton: (state, getters, rootState) => rootState['users']['usersCount'] > state.lazyUsers.length,
    },
    mutations: {
        setLazyUsers: (state, data) => {
            state.lazyUsers.splice(0, state.lazyUsers.length);
            let lastUserId = 0;
            for (let i = 0; i < data.length; i += 1) {
                state.lazyUsers.push(data[i]);
                lastUserId = data[i].id;
            }
            state.lastLoadedLazyUserId = lastUserId;
        },
        addToLazyUsers: (state, data) => {
            let lastUserId = 0;
            for (let i = 0; i < data.length; i += 1) {
                state.lazyUsers.push(data[i]);
                lastUserId = data[i].id;
            }
            state.lastLoadedLazyUserId = lastUserId;
        },
    },
    actions: {
        loadLazyUsers({ dispatch, commit, getters }) {
            const url = getters.lazyUsersUrl + getters.lastLoadedLazyUserId;
            dispatch('getJson', url, { root: true }).then((data) => {
                commit('setLazyUsers', data);
            });
        },
        loadMoreLazyUsers({ dispatch, commit, getters }) {
            const url = getters.lazyUsersUrl + getters.lastLoadedLazyUserId;
            dispatch('getJson', url, { root: true }).then((data) => {
                commit('addToLazyUsers', data);
            });
        },
    },
};
