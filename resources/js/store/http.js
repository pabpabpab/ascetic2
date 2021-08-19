export default {
  state: {
    httpError: null,
  },
  getters: {
    httpError: (state) => state.httpError,
  },
  mutations: {
    setHttpError: (state, error) => {
      state.httpError = error;
    },
  },
  actions: {
    async getJson(context, url) {
      return fetch(url)
         .then((result) => {
             context.commit('setCsrfToken', result.headers.get('X-CSRF-Token'));
             return result.json();
         })
         .catch((error) => {
             context.commit('setHttpError', error);
         });
        // fetch(url,{method: 'GET', headers: {'X-CSRF-Token': context.getters.csrfToken}})
    },

    postJson(context, payload) {
      const { url, data } = payload;
      return fetch(url, {
        method: 'POST',
        headers: {
          'X-CSRF-Token': context.getters.csrfToken,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((result) => result.json())
        .catch((error) => {
            context.commit('setHttpError', error);
        });
    },

    postMultipart(context, payload) {
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
                  'X-CSRF-Token': context.getters.csrfToken,
                  'Accept': 'application/json',
              },
              body: formData,
          }).then((result) => result.json())
              .catch((error) => {
                  context.commit('setHttpError', error);
              });
    },

    putJson(context, payload) {
      const { url, data } = payload;
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': context.getters.csrfToken,
        },
        body: JSON.stringify(data),
      }).then((result) => result.json())
        .catch((error) => {
          context.commit('setHttpError', error);
        });
    },

    deleteJson(context, url) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': context.getters.csrfToken,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }).then((result) => result.json())
        .catch((error) => {
          context.commit('setHttpError', error);
        });
    },
  },
};
