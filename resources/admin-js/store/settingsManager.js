export default {
    namespaced: true,
    state: {
        url: {
            save:  '/admin-js/settings/save/',
            get:  '/admin-js/settings/get/',
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
            main_page_seo: {
                mainPageTitle: '',
                mainPageDescription: '',
            },
            visible_categories_limit: {
                value: 3,
            },
            pagination: {
                perPage: 3,
            },
            cache_limit: {
                value: 100,
            },
            scroll_speed_ratio: {
                value: 75,
            },
            photo_quality: {
                value: 90,
            },
            admin_email: {
                value: '',
            },
        },
    },
    getters: {
        settings: (state) => (subject) => {
            if (!subject) {
                return { ...state.settings };
            }
            return { ...state.settings[subject] };
        },
    },
    mutations: {
        setSettings: (state, {subject, data}) => {
            //console.log(subject);
            const settings = { ...state.settings };
            settings[subject] = { ...data };
            state.settings = { ...settings };
            //console.log(state.settings);
        },
    },
    actions: {

        loadSettings({dispatch, commit, state},  {subject}) {
            const url = state.url.get + subject;
            dispatch('getJsonWithWaitingScreen', url, { root: true })
                .then((data) => {
                    //console.log(data);
                    commit('setSettings', {subject, data});
                });
        },

        saveSettings({ dispatch, commit, state, rootState }, { subject, data }) {
            const url = state.url.save + subject;
            //console.log(url);
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
                        //console.log(data);
                        commit('setSettings', {subject: subject, data: data.settings});
                        const txt = `Сохранено.`;
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 1}, { root: true });
                    } else {
                        const txt = 'неудачная попытка сохранения';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    }
                });
        },

    },
};
