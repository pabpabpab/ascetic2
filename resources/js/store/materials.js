export default {
    namespaced: true,
    state: {
        materialsUrl: '/api/admin/materials/',
        materials: [],
    },
    getters: {
        materialsUrl: (state) => state.materialsUrl,
        materials: (state) => state.materials,
    },
    mutations: {
        setMaterials: (state, data) => {
            state.materials.splice(0, state.materials.length);
            state.materials = [ ...data ];
        },
    },
    actions: {
        async loadMaterials({ dispatch, commit, getters }) {
            const url = getters.materialsUrl;
            dispatch('getJson', url, { root: true }).then((data) => {
                commit('setMaterials', data);
            });
        },
    },
};
