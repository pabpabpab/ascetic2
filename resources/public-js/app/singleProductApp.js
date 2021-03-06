import singleProductKit from "../productSingle/singleProductKit";
import components from "./singleProductApp/myComponents";
import MenuVisibilityManager from "../menu/menuVisibilityManager";
import TopDropMenuFiller from "../menu/topDropMenuFiller";
import MobileMenu from "../menu/mobileMenu";
import authKit from "../auth/index-authKit";
import FavoriteProductsSwitcher from "../favoriteProducts/favoriteProductsSwitcher";
import FavoriteProductsTotalCountIndication from "../favoriteProducts/favoriteProductsTotalCountIndication";
import WaitingScreen from "../waitingScreen";


singleProductKit();

const app = {
    components,
};

Object.keys(app.components).forEach((item) => {
    app.components[item].setAppRef(app);
    // в классах будет this.components
    app.components[item].components = app.components;
});

new FavoriteProductsSwitcher();
new FavoriteProductsTotalCountIndication();
new MenuVisibilityManager();
new TopDropMenuFiller();
new MobileMenu();
authKit();

new WaitingScreen();










