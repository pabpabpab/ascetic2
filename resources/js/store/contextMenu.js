export default {
    namespaced: true,
    state: {
        enabledFadingCss: false,
        target: '',
        coordinates: {},
        currentListIndex: 0,
        lastListIndex: 0,
        category: {},
        product: {},
        productId: 0,
        photoName: '',
    },
    getters: {
        enabledFadingCss: (state) => state.enabledFadingCss,
        coordinates: (state) => state.coordinates,
        showCategoriesContextMenu: (state) => state.target === 'Categories',
        showProductsContextMenu: (state) => state.target === 'Products',
        showPhotosContextMenu: (state) => state.target === 'Photos',
        currentListIndex: (state) => state.currentListIndex,
        lastListIndex: (state) => state.lastListIndex,
        category: (state) => state.category,
        product: (state) => state.product,
        productId: (state) => state.productId,
        photoName: (state) => state.photoName,
    },
    mutations: {

        setEnabledFadingCss: (state, val) => {
            state.enabledFadingCss = val;
        },

        setCoordinatesForCategoriesContext: (state, event) => {
            const icon = event.target.getBoundingClientRect();

            const x = {
                left: (icon.x + 25) + 'px'
            }

            // проверка на расстояние от точки клика до нижнего края
            const y = window.innerHeight - event.clientY < 300
                ? {
                    bottom: (window.innerHeight - event.pageY) + 'px'
                }
                : {
                    top: icon.y + window.pageYOffset + 21 + 'px'
                };

            state.coordinates = { ...x, ...y };
        },

        setCoordinatesForProductsContext: (state, event) => {
            const icon = event.target.getBoundingClientRect();

            const xOffset = -185;

            const x = {
                left: (icon.x + xOffset) + 'px'
            }

            const y = {
                    top: icon.y + window.pageYOffset + 4 + 'px'
                };

            state.coordinates = { ...x, ...y };
        },

        setCoordinatesForPhotosContext: (state, event) => {
            const icon = event.target.getBoundingClientRect();

            const xOffset = -240;

            const x = {
                left: (icon.x + xOffset) + 'px'
            }

            const y = {
                top: icon.y - 27 + 'px'
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

        setProductsContextData: (state, data) => {
            const { product } = data;
            state.product = product;
        },

        setPhotosContextData: (state, data) => {
            const { productId, photoName, currentListIndex, lastListIndex } = data;
            state.productId = productId;
            state.photoName = photoName;
            state.currentListIndex = currentListIndex;
            state.lastListIndex = lastListIndex;
        },

    },
    actions: {

        showContextMenu({ dispatch, commit, getters, rootState }, { event, target, data }) {
            if (rootState['dragAndDropByXY']['isDragging']) {
                return;
            }
            if (rootState['dragAndDropByY']['isDragging']) {
                return;
            }
            dispatch('setTarget', target).then(() => {
                commit(`setCoordinatesFor${target}Context`, event);
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
