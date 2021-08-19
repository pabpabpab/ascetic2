export default {
    namespaced: true,
    state: {
        showWaitingScreen: false,
        enabledFadingCss: false,
    },
    getters: {
        showWaitingScreen: (state) => state.showWaitingScreen,
        enabledFadingCss: (state) => state.enabledFadingCss,
    },
    mutations: {
        setShowWaitingScreen: (state, val) => {
            state.showWaitingScreen = val;
        },
        setEnabledFadingCss: (state, val) => {
            state.enabledFadingCss = val;
        },
    },
    actions: {

        showWaitingScreen: {
            root: true,
            handler ({ commit }) {
                commit('setShowWaitingScreen', true);
                commit('setEnabledFadingCss', false);
            }
        },

        hideWaitingScreen: {
            root: true,
            handler ({ commit }) {
                commit('setEnabledFadingCss', true);
                setTimeout(() => {
                    commit('setShowWaitingScreen', false);
                }, 1000);
            }
        },

    },
};
