import isEmailValid from './isEmailValid.js';

export default function registerValidation(user) {

    // для длинных сообщений в pop-up блоке
    const err = {};
    // для коротких type-in сообщений под input-полями
    const err2 = {};


    if (user.name.length === 0) {
        if (!err.hasOwnProperty('name')) {err.name = []; err2.name = [];}
        err.name.push('заполните «Ваше имя».');
        err2.name.push('Пожалуйста заполните');
    }
    if (user.email.length === 0) {
        if (!err.hasOwnProperty('email')) {err.email = []; err2.email = [];}
        err.email.push('заполните «Ваш email».');
        err2.email.push('Пожалуйста заполните');
    }
    if (user.password.length === 0) {
        if (!err.hasOwnProperty('password')) {err.password = []; err2.password = [];}
        err.password.push('заполните «Пароль».');
        err2.password.push('Пожалуйста заполните');
    }
    if (user.password_confirmation.length === 0) {
        if (!err.hasOwnProperty('password_confirmation')) {err.password_confirmation = []; err2.password_confirmation = [];}
        err.password_confirmation.push('заполните «Подтверждение пароля».');
        err2.password_confirmation.push('Пожалуйста заполните');
    }


    if (!isEmailValid(user.email)) {
        if (!err.hasOwnProperty('email')) {err.email = []; err2.email = [];}
        err.email.push('некорректный Ваш email.');
        err2.email.push('Некорректный email');
    }
    if ((user.password.length > 0) && (user.password.length < 6)) {
        if (!err.hasOwnProperty('password')) {err.password = []; err2.password = [];}
        err.password.push('«Пароль» не менее 6 символов.');
        err2.password.push('Не менее 6 символов');
    }
    if ((user.password_confirmation.length > 0) && (user.password.length > 0)) {
        if (user.password_confirmation !== user.password) {
            if (!err.hasOwnProperty('password_confirmation')) {err.password_confirmation = []; err2.password_confirmation = [];}
            err.password_confirmation.push('пароль подтвержден неверно.');
            err2.password_confirmation.push('Подтвержден неверно');
        }
    }

    for (let key in err) {
        if (err.hasOwnProperty(key))
            return {
                popupErrors: err,
                typeinErrors: err2
            };
    }

    return {
        popupErrors: null,
        typeinErrors: null
    };
}
