import getJson from './actions/action_getJson';
import postJson from './actions/action_postJson';
import postMultipart from './actions/action_postMultipart';
import putJson from './actions/action_putJson';
import deleteJson from './actions/action_deleteJson';

export default {

    actions: {
        ...getJson,
        ...postJson,
        ...postMultipart,
        ...putJson,
        ...deleteJson,

        showHttpError({dispatch}, error) {
            dispatch('hideWaitingScreen', null);
            const settings = {};
            settings.confirmationRequestText = error;
            settings.yesButtonText = '';
            settings.cancelButtonText = 'Закрыть';
            settings.yesAction = '';
            settings.cancelAction = 'closeConfirmationDialog';
            settings.yesPayload = {};
            settings.finalRedirectRoute = '';
            dispatch('showConfirmationDialog', settings);
        },

        checkIfAccessDenied({dispatch}, reason) {
            if (!reason) {
                return;
            }
            if (reason === 'unauthorizedUser') {
                document.location.href = '/login';
                return;
            }
            if (reason === 'userIsNotAdmin') {
                document.location.href = '/';
            }
        },
    },
};
