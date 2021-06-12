import state from './categories_js/categories_state';
import getters from './categories_js/categories_getters';
import mutations from './categories_js/categories_mutations';
import actions from './categories_js/categories_actions';

/* eslint no-shadow: ["error", { "allow": ["state", "getters", "mutations", "actions"] }] */
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
