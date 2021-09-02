export default {

    moveProductByDragAndDrop: {
        root: true,
        handler ({ dispatch, commit, getters, state, rootState }, {currentIndex, newIndex, vector}) {

            const currentPageIndex = rootState.pagination.currentPage.products;
            const products = rootState.pagination.customized.products[currentPageIndex];

            const operatedId = products[currentIndex]['id'];
            const targetId = products[newIndex]['id'];

            commit('moveProductInProductsById', {operatedId, targetId});

            dispatch('moveItemInPaginated', {
                currentIndexInPage: currentIndex,
                newIndexInPage: newIndex,
                operatedId: operatedId,
                targetId: targetId,
                entity: 'products'
            }, { root: true });


            // dispatch('showWaitingScreen', null, { root: true });

            dispatch (
                'postJson',
                {
                    url: getters.moveProductUrl + operatedId,
                    data: { targetId, vector },
                },
                { root: true }
            )
                .then((data) => {
                    if (data.moveSuccess === true) {
                        //dispatch('loadProducts', 'active'); // получить обновленный список с сервера
                        const txt = 'Сделано.';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.8}, { root: true });
                        //закрытие заглушки в loadProducts // dispatch('hideWaitingScreen', null, { root: true });
                    } else {
                        dispatch('loadProducts', 'active'); // отобразить обратно
                        const txt = 'Неудачная попытка перемещения.';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    }
                });
        }
    },
}
