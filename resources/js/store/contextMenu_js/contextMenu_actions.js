export default {

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
}
