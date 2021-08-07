import state from './categories_js/categories_state';
import getters from './categories_js/categories_getters';
import mutations from './categories_js/categories_mutations';
import actions1 from './categories_js/categories_actions';
import actions2 from './categories_js/categories_actions_saveCategory';
import actions3 from './categories_js/categories_actions_preDeleteCategory';
import actions4 from './categories_js/categories_actions_deleteCategory';
import actions5 from './categories_js/categories_actions_changePosition';

/* eslint no-shadow: ["error", { "allow": ["state", "getters", "mutations", "actions"] }] */
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions: { ...actions1, ...actions2, ...actions3, ...actions4, ...actions5 },
};
