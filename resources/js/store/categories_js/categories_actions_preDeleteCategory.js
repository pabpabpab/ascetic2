export default {

    preDeleteCategory({dispatch, commit, state}, {entity, categoryId}) {
        dispatch('closeContextMenu', null, {root: true});
        const singleCategoryUrl = state.singleCategoryUrl[entity] + categoryId;
        dispatch('getJsonWithWaitingScreen', singleCategoryUrl, {root: true})
            .then((data) => {
                const settings = {};
                if (data.products_count > 0) {
                    settings.confirmationRequestText = `В категории «${data.name}» ${data.products_count} товаров,
                        удалите или перенесите товары из категории, затем удалите пустую категорию.`;
                    settings.yesButtonText = '';
                    settings.cancelButtonText = 'Закрыть';
                    settings.yesAction = '';
                    settings.cancelAction = 'closeConfirmationDialog';
                    settings.yesPayload = {};
                    settings.finalRedirectRoute = '';
                } else {
                    settings.confirmationRequestText = `Удалить «${data.name}»?`;
                    settings.yesButtonText = 'Удалить';
                    settings.cancelButtonText = 'Отменить';
                    settings.yesAction = 'categories/deleteCategory';
                    settings.cancelAction = 'closeConfirmationDialog';
                    settings.yesPayload = {entity: entity, categoryId: data.id};
                    settings.finalRedirectRoute = 'Categories';
                }
                dispatch('showConfirmationDialog', settings, {root: true});
            });
    },

}
