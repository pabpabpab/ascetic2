import el from "./el";

import CsrfUpdater from "./http/csrfUpdater";

import TopDropMenuFiller from "./topDropMenuFiller";

import AuthAbsoluteMenu from "./auth/authAbsoluteMenu";
import AbsoluteFlashMessage from "./absoluteFlashMessage";
import PasswordTypeChanger from "./auth/passwordTypeChanger";

import FavoriteProductsIndicationByPageLoad from "./favoriteProducts/favoriteProductsIndicationByPageLoad";
import FavoriteProductsTotal from "./favoriteProducts/favoriteProductsTotal"
import FavoriteProductsSwitcher from "./favoriteProducts/favoriteProductsSwitcher";

import DesktopLargePhotoMaker from "./product/desktop/largePhotoMaker";
import DesktopMainPhotoChanger from "./product/desktop/mainPhotoChanger";
import DesktopLargePhotoViewer from "./product/desktop/largePhotoViewer";
import DesktopSmallPhotoScroller from "./product/desktop/smallPhotoScroller";

import MobileLargePhotoMaker from "./product/mobile/mobileLargePhotoMaker";
import MobileLargePhotoScroller from "./product/mobile/mobileLargePhotoScroller";



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
    const largePhotoScrollRightButton = el('#largePhotoScrollRightButton');
    let largePhotoScrollRightButtonVisibility = false;
    if (largePhotoScrollRightButton) {
        largePhotoScrollRightButtonVisibility = largePhotoScrollRightButton.getBoundingClientRect().x > 0;
    }

    if (!largePhotoScrollRightButtonVisibility) {
        if (el('#smallPhotos')) {
            new DesktopLargePhotoMaker();
            new DesktopMainPhotoChanger(); // change main photo by small photo
        }
        if (el('#mainPhotoContainer')) {
            new DesktopLargePhotoViewer();
        }
        if (el('#smallPhotos-scrollButtonDown')) {
            new DesktopSmallPhotoScroller();
        }
    }

    if (largePhotoScrollRightButtonVisibility) {
        if (el('#smallPhotos')) {
            new MobileLargePhotoMaker();
            new MobileLargePhotoScroller();
        }
    }
}
