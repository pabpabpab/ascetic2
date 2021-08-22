export default {

    deleteProduct({ dispatch, commit, getters, state }, productId) {
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('deleteJson', getters.deleteProductUrl + productId, { root: true })
            .then((data) => {
                dispatch('cleanPopupErrors', null, { root: true });

                if (data.backValidatorErrors) {
                    dispatch('showPopupErrorsBox', data.backValidatorErrors, {root: true});
                    return;
                }

                // console.log(data);


                if (data.deleteSuccess === true) {
                    dispatch('loadProducts');
                    const txt = `Товар «${data.product.name}» удален.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 1.2}, { root: true });
                } else {
                    const txt = 'неудачная попытка удаления';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },


    restoreProduct({ dispatch, commit, getters }, productId) {
        dispatch('closeContextMenu', null, {root: true});
        dispatch('getJson', getters.restoreProductUrl + productId, { root: true })
            .then((data) => {
                // console.log(data);
                if (data.restoreSuccess === true) {
                    dispatch('loadProducts', 'trashed');
                    const txt = `Товар «${data.product.name}» восстановлен.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    // thatRouter.push({ name: 'Products', params: {which: 'active'}});
                } else {
                    const txt = 'неудачная попытка';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },


    forceDeleteProduct({ dispatch, commit, getters, state }, productId) {
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('deleteJson', getters.forceDeleteProductUrl + productId, { root: true })
            .then((data) => {
                // console.log(data);
                if (data.deleteSuccess === true) {
                    dispatch('loadProducts', 'trashed');
                    const txt = `Товар «${data.productName}» удален безвозвратно.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка удаления';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },

}
