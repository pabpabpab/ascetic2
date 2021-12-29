import el from "./el";
import AuthAbsoluteMenu from "./authAbsoluteMenu";
import AbsoluteFlashMessage from "./absoluteFlashMessage";
import PasswordTypeChanger from "./passwordTypeChanger";

import FavoriteProductsIndicationByPageLoad from "./favoriteProductsIndicationByPageLoad";
import FavoriteProductsManager from "./favoriteProductsManager";


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

if (el('#products') || el('#single-product')) {
    new FavoriteProductsIndicationByPageLoad();
    new FavoriteProductsManager();
}
