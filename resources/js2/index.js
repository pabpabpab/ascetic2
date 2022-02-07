import el from "./el";
import CsrfUpdater from "./http/csrfUpdater";
import TopDropMenuFiller from "./menu/topDropMenuFiller";
import AbsoluteFlashMessage from "./message/absoluteFlashMessage";
import authKit from "./auth/index-authKit";


import FavoriteProductsTotalCountIndication from "./favoriteProducts/favoriteProductsTotalCountIndication"


import ProductCache from "./productSource/productCache";
import ViewedProductsAppender from "./viewedProducts/viewedProductsAppender";
import SingleProductQuickViewer from "./productQuickViewer/singleProductQuickViewer";
import singleProductKit from "./productSingle/singleProductKit";
import listApp from "./productList/listApp";

import ViewedProductsSummaryMaker from "./viewedProducts/viewedProductsSummaryMaker";



const productListWrapper = el('#productList');
const singleProductWrapper = el('#singleProduct');
const viewedProductsSummaryWrapper = el('#viewedProductsSummaryWrapper');





if (singleProductWrapper) {
    singleProductKit();
}


if (productListWrapper) {
    listApp();
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
