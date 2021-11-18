import theRouter from "../../router";
import productValidation from "./functions/productValidation";

export default {

    // фронт-валидация при вводе (type-in валидация)
    typeinValidation({ dispatch, commit, rootGetters }, product) {
        dispatch('cleanPopupErrors', null, { root: true });
        if (!rootGetters.typeinValidationRequired) {
            return;
        }
        const { typeinErrors } = productValidation(product);
        commit('setTypeinErrors', typeinErrors, { root: true });
        commit('setAlarmingInputs', typeinErrors, { root: true });
    },

    async cleanValidationErrors({dispatch, commit}) {
        dispatch('cleanPopupErrors', null, { root: true });
        commit('resetAlarmingInputs', null, { root: true });
        commit('resetTypeinErrors', null, { root: true });
        commit('disableTypeinValidation', null, { root: true });
    },

    // фронт-валидация, pop-up и type-in сообщения об ошибках
    async _frontValidation({ dispatch, commit }, product) {
        const { popupErrors, typeinErrors } = productValidation(product);
        if (popupErrors) {
            dispatch('showPopupErrorsBox', popupErrors, { root: true });
            commit('enableTypeinValidation', null, { root: true });
            commit('setAlarmingInputs', popupErrors, { root: true });
            commit('setTypeinErrors', typeinErrors, { root: true });
            return false;
        }
        return true;
    },


    async saveProduct({ dispatch, commit, getters, state }, { localProduct, photos }) {
        const action = localProduct.id ? 'edit' : 'create';
        const product = {...localProduct};
        product.price = product.price.replace(/\s/g, '');

        const productId = product.id;
        await dispatch('cleanValidationErrors');

        if (!await dispatch('_frontValidation', product)) {
            return;
        }

        const saveProductUrl = productId > 0
            ? state.url['saveProduct'] + productId
            : state.url['saveProduct'];

        // добавить фото в объект продукта
        for (let i = 0; i < photos.length; i++ ) {
            product[`photos[${i}]`] = photos[i];
        }

        dispatch('showWaitingScreen', null, { root: true });

        dispatch(
                'postMultipart',
                {
                    url: saveProductUrl,
                    data: product
                },
                { root: true }
            )
            .then((data) => {
                // validatorErrors в данных формируется в форм-реквесте если валидация failed
                if (data.backValidatorErrors) {
                    dispatch('showPopupErrorsBox', data.backValidatorErrors, { root: true });
                    commit('enableTypeinValidation', null, { root: true });
                    commit('setAlarmingInputs', data.backValidatorErrors, { root: true });
                    //commit('setTypeinErrors', data.backValidatorErrors, { root: true });
                    return;
                }

                if (data.saveSuccess === true) {
                    commit('disableTypeinValidation', null, { root: true });

                    const txt = productId > 0
                        ? `Данные товара «${data.product.name}» сохранены.`
                        : `Добавлен товар «${data.product.name}»`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });


                    if (action === 'edit') {
                        commit('setSingleProductFromServer', data);
                        commit('updateProductsBySingleProduct');
                        dispatch('updateItemInPaginated', {
                            entity: 'products',
                            item: data.product,
                        }, { root: true });
                    } else {
                        commit('resetSearchObject');
                        commit('resetSearchTotalParameters');
                        commit('setSortingMode', 'position');
                        commit('addProductToProductsByFirst', data.product);
                        dispatch('sortAndPaginateProducts', getters.products)
                            .then(() => {
                                theRouter.push({ name: 'Products' });
                            });
                    }
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, { root: true });
            });
    },

}
