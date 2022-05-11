export default {
    postJson(context, payload) {
        // context.dispatch('requestsAreProhibitedMessage', 'POST');
        // return {};

        const csrfUrl = context.getters.csrfUrl;
        return context.dispatch('getJson', csrfUrl).then((token) => {

            const { url, data } = payload;
            return fetch(url, {
                method: 'POST',
                headers: {
                    'X-CSRF-Token': token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((result) => result.json())
                .catch((error) => {
                    context.dispatch('showHttpError', error);
                });

        });
    },
    postJsonWithWaitingScreen(context, url) {
        context.dispatch('showWaitingScreen', null);
        return context.dispatch('postJson', url)
            .finally(() => {
                context.dispatch('hideWaitingScreen', null);
            });
    },
};
