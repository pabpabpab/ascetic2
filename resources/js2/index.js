import el from "./el";
import Register from "./register";
import Login from "./login";

if (el('#registerLink')) {
    new Register('#registerLink');
}

if (el('#loginLink')) {
    new Login('#loginLink');
}



//import onBodyClickListener from './onBodyClickListener.js';
// import "../sass2/common.sass";
//onBodyClickListener();

