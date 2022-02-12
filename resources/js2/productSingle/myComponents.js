import ProductCache from "../productSource/productCache";

import ViewedProductsSummaryMaker from "../viewedProducts/viewedProductsSummaryMaker";
import ViewedProductsAppender from "../viewedProducts/viewedProductsAppender";
import SingleProductQuickViewer from "../productQuickViewer/singleProductQuickViewer";

import FavoriteProductsIndicationOnPageLoad from "../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import OrderWindow from "../orderWindow/orderWindow";



export default {
    productCache: new ProductCache(),
    viewedProductsSummaryMaker: new ViewedProductsSummaryMaker(),
    viewedProductsAppender: new ViewedProductsAppender(),
    singleProductQuickViewer: new SingleProductQuickViewer(),
    favoriteProductsIndicationOnPageLoad: new FavoriteProductsIndicationOnPageLoad(),

    orderWindow: new OrderWindow(),
}
