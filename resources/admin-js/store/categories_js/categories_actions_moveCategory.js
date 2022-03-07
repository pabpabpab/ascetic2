export default {

    moveCategory: {
        root: true,
        handler ({ dispatch, commit, state }, {currentIndex, newIndex, entity}) {
            // именно в такой последовательности
            const operatedCategoryId = state.categories[entity][currentIndex]['id'];
            commit('moveCategory', {currentIndex, newIndex, entity});
            const closestTopCategoryId = newIndex === 0 ? 0 : state.categories[entity][newIndex-1]['id'];

            dispatch('showWaitingScreen', null, { root: true });
            const moveUrl = state.moveUrl[entity] + operatedCategoryId;

            dispatch (
                    'postJson',
                    {
                        url: moveUrl,
                        data: { closestTopCategoryId, entity },
                    },
                    { root: true }
                )
                .then((data) => {
                    if (data.moveSuccess === true) {
                        dispatch('loadCategories', entity); // получить обновленный список с сервера
                        const txt = 'Сделано.';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.8}, { root: true });
                    } else {
                        dispatch('loadCategories', entity); // отобразить обратно
                        const txt = 'Неудачная попытка перемещения.';
                        dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                    }
                })
                .finally(() => {
                    dispatch('hideWaitingScreen', null, { root: true });
                });
        }
    },
}
