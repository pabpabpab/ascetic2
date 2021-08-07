export default {
    namespaced: true,
    state: {
        showFullScreenStub: false,
        enabledFadingCss: false,
    },
    getters: {
        showFullScreenStub: (state) => state.showFullScreenStub,
        enabledFadingCss: (state) => state.enabledFadingCss,
    },
    mutations: {
        setShowFullScreenStub: (state, val) => {
            state.showFullScreenStub = val;
        },
        setEnabledFadingCss: (state, val) => {
            state.enabledFadingCss = val;
        },
    },
    actions: {

        showFullScreenStub: {
            root: true,
            handler ({ commit }) {
                commit('setShowFullScreenStub', true);
                commit('setEnabledFadingCss', false);
            }
        },

        closeFullScreenStub: {
            root: true,
            handler ({ commit }) {
                commit('setEnabledFadingCss', true);
                setTimeout(() => {
                    commit('setShowFullScreenStub', false);
                }, 1000);
            }
        },

    },
};
