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
                    dispatch('setFiltered', {entity: 'products', data: getters.products}, {root: true})
                        .then(() => {
                            dispatch('divideIntoPages', {
                                entity: 'products',
                                customQuantityPerPage: 0 // этот параметр для совместимости
                            }, {root: true});
                        })

                    if (thatRouter.currentRoute.name === 'SingleProduct') {
                        thatRouter.push({ name: 'Products', params: {which: 'trashed'}});
                    }

                    const txt = `Товар «${data.product.name}» удален.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 1.2}, { root: true });
                    commit('setShowProductQuickViewManager', false);

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
                // console.log(data);
                if (data.restoreSuccess === true) {
                    const routeOfTrashedProducts = {
                        name: 'Products',
                        params: {which: 'trashed'}
                    };
                    dispatch('loadProducts', routeOfTrashedProducts);
                    const txt = `Товар «${data.product.name}» восстановлен.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    // thatRouter.push({ name: 'Products', params: {which: 'active'}});
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
                // console.log(data);
                if (data.deleteSuccess === true) {
                    const routeOfTrashedProducts = {
                        name: 'Products',
                        params: {which: 'trashed'}
                    };
                    dispatch('loadProducts', routeOfTrashedProducts);
                    const txt = `Товар «${data.productName}» удален безвозвратно.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка удаления';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },

}
