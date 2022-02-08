import TopDropMenuFiller from "./menu/topDropMenuFiller";
import CsrfUpdater from "./http/csrfUpdater";
import authKit from "./auth/index-authKit";
import FavoriteProductsTotalCountIndication from "./favoriteProducts/favoriteProductsTotalCountIndication";



new FavoriteProductsTotalCountIndication();
new TopDropMenuFiller();
new CsrfUpdater();
authKit();
