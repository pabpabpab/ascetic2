export default {
    namespaced: true,
    state: {
        url: {
            save:  '/api/admin/settings/save/',
            get:  '/api/admin/settings/get/',
        },

        settings: {
            contacts: {
                domain: '',
                address: '',
                phone: '',
                phoneTime: '',
                whatsapp: '',
                tg: '',
                vkontakte: '',
                ok: '',
                meta: '',
                email: '',
            },
            mainPageSeo: {
                mainPageTitle: '',
                mainPageDescription: '',
            },
            pagination: {
                perPage: 3,
            },
            cacheLimit: {
                value: 100,
            },
            photoQuality: {
                value: 90,
            },
            adminEmail: {
                value: '',
            },
        },
    },
    getters: {
        settings: (state) => (subject) => {
            if (!subject) {
                return state.settings;
            }
            return state.settings[subject];
        },

        url: (state) => (type) => state.url[type],
    },
    mutations: {
        setSettings: (state, {subject, data}) => {
            const settings = { ...state.settings };
            settings[subject] = { ...data };
            state.settings = { ...settings };
        },
    },
    actions: {

        loadSettings({dispatch, commit, state},  {subject}) {
            const url = state.url.get + subject;
            dispatch('getJsonWithWaitingScreen', url, { root: true })
                .then((data) => {
                    commit('setSettings', {subject, data});
                });
        },

        saveSettings({ dispatch, commit, state, rootState }, { subject, data }) {
            const url = state.url.save + subject;
            dispatch(
                'postJsonWithWaitingScreen',
                {
                    url: url,
                    data: data,
                },
                {root: true}
            )
                .then((data) => {
                    if (data.saveSuccess === true) {

                        commit('setSettings', {subject: subject, data: data.data});
                        const txt = `Сохранено.`;
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 1}, { root: true });
                    } else {
                        const txt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    }
                });
        },

    },
};
