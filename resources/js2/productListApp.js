import state from './productList/myState';
import mutations from "./productList/myMutations";
import components from './productList/myComponents';
import Commiter from "./productList/commiter";
import MenuVisibilityManager from "./menu/menuVisibilityManager";
import TopDropMenuFiller from "./menu/topDropMenuFiller";
import CsrfUpdater from "./http/csrfUpdater";
import authKit from "./auth/index-authKit";
import FavoriteProductsSwitcher from "./favoriteProducts/favoriteProductsSwitcher";
import FavoriteProductsTotalCountIndication from "./favoriteProducts/favoriteProductsTotalCountIndication";


const app = {
    state,
    mutations,
    commiter: new Commiter(),
    components,
};


app.commiter.app = app;

for (let item in app.components) {
    if (app.components.hasOwnProperty(item)) {
        app.components[item].setAppRef(app);
        // в классах будет this.components
        app.components[item].components = app.components;
        // в классах будет this.state
        app.components[item].state = app.state;
        // в классах будет this.commit();
        app.components[item].commit = app.commiter.commit;
    }
}

new FavoriteProductsSwitcher();
new FavoriteProductsTotalCountIndication();

new MenuVisibilityManager();
new TopDropMenuFiller();
new CsrfUpdater();
authKit();


