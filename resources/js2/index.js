import el from "./el";
import AuthBlock from "./authBlock";


/*
if (el('#registerLink')) {
    new Register({ clickSourceSelector: '#registerLink' });
}

if (el('#loginLink')) {
    new Login({ clickSourceSelector: '#loginLink' });
}
*/

if (el('.personal_account__icon')) {
    new AuthBlock({ clickSourceSelector: '.personal_account__icon' });
}

//import onBodyClickListener from './onBodyClickListener.js';
// import "../sass2/common.sass";
//onBodyClickListener();

