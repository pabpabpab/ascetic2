import el from "./el";

import CsrfUpdater from "./http/csrfUpdater";

import TopDropMenuFiller from "./topDropMenuFiller";

import AuthAbsoluteMenu from "./auth/authAbsoluteMenu";
import AbsoluteFlashMessage from "./absoluteFlashMessage";
import PasswordTypeChanger from "./auth/passwordTypeChanger";

import FavoriteProductsIndicationByPageLoad from "./favoriteProducts/favoriteProductsIndicationByPageLoad";
import FavoriteProductsTotal from "./favoriteProducts/favoriteProductsTotal"
import FavoriteProductsSwitcher from "./favoriteProducts/favoriteProductsSwitcher";

import LargePhotoMaker from "./product/largePhotoMaker";
import MainPhotoChanger from "./product/mainPhotoChanger";
import LargePhotoViewer from "./product/largePhotoViewer";
import SmallPhotoScroller from "./product/smallPhotoScroller";


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
    if (el('#smallPhotos')) {
        new LargePhotoMaker();
        new MainPhotoChanger();
    }
    if (el('#mainPhotoContainer')) {
        new LargePhotoViewer();
    }
    if (el('#smallPhotos-scrollButtonDown')) {
        new SmallPhotoScroller();
    }
}

