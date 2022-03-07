export default {

    deleteCategory({ dispatch, state }, { entity, categoryId }) {
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('showWaitingScreen', null, { root: true });
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
                    dispatch('_showFailureReason', {entity, categoryId});
                }
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, { root: true });
            });
    },


    _showFailureReason({dispatch, state}, {entity, categoryId}) {
        dispatch('loadSingleCategory', {entity, categoryId}).then((data) => {
            let txt;
            if (data.trashed_products_count > 0) {
                txt = `Не удалось удалить категорию.
                       Причина: в удаленных товарах («Товары/Удаленные») есть товары этой категории
                       (${data.trashed_products_count} шт.).
                       Варианты: 1) Удалите эти товары безвозвратно из удаленных,
                       после удалите категорию. 2) Или поменяйте в удаленном товаре категорию
                       (через редактирование товара), после удалите категорию.`;
            } else {
                txt = `Не удалось удалить категорию.`;
            }
            dispatch('showInformationDialog', txt, {root: true});
        });
    },

}
