export default {
    postMultipart(context, payload) {
        const csrfUrl = context.getters.csrfUrl;
        return context.dispatch('getJson', csrfUrl).then((token) => {

            const { url, data } = payload;
            const formData = new FormData();
            // вытащить свойства объекта данных и добавить их в formData
            // (среди них есть фото-ии: data.photos[0])
            for (let key in data) {
                formData.append(key, data[key]);
            }

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
