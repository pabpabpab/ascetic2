import MenuVisibilityManager from "./menu/menuVisibilityManager";
import TopDropMenuFiller from "./menu/topDropMenuFiller";
import authKit from "./auth/index-authKit";
import FavoriteProductsTotalCountIndication from "./favoriteProducts/favoriteProductsTotalCountIndication";
import OrderWindow from "./orderWindow/orderWindow";


new OrderWindow();
new FavoriteProductsTotalCountIndication();
new MenuVisibilityManager();
new TopDropMenuFiller();
authKit();
