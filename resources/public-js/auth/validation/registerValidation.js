import isEmailValid from './isEmailValid.js';

export default function registerValidation(user) {

    const err = {};

    if (user.name.length === 0) {
        if (!err.hasOwnProperty('name')) err.name = [];
        err.name.push('Пожалуйста заполните');
    }
    if (user.email.length === 0) {
        if (!err.hasOwnProperty('email')) err.email = [];
        err.email.push('Пожалуйста заполните');
    }
    if (user.password.length === 0) {
        if (!err.hasOwnProperty('password')) err.password = [];
        err.password.push('Пожалуйста заполните');
    }
    if (user.password_confirmation.length === 0) {
        if (!err.hasOwnProperty('password_confirmation')) err.password_confirmation = [];
        err.password_confirmation.push('Пожалуйста заполните');
    }


    if (!isEmailValid(user.email)) {
        if (!err.hasOwnProperty('email')) err.email = [];
        err.email.push('Некорректный email');
    }
    if ((user.password.length > 0) && (user.password.length < 6)) {
        if (!err.hasOwnProperty('password')) err.password = [];
        err.password.push('Не менее 6 символов');
    }
    if ((user.password_confirmation.length > 0) && (user.password.length > 0)) {
        if (user.password_confirmation !== user.password) {
            if (!err.hasOwnProperty('password_confirmation')) err.password_confirmation = [];
            err.password_confirmation.push('Подтвержден неверно');
        }
    }

    if (Object.keys(err).length > 0) {
        return err;
    }

    return null;
}
