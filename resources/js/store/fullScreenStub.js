export default {
    state: {
        showFullScreenStub: false,
        closeFullScreenStub: false,
    },
    getters: {
        showFullScreenStub: (state) => state.showFullScreenStub,
        closeFullScreenStub: (state) => state.closeFullScreenStub,
    },
    mutations: {
        setShowFullScreenStub: (state, val) => {
            state.showFullScreenStub = val;
        },
        setCloseFullScreenStub: (state, val) => {
            state.closeFullScreenStub = val;
        },
    },
    actions: {
        showFullScreenStub({ commit }) {
            commit('setShowFullScreenStub', true);
            commit('setCloseFullScreenStub', false);
        },

        closeFullScreenStub({ commit }) {
            commit('setCloseFullScreenStub', true);

            setTimeout(() => {
                commit('setShowFullScreenStub', false);
            }, 1000);
        },
    },
};
