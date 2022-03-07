export default {
    namespaced: true,
    state: {
        showWaitingScreen: false,
    },
    getters: {
        showWaitingScreen: (state) => state.showWaitingScreen,
    },
    mutations: {
        setShowWaitingScreen: (state, val) => {
            state.showWaitingScreen = val;
        },
    },
    actions: {

        showWaitingScreen: {
            root: true,
            handler ({ commit }) {
                commit('setShowWaitingScreen', true);
            }
        },

        hideWaitingScreen: {
            root: true,
            handler ({ commit }) {
                commit('setShowWaitingScreen', false);
            }
        },

    },
};
