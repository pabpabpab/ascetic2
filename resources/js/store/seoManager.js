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
    },
    getters: {
        seoData: (state) => (entity) => {
            if (!entity) {
                return state.seoData;
            }
            return state.seoData[entity];
        },

        showSeoManager: (state) => state.showSeoManager,
    },
    mutations: {
        setServerData: (state, {entity, data}) => {
            const seoData = { ...state.seoData };
            seoData[entity] = { ...data };
            state.seoData = { ...seoData };
        },
        clearSeoData: (state, entity) => {
            const seoData = { ...state.seoData };
            seoData[entity] = {};
            state.seoData = { ...seoData };
        },
        updateLocalSeoData: (state, {entity, data}) => {
            const seoData = { ...state.seoData };
            seoData[entity].seo = { ...data };
            state.seoData = { ...seoData };
        },
        setShowSeoManager: (state, value) => {
            state.showSeoManager = value;
        },

        addItemIntoModuleSeoData: (state, {rootState, entity, data}) => {
            const item = {
                page_title: data?.pageTitle,
                page_description: data?.pageDescription,
                alt_text: data?.imgAlt,
                filename: data?.photoName,
            }
            item[entity + '_id'] = data?.entityId;

            const moduleNameBook = {
                product: 'products',
                photo: 'products',
                category: 'categories'
            }
            const moduleName = moduleNameBook[entity];


            const seoStoreNameBook = {
                product: 'seoData',
                photo: 'photoSeoData',
                category: 'seoData'
            }
            const seoStoreName = seoStoreNameBook[entity];


            const arr = rootState[moduleName][seoStoreName];
            arr.push(item);
            rootState[moduleName][seoStoreName] = [ ...arr ];
        },



},
    actions: {

        showSeoManager({ dispatch, commit, getters, state }, {entity, data}) {
            dispatch('closeContextMenu', null, { root: true });
            dispatch('showWaitingScreen', null, { root: true });
            commit('clearSeoData', entity);
            dispatch('loadSeoData', {entity, data}).then(() => {
                dispatch('hideWaitingScreen', null, {root: true});
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
                    commit('setServerData', {entity, data});
                });
        },


        saveSeoData({ dispatch, commit, state, rootState }, { entity, data }) {
            const frontItem = data;

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
                    dispatch('hideWaitingScreen', null, { root: true });
                    if (data.saveSuccess === true) {

                        commit('addItemIntoModuleSeoData', {
                            rootState: rootState,
                            entity: entity,
                            data: frontItem,
                        });

                        commit('updateLocalSeoData', {entity: entity, data: data.seo});
                        const txt = `Сохранено.`;
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 1}, { root: true });
                    } else {
                        const txt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    }
                });
        },


        closeSeoManager({ commit }) {
            commit('setShowSeoManager', false);
        },

    },
};
