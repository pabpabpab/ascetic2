export default {
    setUsersCount: (state, count) => {
        state.usersCount = count;
    },
    setSingleUserFromServer: (state, user) => {
        state.singleUserFromServer = { ...user };
    },
    setUsers: (state, data) => {
        state.users = [ ...data ];
    },
    addUserToUsersByFirst: (state, user) => {
        const users = state.users;
        users.splice(0, 0, user);
        state.users = [ ...users ];
    },
    /*
    addUserToUsers: (state, user) => {
        //console.log(user);
        const users = state.users.concat(user);
        state.users = [ ...users ];
    },
   */
    updateUsersBySingleUser: (state) => {
        const user = state.singleUserFromServer;
        const index = state.users.findIndex(item => item.id === user.id);
        if (index === -1) {
            return;
        }
        state.users.splice(index, 1, user);
    },





    setShowUserEditManager: (state, value) => {
        state.showUserEditManager = value;
    },
    setEnabledFadingCss: (state, value) => {
        state.enabledFadingCss = value;
    },
};
