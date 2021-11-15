export default {
    users: (state) => state.users,
    usersLength: (state) => state.users.length,
    usersCount: (state) => state.usersCount,
    singleUserFromServer: (state) => state.singleUserFromServer,
    taskOfUserEditManager: (state) => state.taskOfUserEditManager,
    visibility: (state) => (componentName) => state.visibility[componentName],
};
