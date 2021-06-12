export default {
    state: {
        popupErrors: {}, // ключ - имя input'а, значение - массив ошибок
    },
    getters: {
        popupErrors: (state) => {
            // if (key) { return state.validatorErrors[key]; }
            return state.popupErrors;
        },
        hasPopupErrors: (state) => {
            const errors = state.popupErrors;
            for (let key in errors) {
                if (errors.hasOwnProperty(key)) {
                    return true;
                }
            }
            return false;
        },
    },
    mutations: {
        setPopupErrors: (state, errors) => {
            // setTimeout() чтобы сначала отработал реактивно сброс выше
            setTimeout(() => {
                state.popupErrors = { ...errors };
            }, 10);
        },
        cleanPopupErrors: (state) => {
            state.popupErrors = {};
        },
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        closePopupErrorsBox({ commit }) {
            commit('cleanPopupErrors');
        },

    },
};
