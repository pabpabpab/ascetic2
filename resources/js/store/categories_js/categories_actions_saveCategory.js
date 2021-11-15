import categoryValidation from "./functions/categoryValidation";

export default {

    // фронт-валидация при вводе (type-in)
    typeinValidation({ dispatch, commit, getters, rootGetters }, { entity, category }) {
        dispatch('cleanPopupErrors', null, { root: true });
        if (!rootGetters.typeinValidationRequired) {
            return;
        }
        const categories = getters.categories[entity];
        const { typeinErrors } = categoryValidation(category, categories);
        commit('setTypeinErrors', typeinErrors, { root: true });
        commit('setAlarmingInputs', typeinErrors, { root: true });
    },

    // обнулить ошибки
    async cleanValidationErrors({dispatch, commit}) {
        dispatch('cleanPopupErrors', null, { root: true });
        commit('resetAlarmingInputs', null, { root: true });
        commit('resetTypeinErrors', null, { root: true });
        commit('disableTypeinValidation', null, { root: true });
    },

    // фронт-валидация, pop-up и type-in сообщения
    async _frontValidation({ dispatch, commit, getters }, { entity, category }) {
        const categories = getters.categories[entity];
        const { popupErrors, typeinErrors } = categoryValidation(category, categories);
        if (popupErrors) {
            dispatch('showPopupErrorsBox', popupErrors, { root: true });
            commit('enableTypeinValidation', null, { root: true });
            commit('setAlarmingInputs', popupErrors, { root: true });
            commit('setTypeinErrors', typeinErrors, { root: true });
            return false;
        }
        return true;
    },

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
