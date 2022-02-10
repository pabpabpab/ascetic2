import MenuVisibilityManager from "./menu/menuVisibilityManager";
import TopDropMenuFiller from "./menu/topDropMenuFiller";
import CsrfUpdater from "./http/csrfUpdater";
import authKit from "./auth/index-authKit";
import FavoriteProductsTotalCountIndication from "./favoriteProducts/favoriteProductsTotalCountIndication";


new FavoriteProductsTotalCountIndication();
new MenuVisibilityManager();
new TopDropMenuFiller();
new CsrfUpdater();
authKit();
