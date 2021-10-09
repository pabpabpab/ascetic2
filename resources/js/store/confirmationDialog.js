export default {
    namespaced: true,
    state: {
        text: '',
        yesButtonText: '',
        cancelButtonText: '',
        yesAction: '',
        cancelAction: '',
        yesPayload: {}, // payload для yesAction
        finalRedirectRoute: '', // роут после yesAction
    },
    getters: {
        showConfirmationRequest: (state) => state.text.length > 0,
        text: (state) => state.text,
        yesButtonText: (state) => state.yesButtonText,
        cancelButtonText: (state) => state.cancelButtonText,
        yesAction: (state) => state.yesAction,
        cancelAction: (state) => state.cancelAction,
        yesPayload: (state) => state.yesPayload,
        finalRedirectRoute: (state) => state.finalRedirectRoute,
    },
    mutations: {

        setConfirmationDialog: (state, settings) => {
            // setTimeout() чтобы сначала отработал реактивно сброс выше
            // который может иметься
            setTimeout(() => {
                state.text = settings.confirmationRequestText;
                state.yesButtonText = settings.yesButtonText;
                state.cancelButtonText = settings.cancelButtonText;
                state.yesAction = settings.yesAction;
                state.cancelAction = settings.cancelAction;
                state.yesPayload = settings.yesPayload;
                state.finalRedirectRoute = settings.finalRedirectRoute;
            }, 10);
        },

        resetConfirmationDialog: (state) => {
            state.text = '';
            state.yesButtonText = '';
            state.cancelButtonText = '';
            state.yesAction = '';
            state.cancelAction = '';
            state.yesPayload = {};
            state.finalRedirectRoute = '';
        },
    },
    actions: {

        showConfirmationDialog: {
            root: true,
            handler ({ commit }, settings) {
                commit('setConfirmationDialog', settings);
            }
        },

        closeConfirmationDialog: {
            root: true,
            handler ({ commit }) {
                commit('resetConfirmationDialog');
            }
        },

    },
};
