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
        updateCSRF({ dispatch, commit, getters }) {
            const url = getters.csrfUrl;
            setInterval(() => {
                dispatch('getJson', url).then((data) => {
                    commit('setCsrfToken', data);
                    // console.log(data);
                });
            }, 100*1000); // 100 секунд
        },
    },

};
