export default {
    // ===========================usersCount======================
    setUsersCount: (state, count) => {
        state.usersCount = count;
    },
    // ===========================users======================
    setUsers: (state, data) => {
        state.users.splice(0, state.users.length);
        for (let i = 0; i < data.length; i += 1) {
            state.users.push(data[i]);
        }
    },
    // ==========================filtered=======================
    setFilteredUsers: (state, data) => {
        state.filtered.splice(0, state.filtered.length);
        for (let i = 0; i < data.length; i += 1) {
            state.filtered.push(data[i]);
        }
        // console.log(state.filtered);
    },

    /*
    clearFilteredUsers: (state) => {
        state.filtered.splice(0, state.filtered.length);
    },
   */
    // ====================установки фильтров==================
    clearSearchStringOnUsers: (state) => {
        state.searchStringOnUsers = '';
    },

};
