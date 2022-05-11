export default {
    postMultipart(context, payload) {
        // context.dispatch('requestsAreProhibitedMessage', 'POST');
        // return {};

        const csrfUrl = context.getters.csrfUrl;
        return context.dispatch('getJson', csrfUrl).then((token) => {

            const { url, data } = payload;
            const formData = new FormData();
            // получить свойства объекта данных и добавить их в formData
            // (среди них есть фото-ии: data.photos[0])
            Object.keys(data).forEach((key) => formData.append(key, data[key]));

            return fetch(url, {
                method: 'POST',
                headers: {
                    'X-CSRF-Token': token,
                    'Accept': 'application/json',
                },
                body: formData,
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

    postMultipartWithWaitingScreen(context, url) {
        context.dispatch('showWaitingScreen', null);
        return context.dispatch('postMultipart', url)
            .finally(() => {
                context.dispatch('hideWaitingScreen', null);
            });
    },
};
