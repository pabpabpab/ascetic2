import el from "./el";
import CsrfUpdater from "./http/csrfUpdater";
import TopDropMenuFiller from "./topDropMenuFiller";
import AbsoluteFlashMessage from "./absoluteFlashMessage";
import authKit from "./auth/index-authKit";

import FavoriteProductsIndicationOnPageLoad from "./favoriteProducts/favoriteProductsIndicationOnPageLoad";
import FavoriteProductsTotalCountIndication from "./favoriteProducts/favoriteProductsTotalCountIndication"
import FavoriteProductsSwitcher from "./favoriteProducts/favoriteProductsSwitcher";

import ProductCache from "./productSource/productCache";
import ViewedProductsAppender from "./viewedProducts/viewedProductsAppender";
import SingleProductQuickViewer from "./productQuickViewer/singleProductQuickViewer";
import singleProductKit from "./productSingle/singleProductKit";
import productListKit2 from "./productList/productListKit2";

import ViewedProductsSummaryMaker from "./viewedProducts/viewedProductsSummaryMaker";




const productListWrapper = el('#productList');
const singleProductWrapper = el('#singleProduct');
const viewedProductsSummaryWrapper = el('#viewedProductsSummaryWrapper');

if (singleProductWrapper) {
    singleProductKit();
}



if (productListWrapper) {
    productListKit2();
}
else
if (viewedProductsSummaryWrapper)  {
    const productCache = new ProductCache();
    const viewedProductsSummaryMaker = new ViewedProductsSummaryMaker();
    const viewedProductsAppender = new ViewedProductsAppender();
    new SingleProductQuickViewer({
        productCache,
        viewedProductsAppender,
        viewedProductsSummaryMaker,
    });
}

if (productListWrapper || singleProductWrapper) {
    new FavoriteProductsIndicationOnPageLoad();
    new FavoriteProductsSwitcher();
}
new FavoriteProductsTotalCountIndication(); // не менять порядок


if (el('#flashMessage')) {
    new AbsoluteFlashMessage({
        text: el('#flashMessage').innerText,
        duration: 3500
    });
}

new TopDropMenuFiller();
new CsrfUpdater();
authKit();
