export default {

    preDeleteUser({ dispatch }, user) {
        dispatch('closeContextMenu', null, {root: true});
        const settings = {};
        settings.yesButtonText = 'Удалить';
        settings.cancelButtonText = 'Отменить';
        settings.yesPayload = user;
        settings.cancelAction = 'closeConfirmationDialog';
        settings.finalRedirectRoute = 'Users';
        settings.confirmationRequestText = `Удалить пользователя «${user.email}»?`;
        settings.yesAction = 'users/deleteUser';
        dispatch('showConfirmationDialog', settings, {root: true});
    },


    deleteUser({ dispatch, commit, state }, user) {
        //console.log(user);
        dispatch('closeConfirmationDialog', null, { root: true });
        dispatch('deleteJson', state.url['deleteUser'] + user.id, { root: true })
            .then((data) => {
                if (data.deleteSuccess === true) {
                    dispatch('loadUsers');
                    const txt = `Пользователь «${user.email}» удален.`;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                } else {
                    const txt = 'неудачная попытка удаления';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },

};
