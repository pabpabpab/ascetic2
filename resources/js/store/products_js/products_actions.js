import productValidation from './functions/productValidation';
import getFormattedPrice from './functions/getFormattedPrice';
import thatRouter from './../../router/index';

export default {
    // eslint-disable-next-line no-unused-vars
    async loadSingleProduct({dispatch, commit, getters, state}, productId) {
        const singleProductUrl = getters.singleProductUrl + productId;
        dispatch('getJson', singleProductUrl, { root: true })
            .then((data) => {
                commit('setSingleProductFromServer', data);
            });
    },

    async getProductsCount({ dispatch, commit, getters }) {
        const url = getters.productsCountUrl;
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setProductsCountFromServer', data);
        });
    },

    async loadProducts({ dispatch, commit, getters }) {
        const url = getters.productsUrl;
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setProducts', data);
        });
    },

    // фронт-валидация при вводе (type-in)
    typeinValidation({ dispatch, commit, getters, rootGetters }, product) {
        commit('cleanPopupErrors', null, { root: true });
        if (!rootGetters.typeinValidationRequired) {
            return;
        }
        const { typeinErrors } = productValidation(product);
        commit('setTypeinErrors', typeinErrors, { root: true });
        commit('setAlarmingInputs', typeinErrors, { root: true });
    },

    async cleanValidationErrors({commit}) {
        commit('cleanPopupErrors', null, { root: true });
        commit('resetAlarmingInputs', null, { root: true });
        commit('resetTypeinErrors', null, { root: true });
        commit('disableTypeinValidation', null, { root: true });
    },

    async formatPrice(context, price) {
        return getFormattedPrice(price);
    },


    // фронт-валидация, pop-up и type-in сообщения
    async _frontValidation({ commit, getters }, product) {
        const { popupErrors, typeinErrors } = productValidation(product);
        if (popupErrors) {
            commit('setPopupErrors', popupErrors, { root: true });
            commit('enableTypeinValidation', null, { root: true });
            commit('setAlarmingInputs', popupErrors, { root: true });
            commit('setTypeinErrors', typeinErrors, { root: true });
            return false;
        }
        return true;
    },

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


        console.log(product);



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
                console.log(data);

                // validatorErrors в данных формируется в форм-реквесте если валидация failed

                if (data.backValidatorErrors) {
                    commit('setPopupErrors', data.backValidatorErrors, { root: true });
                    commit('enableTypeinValidation', null, { root: true });
                    commit('setAlarmingInputs', data.backValidatorErrors, { root: true });
                    //commit('setTypeinErrors', data.backValidatorErrors, { root: true });
                    return;
                }


                if (data.saveSuccess === true) {
                    //commit('setSingleProductFromServer', data.product);
                    // dispatch('loadCategories'); // получить обновленный список с сервера
                    commit('disableTypeinValidation', null, { root: true });
                    const txt = productId > 0
                        ? `Данные товара «${data.product.name}» сохранены`
                        : `Добавлен товар «${data.product.name}»`;
                    commit('setAbsoluteMessage', txt, { root: true });
                    dispatch('delayedAbsoluteMessageCleaning', null, { root: true });

                    thatRouter.push({ name: 'Products'});
                    //return;

                } else {
                    const errorTxt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                    commit('setAbsoluteMessage', errorTxt, { root: true });
                    dispatch('delayedAbsoluteMessageCleaning', null, { root: true });
                }
            });
    },



};
