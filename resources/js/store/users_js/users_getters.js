export default {
    usersCountUrl: (state) => state.usersCountUrl,
    usersUrl: (state) => state.usersUrl,
    //
    usersCount: (state) => state.usersCount,
    showLazyUsers: (state) => state.usersCount > 1000,
    //
    searchStringOnUsers: (state) => state.searchStringOnUsers,
};
