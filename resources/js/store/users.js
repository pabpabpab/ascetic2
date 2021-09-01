import state from './users_js/users_state';
import getters from './users_js/users_getters';
import mutations from './users_js/users_mutations';
import actions from './users_js/users_actions';

// import nested_pagination from './nested_pagination';

/* eslint no-shadow: ["error", { "allow": ["state", "getters", "mutations", "actions"] }] */
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
