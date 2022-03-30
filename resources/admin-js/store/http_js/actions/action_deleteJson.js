export default {
    deleteJson(context, url) {
        const csrfUrl = context.getters.csrfUrl;
        return context.dispatch('getJson', csrfUrl).then((token) => {

            return fetch(url, {
                method: 'DELETE',
                headers: {
                    'X-CSRF-Token': token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
                .then((result) => result.json())
                .then((data) => {
                    context.dispatch('checkIfAccessDenied', data.accessDeniedReason);
                    return data;
                })
                .catch((error) => {
                    context.dispatch('showHttpError', error);
                });

        });
    },

    deleteJsonWithWaitingScreen(context, url) {
        context.dispatch('showWaitingScreen', null);
        return context.dispatch('deleteJson', url)
            .finally(() => {
                context.dispatch('hideWaitingScreen', null);
            });
    },
};
