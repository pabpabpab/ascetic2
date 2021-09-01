export default {
    usersCountUrl: (state) => state.usersCountUrl,
    usersUrl: (state) => state.usersUrl,
    quantityPerPage: (state) => state.quantityPerPage,
    //
    usersCount: (state) => state.usersCount,
    showLazyUsers: (state) => state.usersCount > 1000,
};
