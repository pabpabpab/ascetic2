export default {

    changePosition({ dispatch, commit, getters, state }, { entity, categoryId, direction }) {
        dispatch('closeContextMenu', null, { root: true });
        dispatch('showFullScreenStub', null, { root: true });
        const changePositionUrl = getters.changePositionUrl(entity) + categoryId;
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
                    dispatch('showAbsoluteFlashMessage', 'Сделано.', { root: true });
                    //закрытие заглушки в loadCategories // dispatch('closeFullScreenStub', null, { root: true });
                } else {
                    dispatch('closeFullScreenStub', null, { root: true });
                    setTimeout(() => {
                        dispatch('showAbsoluteFlashMessage', 'Неудачная попытка изменения позиции.', { root: true });
                    }, 500);
                }
            });
    },
}
