export default {
    namespaced: true,
    state: {
        popupErrors: {}, // ключ - имя input'а, значение - массив ошибок
    },
    getters: {
        popupErrors: (state) => state.popupErrors,

        showPopupErrors: (state) => {
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
            }, 100);
        },
        cleanPopupErrors: (state) => {
            state.popupErrors = {};
        },
    },
    actions: {

        showPopupErrorsBox: {
            root: true,
            handler ({ commit }, errors) {
               commit('setPopupErrors', errors);
            }
        },

        closePopupErrorsBox: {
            root: true,
            handler ({ commit }, event = null) {
                commit('cleanPopupErrors');
            }
        },

        cleanPopupErrors: {
            root: true,
            handler ({ commit }) {
                commit('cleanPopupErrors');
            }
        },

    },
};
