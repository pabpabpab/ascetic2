import userValidation from './functions/userValidation';
import thatRouter from "../../router";

export default {

    // фронт-валидация при вводе (type-in валидация)
    typeinValidation({ dispatch, commit, rootGetters }, user) {
        dispatch('cleanPopupErrors', null, { root: true });
        if (!rootGetters.typeinValidationRequired) {
            return;
        }
        const { typeinErrors } = userValidation(user);
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
    async _frontValidation({ dispatch, commit }, user) {
        const { popupErrors, typeinErrors } = userValidation(user);
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
        // console.log(user);
        const userId = user.id;
        await dispatch('cleanValidationErrors');

        if (!await dispatch('_frontValidation', user)) {
            return;
        }
        const saveUserUrl = userId > 0
            ? state.url['saveUser'] + userId
            : state.url['saveUser'];

        dispatch(
            'postJson',
            {
                url: saveUserUrl,
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

                //console.log(data.user);

                if (data.saveSuccess === true) {
                    commit('disableTypeinValidation', null, { root: true });
                    const txt = userId > 0
                        ? `Данные пользователя «${data.user.email}» сохранены.`
                        : `Добавлен пользователь «${data.user.email}»`;
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
                        dispatch('setFiltered', {entity: 'users', data: getters.users}, {root: true})
                            .then(() => {
                                dispatch('divideIntoPages', {
                                    entity: 'users',
                                    customQuantityPerPage: 0 // этот параметр для совместимости
                                }, {root: true});
                            })
                            .then(() => {
                                thatRouter.push({name: 'Users', params: {withoutReload: 'yes'}});
                            });

                    }
                } else {
                    const txt = data.customExceptionMessage ?? 'неудачная попытка сохранения';
                    dispatch('showAbsoluteFlashMessage', {text: txt, sec: 2}, { root: true });
                }
            });
    },


};
