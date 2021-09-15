export default {

    deleteCategory({ dispatch, state }, { entity, categoryId }) {
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('deleteJson', state.deleteCategoryUrl[entity] + categoryId, { root: true })
            .then((data) => {
                dispatch('cleanPopupErrors', null, { root: true });

                if (data.backValidatorErrors) {
                    dispatch('showPopupErrorsBox', data.backValidatorErrors, {root: true});
                    return;
                }

                if (data.deleteSuccess === true) {
                    dispatch('loadCategories', entity);
                    const txt = `«${data.category.name}» удалено`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 1.5}, { root: true });
                } else {
                    const txt = `неудачная попытка удаления`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },

}
