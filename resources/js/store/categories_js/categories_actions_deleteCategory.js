export default {

    deleteCategory({ dispatch, commit, getters, state }, { entity, categoryId }) {
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('deleteJson', getters.deleteCategoryUrl(entity) + categoryId, { root: true })
            .then((data) => {
                dispatch('cleanPopupErrors', null, { root: true });

                if (data.backValidatorErrors) {
                    commit('setPopupErrors', data.backValidatorErrors, { root: true });
                    return;
                }

                if (data.deleteSuccess === true) {
                    dispatch('loadCategories', entity);
                    const txt = `«${data.category.name}» удалено`;
                    dispatch('showAbsoluteFlashMessage', txt, { root: true });
                } else {
                    dispatch('showAbsoluteFlashMessage', 'неудачная попытка удаления', { root: true });
                }
            });
    },

}
