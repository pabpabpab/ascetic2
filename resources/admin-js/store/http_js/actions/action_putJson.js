export default {
    putJson(context, payload) {
        const csrfUrl = context.getters.csrfUrl;
        return context.dispatch('getJson', csrfUrl).then((token) => {

            const {url, data} = payload;
            return fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-Token': token,
                },
                body: JSON.stringify(data),
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
};
