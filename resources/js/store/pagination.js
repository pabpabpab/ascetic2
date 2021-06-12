import state from './pagination_js/pagination_state';
import getters from './pagination_js/pagination_getters';
import mutations from './pagination_js/pagination_mutations';
import actions from './pagination_js/pagination_actions';
/* eslint no-shadow: ["error", { "allow": ["state", "getters", "mutations", "actions"] }] */
export default {
    state,
    getters,
    mutations,
    actions,
};
