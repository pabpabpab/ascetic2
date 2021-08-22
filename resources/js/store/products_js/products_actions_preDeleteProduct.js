export default {

    preDeleteProduct({dispatch, commit, getters, state}, product) {
        dispatch('closeContextMenu', null, {root: true});

        const settings = {};
        settings.yesButtonText = 'Удалить';
        settings.cancelButtonText = 'Отменить';
        settings.yesPayload = product.id;
        settings.cancelAction = 'closeConfirmationDialog';
        settings.finalRedirectRoute = 'Products';

        if (product.deleted_at) {
            settings.confirmationRequestText = `Удалить товар «${product.name}» безвозвратно?`;
            settings.yesAction = 'products/forceDeleteProduct';
        } else {
            settings.confirmationRequestText = `Удалить товар «${product.name}»?`;
            settings.yesAction = 'products/deleteProduct';
        }

        dispatch('showConfirmationDialog', settings, {root: true});
    },

}
