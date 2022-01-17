import el from "./el";

import CsrfUpdater from "./http/csrfUpdater";

import TopDropMenuFiller from "./topDropMenuFiller";

import AuthAbsoluteMenu from "./auth/authAbsoluteMenu";
import AbsoluteFlashMessage from "./absoluteFlashMessage";
import PasswordTypeChanger from "./auth/passwordTypeChanger";

import FavoriteProductsIndicationByPageLoad from "./favoriteProducts/favoriteProductsIndicationByPageLoad";
import FavoriteProductsTotal from "./favoriteProducts/favoriteProductsTotal"
import FavoriteProductsSwitcher from "./favoriteProducts/favoriteProductsSwitcher";

import ProductCache from "./productSource/productCache";
import ViewedProductsAppender from "./viewedProducts/viewedProductsAppender";
import SingleProductQuickViewer from "./productQuickViewer/singleProductQuickViewer";
import singleProductKit from "./productSingle/singleProductKit";

import ViewedProductsSummaryMaker from "./viewedProducts/viewedProductsSummaryMaker";


new CsrfUpdater();

new TopDropMenuFiller();

if (el('.personal_account__icon')) {
    new AuthAbsoluteMenu({ clickSourceSelector: '.personal_account__icon' });
}

if (el('#flashMessage')) {
    new AbsoluteFlashMessage(el('#flashMessage').innerText);
}

if (el('.auth_page__change_password_type__wrapper')) {
    new PasswordTypeChanger({
        closedEyeSelector: ".auth_page__closed_eye_img",
        openedEyeSelector: ".auth_page__opened_eye_img",
        passwordInputSelector: "#password",
    });
}




if (el('#productList') || el('#singleProduct')) {
    new FavoriteProductsIndicationByPageLoad();
    new FavoriteProductsSwitcher();
}
new FavoriteProductsTotal();



if (el('#singleProduct')) {
    singleProductKit();
}


import SearchSettingsStore from "./productSource/searchSettingsStore";
import SearchUrlMaker from "./productSource/searchUrlMaker";
import PublicUrlMaker from "./productSource/publicUrlMaker";
import FilteredProductsSource from "./productSource/filteredProductsSource";

const limitForCachingOfProductEntireList = 100;

const viewedProductsSummaryMaker = new ViewedProductsSummaryMaker();
if (el('#productList') || el('#viewedProductsSummaryWrapper'))  {
    const viewedProductsAppender = new ViewedProductsAppender();
    const productCache = new ProductCache();
    new SingleProductQuickViewer({
        productCache,
        viewedProductsAppender,
        viewedProductsSummaryMaker,
        limitForCachingOfProductEntireList,
    });


    if (el('#productList')) {
        const searchSettingsStore = new SearchSettingsStore();
        const searchUrlMaker = new SearchUrlMaker(searchSettingsStore);
        const publicUrlMaker = new PublicUrlMaker(searchSettingsStore);
        const filteredProductsSource = new FilteredProductsSource({
            productCache,
            searchUrlMaker,
            publicUrlMaker,
            limitForCachingOfProductEntireList,
        });

    }



}






