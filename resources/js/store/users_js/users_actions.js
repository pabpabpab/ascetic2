export default {
    /* eslint object-curly-newline: ["error", {
     "ObjectExpression": "always",
     "ObjectPattern": "never"
     }]
  */
    // ============================посчитать юзеров на сервере============================
    getUsersCount({ dispatch, commit, getters, state }) {
        const url = getters.usersCountUrl;
        dispatch('getJson', url, { root: true }).then((data) => {
            //console.log(data);
            commit('setUsersCount', data);
        });
    },
    // ============================загрузка всех юзеров с сервера============================
    loadUsers({ dispatch, commit, getters, state }) {
        const url = getters.usersUrl;
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setUsers', data);
            dispatch('setFiltered', { entity: 'users', data: data }, { root: true }).then(() => {
                // ниже передаю параметр quantityPerPage = 0 для совместимости,
                // так как данный action может вызываться из других компонентов с параметром quantityPerPage
                dispatch('divideIntoPages',  {
                    entity: 'users',
                    customQuantityPerPage: 0
                }, { root: true });
                dispatch('hideWaitingScreen', null, { root: true });
            });
        });
    },
};
