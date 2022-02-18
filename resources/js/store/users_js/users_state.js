export default {

    url: {
        usersCount: '/admin-js/users/count',
        users: '/admin-js/users',

        singleUser: '/admin-js/user/',
        saveUser: '/admin-js/user/save/',
        deleteUser: '/admin-js/user/delete/',
    },

    usersCount: -1,
    users: [],
    singleUserFromServer: {},

    taskOfUserEditManager: '', // user / password

    visibility: {
        userSearchInput: false,
        userEditManager: false,
    },
};
