export default {

    preDeleteProduct({dispatch, commit, getters, state}, productId) {
        dispatch('closeContextMenu', null, {root: true});
        const singleProductUrl = getters.singleProductUrl + productId;
        dispatch('getJson', singleProductUrl, {root: true})
            .then((data) => {
                const settings = {};
                settings.confirmationRequestText = `Удалить товар «${data.product.name}»?`;
                settings.yesButtonText = 'Удалить';
                settings.cancelButtonText = 'Отменить';
                settings.yesAction = 'products/deleteProduct';
                settings.cancelAction = 'closeConfirmationDialog';
                settings.yesPayload = data.product.id;
                settings.finalRedirectRoute = 'Products';
                dispatch('showConfirmationDialog', settings, {root: true});
            });
    },

}
