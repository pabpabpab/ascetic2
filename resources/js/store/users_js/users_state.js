export default {

    url: {
        usersCount: '/api/admin/users/count',
        users: '/api/admin/users',

        singleUser: '/api/admin/user/',
        saveUser: '/api/admin/user/save/',
        deleteUser: '/api/admin/user/delete/',
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
