export default {

    state: {
        csrfUrl: '/api/admin/csrf',
        csrfToken: '',
    },

    getters: {
        csrfUrl: (state) => state.csrfUrl,
        csrfToken: (state) => state.csrfToken,
    },

    mutations: {
        setCsrfToken: (state, str) => {
            state.csrfToken = str;
        },
    },

    actions: {
        updateCSRF({ dispatch, commit, getters }, seconds = 20) {
            const url = getters.csrfUrl;
            setInterval(() => {
                dispatch('getJson', url).then((data) => {
                    commit('setCsrfToken', data);
                });
            }, seconds*1000);
        },
    },

};
