export default {
    namespaced: true,
    state: {
        colorsUrl: '/api/admin/colors/',
        colors: [],
    },
    getters: {
        colorsUrl: (state) => state.colorsUrl,
        colors: (state) => state.colors,
    },
    mutations: {
        setColors: (state, data) => {
            state.colors.splice(0, state.colors.length);
            state.colors = [ ...data ];
        },
    },
    actions: {
        async loadColors({ dispatch, commit, getters }) {
            const url = getters.colorsUrl;
            dispatch('getJson', url, { root: true }).then((data) => {
                commit('setColors', data);
            });
        },
    },
};
