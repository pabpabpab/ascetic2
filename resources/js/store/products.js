import state from './products_js/products_state';
import getters from './products_js/products_getters';
import mutations from './products_js/products_mutations';
import actions1 from './products_js/products_actions';
import actions2 from './products_js/products_actions_saveProduct';

/* eslint no-shadow: ["error", { "allow": ["state", "getters", "mutations", "actions"] }] */
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions: { ...actions1, ...actions2 },
};
