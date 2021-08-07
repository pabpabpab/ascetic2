import thatRouter from "../../router";

export default {


    async saveProduct({ dispatch, commit, getters, state }, { localProduct, photos }) {
        const product = {...localProduct};
        product.price = product.price.replace(/\s/g, '');
        //console.log(localProduct);
        //console.log(photos);

        const productId = product.id;
        await dispatch('cleanValidationErrors');

        if (! await dispatch('_frontValidation', product)) {
            return;
        }

        const saveProductUrl = productId > 0
            ? getters.saveProductUrl + productId
            : getters.saveProductUrl;


        // добавить фото в объект продукта
        for (let i = 0; i < photos.length; i++ ) {
            product[`photos[${i}]`] = photos[i];
        }


        // console.log(product);

        dispatch('showFullScreenStub', null, { root: true });

        dispatch(
            'postMultipart',
            {
                url: saveProductUrl,
                data: product
                //data: {textObject: product, photos: photos},
            },
            { root: true }
        )
            .then((data) => {
                // console.log(data);

                // validatorErrors в данных формируется в форм-реквесте если валидация failed
                if (data.backValidatorErrors) {
                    dispatch('closeFullScreenStub', null, { root: true });
                    dispatch('showPopupErrorsBox', data.backValidatorErrors, { root: true });
                    commit('enableTypeinValidation', null, { root: true });
                    commit('setAlarmingInputs', data.backValidatorErrors, { root: true });
                    //commit('setTypeinErrors', data.backValidatorErrors, { root: true });
                    return;
                }


                if (data.saveSuccess === true) {
                    //commit('setSingleProductFromServer', data.product);
                    commit('disableTypeinValidation', null, { root: true });

                    const txt = productId > 0
                        ? `Данные товара «${data.product.name}» сохранены`
                        : `Добавлен товар «${data.product.name}»`;
                    dispatch('showAbsoluteFlashMessage', txt, { root: true });

                    thatRouter.push({ name: 'Products'});
                } else {
                    dispatch('closeFullScreenStub', null, { root: true });
                    const errorTxt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                    dispatch('showAbsoluteFlashMessage', errorTxt, { root: true });
                }
            });
    },

}
