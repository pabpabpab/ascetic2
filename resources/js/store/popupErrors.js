export default {
    namespaced: true,
    state: {
        enabledHidingCss: false,
        popupErrors: {}, // ключ - имя input'а, значение - массив ошибок
    },
    getters: {
        enabledHidingCss: (state) => state.enabledHidingCss,

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
        setEnabledHidingCss: (state, val) => {
            state.enabledHidingCss = val;
        },
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

        showPopupErrorsBox: {
            root: true,
            handler ({ commit }, errors) {
                commit('setPopupErrors', errors);
                commit('setEnabledHidingCss', false);
            }
        },

        closePopupErrorsBox: {
            root: true,
            handler ({ commit }, event = null) {
                commit('setEnabledHidingCss', true);
                setTimeout(() => {
                    commit('cleanPopupErrors');
                }, 500);
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
