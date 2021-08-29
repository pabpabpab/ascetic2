export default {

    moveProduct: {
        root: true,
        handler ({ dispatch, commit, getters, state }, {currentIndex, newIndex, vector}) {
            // именно в такой последовательности
            const operatedId = state.products[currentIndex]['id'];
            const closestId = state.products[newIndex]['id'];
            commit('moveProduct', {currentIndex, newIndex, vector});

            dispatch('showWaitingScreen', null, { root: true });

            dispatch (
                'postJson',
                {
                    url: getters.moveProductUrl + operatedId,
                    data: { closestId, vector },
                },
                { root: true }
            )
                .then((data) => {
                    if (data.moveSuccess === true) {
                        dispatch('loadProducts', 'active'); // получить обновленный список с сервера
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
