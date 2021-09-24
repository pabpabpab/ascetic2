export default {

    users: (state) => state.users,
    usersCount: (state) => state.usersCount,
    singleUserFromServer: (state) => state.singleUserFromServer,
    //showLazyUsers: (state) => state.usersCount > 1000,

    taskOfUserEditManager: (state) => state.taskOfUserEditManager,
    showUserEditManager: (state) => state.showUserEditManager,
    enabledFadingCss: (state) => state.enabledFadingCss,
};
