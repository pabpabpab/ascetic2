export default {

    async saveCategory({dispatch, commit, state}, {entity, category}) {
        const categoryId = category.id;
        await dispatch('cleanValidationErrors');
        if (!await dispatch('_frontValidation', {entity, category})) {
            return;
        }
        const saveCategoryUrl = categoryId > 0
            ? state.saveCategoryUrl[entity] + categoryId
            : state.saveCategoryUrl[entity];

        dispatch(
            'postJson',
            {
                url: saveCategoryUrl,
                data: category,
            },
            {root: true}
        )
            .then((data) => {
                // validatorErrors в данных формируется в форм-реквесте если валидация failed
                if (data.backValidatorErrors) {
                    dispatch('showPopupErrorsBox', data.backValidatorErrors, {root: true});
                    commit('setAlarmingInputs', data.backValidatorErrors, {root: true});
                    commit('enableTypeinValidation', null, {root: true});
                    return;
                }

                if (data.saveSuccess === true) {
                    commit('setSingleCategoryFromServer', data.category);
                    dispatch('loadCategories', entity); // получить обновленный список с сервера
                    dispatch('scrollWindowBottom', null, {root: true});
                    const txt = categoryId > 0
                        ? `Сохранено как «${data.category.name}»`
                        : `Создано «${data.category.name}»`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 1.5}, {root: true});
                    commit('disableTypeinValidation', null, {root: true});
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, {root: true});
                }
            });
    },
}
