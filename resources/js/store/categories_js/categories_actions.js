import categoryValidation from './functions/categoryValidation';
import thatRouter from './../../router/index';

export default {
    // eslint-disable-next-line no-unused-vars
    async loadSingleCategory({dispatch, commit, getters, state}, categoryId) {
        const singleCategoryUrl = getters.singleCategoryUrl + categoryId;
        dispatch('getJson', singleCategoryUrl, { root: true })
            .then((data) => {
                commit('setSingleCategoryFromServer', data);
            });
    },


    async getCategoriesCount({ dispatch, commit, getters }) {
        const url = getters.categoriesCountUrl;
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setCategoriesCountFromServer', data);
        });
    },


   async loadCategories({ dispatch, commit, getters }) {
        const url = getters.categoriesUrl;
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setCategories', data);
        });
   },

    // фронт-валидация при вводе (type-in)
    typeinValidation({ dispatch, commit, getters, rootGetters }, category) {
        commit('cleanPopupErrors', null, { root: true });
        if (!rootGetters.typeinValidationRequired) {
            return;
        }
        const { typeinErrors } = categoryValidation(category, getters.categories);
        commit('setTypeinErrors', typeinErrors, { root: true });
        commit('setAlarmingInputs', typeinErrors, { root: true });
    },



    async cleanValidationErrors({commit}) {
        commit('cleanPopupErrors', null, { root: true });
        commit('resetAlarmingInputs', null, { root: true });
        commit('resetTypeinErrors', null, { root: true });
        commit('disableTypeinValidation', null, { root: true });
    },

    // фронт-валидация, pop-up и type-in сообщения
    async _frontValidation({ commit, getters }, category) {
        const { popupErrors, typeinErrors } = categoryValidation(category, getters.categories);
        if (popupErrors) {
            commit('setPopupErrors', popupErrors, { root: true });
            commit('enableTypeinValidation', null, { root: true });
            commit('setAlarmingInputs', popupErrors, { root: true });
            commit('setTypeinErrors', typeinErrors, { root: true });
            return false;
        }
        return true;
    },

    async saveCategory({ dispatch, commit, getters, state }, category) {
        const categoryId = category.id;
        await dispatch('cleanValidationErrors');
        if (! await dispatch('_frontValidation', category)) {
            return;
        }
        const saveCategoryUrl = categoryId > 0
            ? getters.saveCategoryUrl + categoryId
            : getters.saveCategoryUrl;

        dispatch(
            'postJson',
            {
                url: saveCategoryUrl,
                data: category,
            },
            { root: true }
        )
            .then((data) => {
                // validatorErrors в данных формируется в форм-реквесте если валидация failed
                if (data.backValidatorErrors) {
                    commit('setPopupErrors', data.backValidatorErrors, { root: true });
                    commit('setAlarmingInputs', data.backValidatorErrors, { root: true });
                    commit('enableTypeinValidation', null, { root: true });
                    return;
                }

                if (data.saveSuccess === true) {
                    commit('setSingleCategoryFromServer', data.category);
                    dispatch('loadCategories'); // получить обновленный список с сервера
                    const txt = categoryId > 0
                        ? `Сохранено как «${data.category.name}»`
                        : `Создана категория «${data.category.name}»`;
                    commit('setAbsoluteMessage', txt, { root: true });
                    commit('disableTypeinValidation', null, { root: true });
                } else {
                    const errorTxt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                    commit('setAbsoluteMessage', errorTxt, { root: true });
                }

                dispatch('delayedAbsoluteMessageCleaning', null, { root: true });
            });
    },

    preDeleteCategory({ dispatch, commit, getters, state }, categoryId) {
        const singleCategoryUrl = getters.singleCategoryUrl + categoryId;
        dispatch('getJson', singleCategoryUrl, { root: true })
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
                    settings.confirmationRequestText = `Удалить категорию «${data.name}»?`;
                    settings.yesButtonText = 'Удалить';
                    settings.cancelButtonText = 'Отменить';
                    settings.yesAction = 'categories/deleteCategory';
                    settings.cancelAction = 'closeConfirmationDialog';
                    settings.yesPayload = {categoryId: data.id};
                    settings.finalRedirectRoute = 'Categories';
                }
                commit('setConfirmationDialog', settings, { root: true });
            });
    },

    deleteCategory({ dispatch, commit, getters, state }, { categoryId }) {
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('deleteJson', getters.deleteCategoryUrl + categoryId, { root: true })
            .then((data) => {
                commit('cleanPopupErrors', null, { root: true });
                // validatorErrors в данных формируется в форм-реквесте если валидация failed
                if (data.backValidatorErrors) {
                    commit('setPopupErrors', data.backValidatorErrors, { root: true });
                    return;
                }

                if (data.deleteSuccess === true) {
                    dispatch('loadCategories');
                    const txt = `Категория «${data.category.name}» удалена.`;
                    commit('setAbsoluteMessage', txt, { root: true });
                } else {
                    commit('setAbsoluteMessage', 'неудачная попытка удаления', { root: true });
                }
                dispatch('delayedAbsoluteMessageCleaning', null, { root: true });
            });
    },

};


/*
        // проверить вдруг категория уже удалена
        if (categoryId > 0) {
            if (!hasCategory(categoryId, getters.categories)) {
                commit('setAbsoluteMessage', 'Эта категория не существует.', { root: true });
                dispatch('delayedAbsoluteMessageCleaning', null, { root: true });
                // thatRouter.push({ name: 'AboutPage' });
                return;
            }
        }
*/


// для избежания редактирования удаленной страницы уйти на страницу SaveCategory
//console.log(thatRouter);
/*
if (thatRouter.app._route.name === 'EditCategory') {
    thatRouter.push({ name: 'SaveCategory' });
}
*/
