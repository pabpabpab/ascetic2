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

    updateUsersBySingleUser: (state) => {
        const user = state.singleUserFromServer;
        const index = state.users.findIndex(item => item.id === user.id);
        if (index === -1) {
            return;
        }
        state.users.splice(index, 1, user);
    },


    setTaskOfUserEditManager: (state, value) => {
        state.taskOfUserEditManager = value;
    },
    setShowUserEditManager: (state, value) => {
        state.showUserEditManager = value;
    },

    setShowUserSearchInput: (state, value) => {
        state.showUserSearchInput = value;
    },

};
