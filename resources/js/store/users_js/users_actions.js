export default {
    /* eslint object-curly-newline: ["error", {
     "ObjectExpression": "always",
     "ObjectPattern": "never"
     }]
  */
    // ============================посчитать юзеров на сервере============================
    getUsersCount({ dispatch, commit, getters, state }) {
        const url = getters.usersCountUrl;
        dispatch('getJson', url).then((data) => {
            console.log(data);
            commit('setUsersCount', data);
        });
    },
    // ============================загрузка всех юзеров с сервера============================
    loadUsers({ dispatch, commit, getters, state }, moduleName) {
        const url = getters.usersUrl;
        dispatch('getJson', url).then((data) => {
            commit('setUsers', data);
            commit('setFilteredUsers', data);

            // ниже передаю параметр quantityPerPage из стора для совместимости,
            // так как данный action может вызываться из других компонентов с параметром quantityPerPage
            dispatch('divideIntoPages',  {
                moduleName: moduleName,
                customQuantityPerPage: state.quantityPerPage
            });
        });
    },
};
