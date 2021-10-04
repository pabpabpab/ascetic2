export default {
    namespaced: true,
    state: {
        text: '',
    },
    getters: {
        text: (state) => state.text,
        showAbsoluteFlashFiltersMessage: (state) => state.text.length > 0,
    },
    mutations: {
        setText: (state, txt) => {
            // setTimeout() чтобы сначала отработал реактивно сброс выше
            // который может иметься
            setTimeout(() => {
                state.text = txt;
            }, 10);
        },
    },
    actions: {
        showAbsoluteFlashFiltersMessage: {
            root: true,
            handler ({ commit }, {text, sec}) {
                commit('setText', text);
                setTimeout(() => {
                    commit('setText', '');
                }, sec * 1000);
            }
        },
    },
};
