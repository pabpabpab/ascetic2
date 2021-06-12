export default {
    state: {
        singleUserUrl: '/api/admin/user/',
        userEditUrl: '/api/admin/user/edit/',
        singleUser: {},
        successUserMessage: '&nbsp;',
    },
    getters: {
        singleUserUrl: (state) => state.singleUserUrl,
        userEditUrl: (state) => state.userEditUrl,
        singleUser: (state) => state.singleUser,
        successUserMessage: (state) => state.successUserMessage,
    },
    mutations: {
        setSingleUser: (state, user) => {
            state.singleUser = { ...user };
        },
        setSuccessUserMessage: (state, txt) => {
            state.successUserMessage = txt;
        },
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        loadSingleUser({ dispatch, commit, getters, state }, userId) {
            const singleUserUrl = getters.singleUserUrl + userId;
            dispatch('getJson', singleUserUrl)
                .then((data) => {
                    commit('setSingleUser', data);
                });
        },

        saveUserRole({ dispatch, commit, getters, state }, user) {
            dispatch('postJson', {
                url: getters.userEditUrl + user.id,
                data: user,
            })
                .then((data) => {
                    if (data.updateSuccess === true) {
                        commit('setSingleUser', data.user);
                        const txt = 'Сохранено ' + data.user.role;
                        commit('setSuccessUserMessage', txt);
                    } else {
                        commit('setSuccessUserMessage', 'неудачная попытка сохранения');
                    }
                    dispatch('delayedMessageCleaning', 'setSuccessUserMessage');
                });
        },

    },
};
