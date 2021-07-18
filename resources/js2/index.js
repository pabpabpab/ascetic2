import el from "./el";
import AuthBlock from "./authBlock";
import AbsoluteFlashMessage from "./absoluteFlashMessage";

if (el('.personal_account__icon')) {
    new AuthBlock({ clickSourceSelector: '.personal_account__icon' });
}

if (el('#flashMessage')) {
    new AbsoluteFlashMessage(el('#flashMessage').innerText);
}






//import onBodyClickListener from './onBodyClickListener.js';
// import "../sass2/common.sass";
//onBodyClickListener();

