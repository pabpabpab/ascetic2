import state from './products_state';
import getters from './products_getters';
import mutations from './products_mutations';
import a1 from './products_actions';
import a2 from './products_actions_showProducts';
import a3 from './products_actions_showTrashedProducts';
import a4 from './products_actions_saveProduct';
import a5 from './products_actions_preDeleteProduct';
import a6 from './products_actions_deleteAndRestoreProduct';
import a7 from './products_actions_moveProduct';
import a8 from './products_actions_editManager';
import a9 from './products_actions_photoManagment';
import a10 from './products_actions_quickViewManager';
import a11 from './products_actions_search';
import a12 from './products_actions_sort';


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions: { ...a1, ...a2, ...a3, ...a4, ...a5, ...a6, ...a7, ...a8, ...a9, ...a10, ...a11, ...a12 },
};
