export default {

    async saveCategory({dispatch, commit, getters}, {entity, category}) {
        const categoryId = category.id;
        await dispatch('cleanValidationErrors');
        if (!await dispatch('_frontValidation', {entity, category})) {
            return;
        }
        const saveCategoryUrl = categoryId > 0
            ? getters.saveCategoryUrl(entity) + categoryId
            : getters.saveCategoryUrl(entity);

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

                // console.log(data);

                if (data.saveSuccess === true) {
                    commit('setSingleCategoryFromServer', data.category);
                    dispatch('loadCategories', entity); // получить обновленный список с сервера
                    dispatch('scrollWindowBottom', null, {root: true});
                    const txt = categoryId > 0
                        ? `Сохранено как «${data.category.name}»`
                        : `Создано «${data.category.name}»`;
                    dispatch('showAbsoluteFlashMessage', txt, {root: true});
                    commit('disableTypeinValidation', null, {root: true});
                } else {
                    const errorTxt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                    dispatch('showAbsoluteFlashMessage', errorTxt, {root: true});
                }
            });
    },
}
