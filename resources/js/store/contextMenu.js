export default {
    namespaced: true,
    state: {
        enabledFadingCss: false,
        target: '',
        coordinates: {},
        currentListIndex: 0,
        lastListIndex: 0,
        category: {},
    },
    getters: {
        enabledFadingCss: (state) => state.enabledFadingCss,
        coordinates: (state) => state.coordinates,
        showCategoriesContextMenu: (state) => state.target === 'Categories',
        currentListIndex: (state) => state.currentListIndex,
        lastListIndex: (state) => state.lastListIndex,
        category: (state) => state.category,
    },
    mutations: {

        setEnabledFadingCss: (state, val) => {
            state.enabledFadingCss = val;
        },

        setCoordinates: (state, event) => {

            const x = {
                left: (event.clientX + 15) + 'px'
            }

            // проверка на расстояние от точки клика до нижнего края
            const y = window.innerHeight - event.clientY < 320
                ? {
                    bottom: (window.innerHeight - event.pageY) + 'px'
                }
                : {
                    top: event.clientY + window.pageYOffset + 10 + 'px'
                };

            state.coordinates = { ...x, ...y };
        },

        setTarget: (state, target) => {
            state.target = target;
        },

        resetTargetWithDelay: (state) => {
            setTimeout(() => {
                state.target = '';
            }, 500);
        },

        setCategoriesContextData: (state, data) => {
            const { category, currentListIndex, lastListIndex } = data;
            state.category = category;
            state.currentListIndex = currentListIndex;
            state.lastListIndex = lastListIndex;
        },

    },
    actions: {

        showContextMenu({ dispatch, commit, getters }, { event, target, data }) {
            dispatch('setTarget', target).then(() => {
                commit('setCoordinates', event);
                commit(`set${target}ContextData`, data);
                commit('setEnabledFadingCss', false);
            });
        },

        setTarget({ commit }, target) {
            commit('setTarget', target);
        },

        closeContextMenuByClick({ commit }, event) {
            // console.log(event);
            if (!event) {
                return;
            }
            if (event.target.className === 'context_menu__icon') {
                return;
            }
            if (!event.target.parentNode) {
                return;
            }
            if (event.target.parentNode.className === 'context_menu__ul') {
                return;
            }

            commit('setEnabledFadingCss', true);
            commit('resetTargetWithDelay');
        },

        // Регистрация глобального действия в модуле с собственным пространством имён
        // для вызова из других модулей с namespaced: true
        closeContextMenu: {
            root: true,
            handler ({ commit }) {
                commit('setEnabledFadingCss', true);
                commit('resetTargetWithDelay');
            }
        },
    },
};
