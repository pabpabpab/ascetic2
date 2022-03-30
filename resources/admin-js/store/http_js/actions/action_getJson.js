export default {
    async getJson(context, url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then((result) => {
                //context.commit('setCsrfToken', result.headers.get('X-CSRF-Token'));
                return result.json();
            })
            .then((data) => {
                context.dispatch('checkIfAccessDenied', data.accessDeniedReason);
                return data;
            })
            .catch((error) => {
                context.dispatch('showHttpError', error);
            });
        // fetch(url,{method: 'GET', headers: {'X-CSRF-Token': token}})
    },

    getJsonWithWaitingScreen(context, url) {
        context.dispatch('showWaitingScreen', null);
        return context.dispatch('getJson', url)
            .finally(() => {
                context.dispatch('hideWaitingScreen', null);
            });
    },
};
