import state from './categories_js/categories_state';
import getters from './categories_js/categories_getters';
import mutations from './categories_js/categories_mutations';
import a1 from './categories_js/categories_actions';
import a2 from './categories_js/categories_actions_showCategories';
import a3 from './categories_js/categories_actions_saveCategory';
import a4 from './categories_js/categories_actions_preDeleteCategory';
import a5 from './categories_js/categories_actions_deleteCategory';
import a6 from './categories_js/categories_actions_changePosition';
import a7 from './categories_js/categories_actions_moveCategory';

/* eslint no-shadow: ["error", { "allow": ["state", "getters", "mutations", "actions"] }] */
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions: { ...a1, ...a2, ...a3, ...a4, ...a5, ...a6, ...a7 },
};
