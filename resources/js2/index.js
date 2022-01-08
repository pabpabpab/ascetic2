import el from "./el";

import CsrfUpdater from "./http/csrfUpdater";

import TopDropMenuFiller from "./topDropMenuFiller";

import AuthAbsoluteMenu from "./auth/authAbsoluteMenu";
import AbsoluteFlashMessage from "./absoluteFlashMessage";
import PasswordTypeChanger from "./auth/passwordTypeChanger";

import FavoriteProductsIndicationByPageLoad from "./favoriteProducts/favoriteProductsIndicationByPageLoad";
import FavoriteProductsTotal from "./favoriteProducts/favoriteProductsTotal"
import FavoriteProductsSwitcher from "./favoriteProducts/favoriteProductsSwitcher";

import DesktopLargePhotoMaker from "./productSingle/desktop/largePhotoMaker";
import DesktopMainPhotoChanger from "./productSingle/desktop/mainPhotoChanger";
import DesktopLargePhotoViewer from "./productSingle/desktop/largePhotoViewer";
import DesktopSmallPhotoScroller from "./productSingle/desktop/smallPhotoScroller";

import MobileLargePhotoMaker from "./productSingle/mobile/mobileLargePhotoMaker";
import MobileLargePhotoScroller from "./productSingle/mobile/mobileLargePhotoScroller";

import ProductSource from "./productList/productSource";
import SingleProductQuickViewer from "./productList/singleProductQuickViewer";
import QuickProductDestructor from "./productList/quickProductDestructor";
import singleProductKit from "./productSingle/singleProductKit";




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


if (el('#products') || el('#singleProduct')) {
    new FavoriteProductsIndicationByPageLoad();
    new FavoriteProductsSwitcher();
}
new FavoriteProductsTotal();



if (el('#singleProduct')) {
    singleProductKit();
}


if (el('#products')) {
    const productSource = new ProductSource();
    new SingleProductQuickViewer(productSource);
}













