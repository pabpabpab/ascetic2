import theRouter from "../../router";

export default {

    deleteProduct({ dispatch, commit, getters, state, rootGetters }, productId) {
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('deleteJsonWithWaitingScreen', state.url['deleteProduct'] + productId, { root: true })
            .then((data) => {
                dispatch('cleanPopupErrors', null, { root: true });

                if (data.backValidatorErrors) {
                    dispatch('showPopupErrorsBox', data.backValidatorErrors, {root: true});
                    return;
                }

                if (data.deleteSuccess === true) {

                    commit('setNeedReload', { entity: 'trashedProducts', value: true });
                    commit('setPreviousRouteName', theRouter.currentRoute.name);
                    dispatch('setReloadAllCategoriesCommand', true, {root: true}); // для перезагрузки категорий потом

                    const currentPageIndex = rootGetters['pagination/currentPageIndex']('products');
                    commit('deleteItemFromProducts', productId);

                    if (theRouter.currentRoute.name === 'SingleProduct') {
                        theRouter.push({ name: 'TrashedProducts' });
                    } else {
                        dispatch('getFiltered', theRouter.currentRoute)
                            .then((data) => {
                                dispatch('sortProducts', {mode: getters.sortingMode, data: data})
                                    .then((sorted) => {
                                        //console.log(sorted);
                                        dispatch('paginateProducts', sorted)
                                            .then(() => {
                                                dispatch('showPage', { entity: 'products', pageIndex: currentPageIndex }, { root: true });
                                            });
                                    });
                            });
                    }

                    const txt = `Товар «${data.product.name}» удален.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 1.2}, { root: true });
                    commit('setVisibility', { componentName: 'productQuickViewManager', value: false });

                } else {
                    const txt = 'неудачная попытка удаления';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },


    restoreProduct({ dispatch, commit, state }, productId) {
        dispatch('closeContextMenu', null, {root: true});
        dispatch('getJson', state.url['restoreProduct'] + productId, { root: true })
            .then((data) => {
                if (data.restoreSuccess === true) {
                    commit('setNeedReload', { entity: 'trashedProducts', value: true });
                    commit('setNeedReload', { entity: 'products', value: true });
                    dispatch('setReloadAllCategoriesCommand', true, {root: true}); // для перезагрузки категорий потом
                    dispatch('showTrashedProducts');
                    const txt = `Товар «${data.product.name}» восстановлен.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    // theRouter.push({ name: 'Products' });
                } else {
                    const txt = 'неудачная попытка';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },


    forceDeleteProduct({ dispatch, commit, state }, productId) {
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('deleteJsonWithWaitingScreen', state.url['forceDeleteProduct'] + productId, { root: true })
            .then((data) => {
                if (data.deleteSuccess === true) {
                    commit('setNeedReload', { entity: 'trashedProducts', value: true });
                    dispatch('showTrashedProducts');
                    const txt = `Товар «${data.productName}» удален безвозвратно.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка удаления';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },

}
