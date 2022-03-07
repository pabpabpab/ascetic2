export default {

  actions: {
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

    postJson(context, payload) {
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
