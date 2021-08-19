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

}
