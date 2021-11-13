import userValidation from './functions/userValidation';
import thatRouter from "../../router";

export default {

    // фронт-валидация при вводе (type-in валидация)
    typeinValidation({ dispatch, commit, getters, rootGetters }, user) {
        dispatch('cleanPopupErrors', null, { root: true });
        if (!rootGetters.typeinValidationRequired) {
            return;
        }
        const { typeinErrors } = userValidation(user, getters.taskOfUserEditManager);
        commit('setTypeinErrors', typeinErrors, { root: true });
        commit('setAlarmingInputs', typeinErrors, { root: true });
    },

    async cleanValidationErrors({dispatch, commit}) {
        dispatch('cleanPopupErrors', null, { root: true });
        commit('resetAlarmingInputs', null, { root: true });
        commit('resetTypeinErrors', null, { root: true });
        commit('disableTypeinValidation', null, { root: true });
    },

    // фронт-валидация, pop-up и type-in сообщения об ошибках
    async _frontValidation({ dispatch, commit, getters }, user) {
        const { popupErrors, typeinErrors } = userValidation(user, getters.taskOfUserEditManager);
        if (popupErrors) {
            dispatch('showPopupErrorsBox', popupErrors, { root: true });
            commit('enableTypeinValidation', null, { root: true });
            commit('setAlarmingInputs', popupErrors, { root: true });
            commit('setTypeinErrors', typeinErrors, { root: true });
            return false;
        }
        return true;
    },


    async saveUser({ dispatch, commit, getters, state }, user) {
        const action = user.id ? 'edit' : 'create';
        const sendingEmail = Boolean(user.send_confirm_registration || user.send_reset_password);

        await dispatch('cleanValidationErrors');
        if (!await dispatch('_frontValidation', user)) {
            return;
        }
        if (action === 'create') {
            commit('setTaskOfUserEditManager', '');
        } else {
            user.editTask = getters.taskOfUserEditManager;
        }

        dispatch(
            'postJson',
            {
                url: user.id > 0 ? state.url['saveUser'] + user.id : state.url['saveUser'],
                data: user
            },
            {root: true}
        )
            .then((data) => {
                // validatorErrors в данных формируется в форм-реквесте если валидация failed
                if (data.backValidatorErrors) {
                    dispatch('showPopupErrorsBox', data.backValidatorErrors, { root: true });
                    commit('enableTypeinValidation', null, { root: true });
                    commit('setAlarmingInputs', data.backValidatorErrors, { root: true });
                    //commit('setTypeinErrors', data.backValidatorErrors, { root: true });
                    return;
                }

                if (data.saveSuccess === true) {
                    commit('disableTypeinValidation', null, { root: true });
                    let txt = action === 'edit'
                        ? `Данные пользователя «${data.user.email}» сохранены`
                        : `Добавлен пользователь «${data.user.email}»`;
                    txt = sendingEmail ? txt + ', письмо отправлено.' : txt;
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });

                    if (action === 'edit') {
                        commit('setSingleUserFromServer', data.user);
                        commit('updateUsersBySingleUser');
                        dispatch('updateItemInPaginated', {
                            entity: 'users',
                            item: data.user,
                        }, { root: true });
                    } else {
                        commit('addUserToUsersByFirst', data.user);
                        dispatch('paginateUsers', getters.users)
                            .then(() => {
                                thatRouter.push({name: 'Users'});
                            });
                    }
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });

    },


};
