import state from './users_js/users_state';
import getters from './users_js/users_getters';
import mutations from './users_js/users_mutations';
import a1 from "./users_js/users_actions";
import a2 from "./users_js/users_actions_saveUser";
import a3 from "./users_js/users_actions_deleteUser";
import a4 from "./users_js/users_actions_editManager";
import a5 from "./users_js/users_actions_search";

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions: { ...a1, ...a2, ...a3, ...a4, ...a5 },
};
