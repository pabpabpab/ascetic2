export default {

    moveProductByDragAndDrop: {
        root: true,
        handler ({ dispatch, commit, state, rootState }, {currentIndex, newIndex, vector}) {

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

            dispatch (
                    'postJson',
                    {
                        url: state.url['moveProduct'] + operatedId,
                        data: { targetId, vector },
                    },
                    { root: true }
                )
                .then((data) => {
                    if (data.moveSuccess === true) {
                        const txt = 'Сделано.';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.8}, { root: true });
                    } else {
                        commit('setNeedReload', { entity: 'products', value: true });
                        dispatch('showProducts');
                        const txt = 'Неудачная попытка перемещения.';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    }
                });
        }
    },
}
