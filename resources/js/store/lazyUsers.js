export default {
    state: {
        lazyUsersUrl: '/api/admin/lazy-users/',
        lazyUsers: [],
        lastLoadedLazyUserId: 0,
    },
    getters: {
        lazyUsersUrl: (state) => state.lazyUsersUrl,
        lazyUsers: (state) => state.lazyUsers,
        lazyUsersLength: (state) => state.lazyUsers.length,
        lastLoadedLazyUserId: (state) => state.lastLoadedLazyUserId,
        showLoadMoreButton: (state, getters) => getters.usersCount > getters.lazyUsersLength,
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
        /*
        setLastLoadedLazyUserId: (state, id) => {
            state.lastLoadedLazyUserId = id;
        },
        */
    },
    actions: {
        loadLazyUsers({ dispatch, commit, getters, state }) {
            const url = getters.lazyUsersUrl + getters.lastLoadedLazyUserId;
            dispatch('getJson', url).then((data) => {
                commit('setLazyUsers', data);
            });
        },
        loadMoreLazyUsers({ dispatch, commit, getters, state }) {
            const url = getters.lazyUsersUrl + getters.lastLoadedLazyUserId;
            dispatch('getJson', url).then((data) => {
                commit('addToLazyUsers', data);
            });
        },
    },
};
