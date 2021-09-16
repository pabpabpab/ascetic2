// import thatRouter from "../router";

export default {
    namespaced: true,
    state: {
        seoUrl: {
            category:  '/api/admin/category/seo/',
            product:  '/api/admin/product/seo/',
            photo: '/api/admin/product/photo/seo/',
        },

        saveSeoUrl: {
            category:  '/api/admin/category/seo/save/',
            product:  '/api/admin/product/seo/save/',
            photo: '/api/admin/product/photo/seo/save/',
        },

        seoData: {
            category: {},
            product: {},
            photo: {},
        },

        showSeoManager: false,
        enabledFadingCss: false,
    },
    getters: {
        //seoUrl: (state) => (entity) => state.seoUrl[entity],
        //saveSeoUrl: (state) => (entity) => state.saveSeoUrl[entity],

        seoData: (state) => (entity) => {
            if (!entity) {
                return state.seoData;
            }
            return state.seoData[entity];
        },

        showSeoManager: (state) => state.showSeoManager,
        enabledFadingCss: (state) => state.enabledFadingCss,
    },
    mutations: {
        setServerData: (state, {entity, data}) => {
            //console.log(data);
            const seoData = { ...state.seoData };
            seoData[entity] = { ...data };
            state.seoData = { ...seoData };
            //console.log(state.seoData);
        },
        clearSeoData: (state, entity) => {
            const seoData = { ...state.seoData };
            seoData[entity] = {};
            state.seoData = { ...seoData };
        },
        updateOnlySeoData: (state, {entity, data}) => {
            //console.log(data);
            const seoData = { ...state.seoData };
            seoData[entity].seo = { ...data };
            state.seoData = { ...seoData };
            //console.log(state.seoData);
        },
        setShowSeoManager: (state, value) => {
            state.showSeoManager = value;
        },
        setEnabledFadingCss: (state, value) => {
            state.enabledFadingCss = value;
        },
    },
    actions: {

        showSeoManager({ dispatch, commit, getters, state }, {entity, data}) {
            //console.log(data);
            dispatch('closeContextMenu', null, { root: true });
            dispatch('showWaitingScreen', null, { root: true });
            // document.body.style.cssText='overflow:hidden;';
            commit('clearSeoData', entity);
            dispatch('loadSeoData', {entity, data}).then(() => {
                dispatch('hideWaitingScreen', null, {root: true});
                commit('setEnabledFadingCss', false);
                commit('setShowSeoManager', true);
            });
        },


        loadSeoData({dispatch, commit, state},  {entity, data}) {
            const urlParams = {
                product: data.id,
                category: data.id,
                photo: data.productId + '/' + data.photoName
            }

            const seoUrl = state.seoUrl[entity] + urlParams[entity];

            dispatch('getJson', seoUrl, { root: true })
                .then((data) => {
                    //console.log(data);
                    commit('setServerData', {entity, data});
                });
        },


        saveSeoData({ dispatch, commit, state }, { entity, data }) {
            //console.log(data);

            const urlParams = {
                product: data.entityId,
                category: data.entityId,
                photo: data.entityId + '/' + data.photoName
            }

            const saveSeoUrl = state.saveSeoUrl[entity] + urlParams[entity];

            dispatch('showWaitingScreen', null, { root: true });

            dispatch(
                'postJson',
                {
                    url: saveSeoUrl,
                    data: data,
                },
                {root: true}
            )
                .then((data) => {
                    //console.log(data);
                    dispatch('hideWaitingScreen', null, { root: true });
                    if (data.saveSuccess === true) {
                        commit('updateOnlySeoData', {entity: entity, data: data.seo});
                        const txt = `Сохранено.`;
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 1}, { root: true });
                    } else {
                        const txt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    }
                });
        },


        closeSeoManager({ commit }) {
            // document.body.style.cssText='overflow:auto;';
            commit('setEnabledFadingCss', true);
            setTimeout(() => {
                commit('setShowSeoManager', false);
            }, 500);
        },

    },
};
