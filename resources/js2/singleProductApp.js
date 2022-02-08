import singleProductKit from "./productSingle/singleProductKit";
import components from "./productSingle/myComponents";
import TopDropMenuFiller from "./menu/topDropMenuFiller";
import CsrfUpdater from "./http/csrfUpdater";
import authKit from "./auth/index-authKit";
import FavoriteProductsSwitcher from "./favoriteProducts/favoriteProductsSwitcher";
import FavoriteProductsTotalCountIndication from "./favoriteProducts/favoriteProductsTotalCountIndication";


singleProductKit();

const app = {
    components,
};

for (let item in app.components) {
    if (app.components.hasOwnProperty(item)) {
        app.components[item].setAppRef(app);
        // в классах будет this.components
        app.components[item].components = app.components;
    }
}

new FavoriteProductsSwitcher();
new FavoriteProductsTotalCountIndication();
new TopDropMenuFiller();
new CsrfUpdater();
authKit();












