import thatRouter from "../../router";

export default {

    async saveProduct({ dispatch, commit, getters, state }, { localProduct, photos }) {
        const action = localProduct.id ? 'edit' : 'create';
        const product = {...localProduct};
        product.price = product.price.replace(/\s/g, '');
        //console.log(localProduct);
        //console.log(photos);

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

        // console.log(product);

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

                dispatch('hideWaitingScreen', null, { root: true });

                if (data.backValidatorErrors) {
                    // dispatch('hideWaitingScreen', null, { root: true });
                    dispatch('showPopupErrorsBox', data.backValidatorErrors, { root: true });
                    commit('enableTypeinValidation', null, { root: true });
                    commit('setAlarmingInputs', data.backValidatorErrors, { root: true });
                    //commit('setTypeinErrors', data.backValidatorErrors, { root: true });
                    return;
                }

                //console.log(data);

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

                        commit('addProductToProductsByFirst', data.product);

                        dispatch('setFiltered', {entity: 'products', data: getters.products}, {root: true})
                            .then(() => {
                                dispatch('divideIntoPages', {
                                    entity: 'products',
                                    customQuantityPerPage: 0 // этот параметр для совместимости
                                }, {root: true});
                            })
                            .then(() => {
                                thatRouter.push({name: 'Products', params: {which: 'active', withoutReload: 'yes'}});
                            });
                        
                        //thatRouter.push({ name: 'Products', params: {which: 'active'}});
                    }
                } else {
                    // dispatch('hideWaitingScreen', null, { root: true });
                    const txt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },

}
