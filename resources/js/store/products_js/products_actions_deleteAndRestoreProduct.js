import thatRouter from "../../router";

export default {

    deleteProduct({ dispatch, commit, getters, state }, productId) {
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('deleteJson', state.url['deleteProduct'] + productId, { root: true })
            .then((data) => {
                dispatch('cleanPopupErrors', null, { root: true });

                if (data.backValidatorErrors) {
                    dispatch('showPopupErrorsBox', data.backValidatorErrors, {root: true});
                    return;
                }

                if (data.deleteSuccess === true) {

                    commit('deleteItemFromProducts', productId);
                    dispatch('paginateProducts', getters.products);
                    commit('setNeedReload', { entity: 'trashedProducts', value: true });

                    if (thatRouter.currentRoute.name === 'SingleProduct') {
                        thatRouter.push({ name: 'TrashedProducts' });
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
                    dispatch('showTrashedProducts');
                    const txt = `Товар «${data.product.name}» восстановлен.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    // thatRouter.push({ name: 'Products' });
                } else {
                    const txt = 'неудачная попытка';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },


    forceDeleteProduct({ dispatch, commit, state }, productId) {
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('deleteJson', state.url['forceDeleteProduct'] + productId, { root: true })
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
