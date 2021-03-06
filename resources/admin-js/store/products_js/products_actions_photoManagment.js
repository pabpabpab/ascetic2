export default {

    showProductPhotoManager({ dispatch, commit, state }, product) {
        commit('setSingleProductFromServer', null);
        dispatch('closeContextMenu', null, { root: true });
        dispatch('loadSingleProduct', product.id).then(() => {
            const product = state.singleProductFromServer;
            if (product) {
                window.document.body.style.overflow = 'hidden';
                commit('setVisibility', { componentName: 'productPhotoManager', value: true });
            }
        });
    },

    closeProductPhotoManager({ commit }) {
        window.document.body.style.overflow = 'auto';
        commit('setVisibility', { componentName: 'productPhotoManager', value: false });
    },


    deletePhoto({ dispatch, commit, state }, {productId, photoName}) {
        dispatch('closeContextMenu', null, { root: true });
        const url = state.url['deleteProductPhoto'] + productId + '/' + photoName;
        dispatch('deleteJsonWithWaitingScreen', url, { root: true })
            .then((data) => {
                if (data.deleteSuccess === true) {
                    commit('setSingleProductPhoto', data.photoSet);
                    commit('updateProductsBySingleProduct');

                    dispatch('updatePhotosetOfItemInPaginated', {
                        entity: 'products',
                        itemId: productId,
                        photoSet: data.photoSet,
                    }, { root: true });

                    const txt = `Фото удалено.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.5}, { root: true });
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка удаления';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },


    rotatePhoto({ dispatch, commit, state }, {productId, photoName, angle}) {
        dispatch('closeContextMenu', null, { root: true });
        const url = state.url['rotateProductPhoto'] + productId + '/' + photoName+ '/' + angle;
        dispatch('getJsonWithWaitingScreen', url, { root: true })
            .then((data) => {
                if (data.rotateSuccess === true) {
                    commit('setSingleProductPhoto', data.photoSet);
                    commit('updateProductsBySingleProduct');
                    dispatch('updatePhotosetOfItemInPaginated', {
                        entity: 'products',
                        itemId: productId,
                        photoSet: data.photoSet,
                    }, { root: true });
                    commit('setPhotoSeoData', data.photoSeo); //обновить photoSeoData, т.к. меняется filename
                    const txt = `Сделано.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.7}, { root: true });
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },


    movePhoto({ dispatch, commit, state }, {productId, photoName, to}) {
        dispatch('closeContextMenu', null, { root: true });
        const url = state.url['moveProductPhoto'] + productId + '/' + photoName+ '/' + to;
        dispatch('getJsonWithWaitingScreen', url, { root: true })
            .then((data) => {
                if (data.moveSuccess === true) {
                    commit('setSingleProductPhoto', data.photoSet);
                    commit('updateProductsBySingleProduct');

                    dispatch('updatePhotosetOfItemInPaginated', {
                        entity: 'products',
                        itemId: productId,
                        photoSet: data.photoSet,
                    }, { root: true });

                    const txt = `Сделано.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.5}, { root: true });
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },


    movePhotoByDragAndDrop: {
        root: true,
        handler ({ dispatch, commit, state }, {currentIndex, newIndex, vector}) {
            const productId = state.singleProductFromServer.product.id;
            const photoSet = JSON.parse(state.singleProductFromServer.product.photo_set)
            const operatedPhotoName = photoSet[currentIndex];
            const targetPhotoName = photoSet[newIndex];

            commit('movePhoto', {currentIndex, newIndex, vector});

            dispatch (
                    'postJsonWithWaitingScreen',
                    {
                        url: state.url['moveByDragAndDropPhoto'] + productId,
                        data: { operatedPhotoName, targetPhotoName, vector },
                    },
                    { root: true }
                )
                .then((data) => {
                    if (data.moveSuccess === true) {
                        commit('setSingleProductPhoto', data.photoSet);
                        commit('updateProductsBySingleProduct');

                        dispatch('updatePhotosetOfItemInPaginated', {
                            entity: 'products',
                            itemId: productId,
                            photoSet: data.photoSet,
                        }, { root: true });

                        const txt = `Сделано.`;
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.5}, { root: true });
                    } else {
                        const txt = data.customExceptionMessage ?? 'Неудачная попытка перемещения.';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    }
                });
        }
    },


    addPhotos({ dispatch, commit, state }, { productId, photos }) {
        const addPhotoUrl = state.url['addProductPhoto'] + productId;

        const productPhotos = {};

        // добавить фото в объект продукта
        for (let i = 0; i < photos.length; i++ ) {
            productPhotos[`photos[${i}]`] = photos[i];
        }

        dispatch(
                'postMultipartWithWaitingScreen',
                {
                    url: addPhotoUrl,
                    data: productPhotos,
                },
                { root: true }
            )
            .then((data) => {
                if (data.addSuccess === true) {
                    commit('setSingleProductPhoto', data.photoSet);

                    commit('updateProductsBySingleProduct');

                    dispatch('updatePhotosetOfItemInPaginated', {
                        entity: 'products',
                        itemId: productId,
                        photoSet: data.photoSet,
                    }, { root: true });

                    const txt = `Добавлено.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },

}
