import ProductCache from "../productSource/productCache";

import ViewedProductsSummaryMaker from "../viewedProducts/viewedProductsSummaryMaker";
import ViewedProductsAppender from "../viewedProducts/viewedProductsAppender";
import SingleProductQuickViewer from "../productQuickViewer/singleProductQuickViewer";

import FavoriteProductsIndicationOnPageLoad from "../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import FavoriteProductsSwitcher from "../favoriteProducts/favoriteProductsSwitcher";
import FavoriteProductsTotalCountIndication from "../favoriteProducts/favoriteProductsTotalCountIndication";



export default {
    productCache: new ProductCache(),
    viewedProductsSummaryMaker: new ViewedProductsSummaryMaker(),
    viewedProductsAppender: new ViewedProductsAppender(),
    singleProductQuickViewer: new SingleProductQuickViewer(),
    favoriteProductsIndicationOnPageLoad: new FavoriteProductsIndicationOnPageLoad(),
}
