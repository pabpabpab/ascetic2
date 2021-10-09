export default {
    namespaced: true,
    state: {
        target: '',
        coordinates: {},
        currentListIndex: 0,
        lastListIndex: 0,
        category: {},
        product: {},
        productId: 0,
        photoName: '',
        user: {},
    },
    getters: {
        coordinates: (state) => state.coordinates,
        showCategoriesContextMenu: (state) => state.target === 'Categories',
        showProductsContextMenu: (state) => state.target === 'Products',
        showPhotosContextMenu: (state) => state.target === 'Photos',
        showUsersContextMenu: (state) => state.target === 'Users',
        currentListIndex: (state) => state.currentListIndex,
        lastListIndex: (state) => state.lastListIndex,
        category: (state) => state.category,
        product: (state) => state.product,
        productId: (state) => state.productId,
        photoName: (state) => state.photoName,
        user: (state) => state.user,
    },
    mutations: {

        setCoordinatesForCategoriesContext: (state, event) => {
            const icon = event.target.getBoundingClientRect();

            const x = {
                left: (icon.x + 20) + 'px'
            }

            // проверка на расстояние от точки клика до нижнего края
            const y = window.innerHeight - event.clientY < 300
                ? {
                    bottom: (window.innerHeight - event.pageY) + 'px'
                }
                : {
                    top: icon.y + window.pageYOffset + 10 + 'px'
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

            const xOffset = -162;
            const yOffset = -2;

            const x = {
                left: (icon.x + xOffset) + 'px'
            }

            const y = {
                top: (icon.y + yOffset) + 'px'
            };

            state.coordinates = { ...x, ...y };
        },

        setCoordinatesForUsersContext: (state, event) => {
            const icon = event.target.getBoundingClientRect();

            const x = {
                left: (icon.x + 20) + 'px'
            }

            // проверка на расстояние от точки клика до нижнего края
            const y = window.innerHeight - event.clientY < 300
                ? {
                    bottom: (window.innerHeight - event.pageY) + 'px'
                }
                : {
                    top: icon.y + window.pageYOffset + 10 + 'px'
                };

            state.coordinates = { ...x, ...y };
        },

        setTarget: (state, target) => {
            state.target = target;
        },

        resetTarget: (state) => {
            state.target = '';
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

        setUsersContextData: (state, data) => {
            const { user } = data;
            state.user = user;
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

            commit('resetTarget');
        },

        // Регистрация глобального действия в модуле с собственным пространством имён
        // для вызова из других модулей с namespaced: true
        closeContextMenu: {
            root: true,
            handler ({ commit }) {
                commit('resetTarget');
            }
        },
    },
};
