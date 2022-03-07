import el from "../auxiliaryFunctions/el";
import AuthAbsoluteMenu from "./authAbsoluteMenu";
import PasswordTypeChanger from "./passwordTypeChanger";
import AbsoluteFlashMessage from "../message/absoluteFlashMessage";

export default function authKit() {
    // Register() и Login() инициализируются в AuthAbsoluteMenu()
    if (el('.personal_account__icon')) {
        new AuthAbsoluteMenu({ clickSourceSelector: '.personal_account__icon' });
    }
    if (el('.auth_page__change_password_type__wrapper')) {
        new PasswordTypeChanger({
            closedEyeSelector: ".auth_page__closed_eye_img",
            openedEyeSelector: ".auth_page__opened_eye_img",
            passwordInputSelector: "#password",
        });
    }


    if (el('#flashMessage')) {
        new AbsoluteFlashMessage({
            text: el('#flashMessage').innerText,
            duration: 3500
        });
    }
}
