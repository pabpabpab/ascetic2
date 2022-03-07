import state from './users_state';
import getters from './users_getters';
import mutations from './users_mutations';
import a1 from "./users_actions";
import a2 from "./users_actions_showUsers";
import a3 from "./users_actions_saveUser";
import a4 from "./users_actions_deleteUser";
import a5 from "./users_actions_editManager";
import a6 from "./users_actions_search";

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions: { ...a1, ...a2, ...a3, ...a4, ...a5, ...a6 },
};
