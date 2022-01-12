export default {
    namespaced: true,
    state: {
        visibility: false,
    },
    getters: {
        mobileMenuVisibility: (state) => state.visibility,
    },
    mutations: {
        setVisibility: (state, value) => {
            state.visibility = value;
        },
    },
    actions: {
        showMobileMenu: {
            root: true,
            handler ({ commit }) {
                window.document.body.style.overflow = 'hidden';
                commit('setVisibility', true);
            }
        },
        hideMobileMenu: {
            root: true,
            handler ({ commit }) {
                window.document.body.style.overflow = 'auto';
                commit('setVisibility', false);
            }
        },
    },
};
