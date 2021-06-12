export default {
    state: {
        confirmationRequestText: '',
        yesButtonText: '',
        cancelButtonText: '',
        yesAction: '',
        cancelAction: '',
        yesPayload: {}, // payload для yesAction
        finalRedirectRoute: '', // роут после yesAction
    },
    getters: {
        hasConfirmationRequest: (state) => state.confirmationRequestText.length > 0,
        confirmationRequestText: (state) => state.confirmationRequestText,
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
                state.confirmationRequestText = settings.confirmationRequestText;
                state.yesButtonText = settings.yesButtonText;
                state.cancelButtonText = settings.cancelButtonText;
                state.yesAction = settings.yesAction;
                state.cancelAction = settings.cancelAction;
                state.yesPayload = settings.yesPayload;
                state.finalRedirectRoute = settings.finalRedirectRoute;
            }, 10);
        },

        resetConfirmationDialog: (state) => {
            state.confirmationRequestText = '';
            state.yesButtonText = '';
            state.cancelButtonText = '';
            state.yesAction = '';
            state.cancelAction = '';
            state.yesPayload = {};
            state.finalRedirectRoute = '';
        },
    },
    actions: {
        closeConfirmationDialog({ commit }) {
            commit('resetConfirmationDialog');
        },
    },
};
