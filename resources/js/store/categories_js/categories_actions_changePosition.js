export default {

    changePosition({ dispatch, commit, state }, { entity, categoryId, direction }) {
        dispatch('closeContextMenu', null, { root: true });
        dispatch('showWaitingScreen', null, { root: true });
        const changePositionUrl = state.changePositionUrl[entity] + categoryId;
        dispatch(
                'postJson',
                {
                    url: changePositionUrl,
                    data: { direction },
                },
                { root: true }
            )
            .then((data) => {
                if (data.upDownSuccess === true) {
                    dispatch('loadCategories', entity); // получить обновленный список с сервера
                    const txt = 'Сделано.';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.8}, { root: true });
                } else {
                    const txt = 'Неудачная попытка изменения позиции.';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, { root: true });
            });
    },
}
