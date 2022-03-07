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

    deleteItemFromUsers: (state, userId) => {
        if (state.users.length === 0) {
            return;
        }
        const users = state.users;
        let index = users.findIndex(item => item.id === userId);
        if (index === -1) {
            return;
        }
        users.splice(index, 1);
        state.users = [ ...users ];
    },

    setTaskOfUserEditManager: (state, value) => {
        state.taskOfUserEditManager = value;
    },

    setVisibility: (state, { componentName, value }) => {
        const visibility = state.visibility;
        visibility[componentName] = value;
        state.visibility = visibility;
    },

};
