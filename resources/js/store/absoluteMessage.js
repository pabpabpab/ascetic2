export default {
    state: {
        absoluteMessage: '',
    },
    getters: {
        absoluteMessage: (state) => state.absoluteMessage,
        hasAbsoluteMessage: (state) => state.absoluteMessage.length > 0,
    },
    mutations: {
        setAbsoluteMessage: (state, txt) => {
            // setTimeout() чтобы сначала отработал реактивно сброс выше
            // который может иметься
            setTimeout(() => {
                state.absoluteMessage = txt;
            }, 10);
        },
        clearAbsoluteMessage: (state) => {
            state.absoluteMessage = '';
        },
    },
    actions: {
        closeAbsoluteMessageBox({ commit }) {
            commit('clearAbsoluteMessage');
        },
        delayedAbsoluteMessageCleaning({ commit }) {
            setTimeout(() => {
                commit('clearAbsoluteMessage');
            }, 2000);
        },
    },
};
