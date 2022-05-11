import isEmailValid from './isEmailValid.js';

export default function loginValidation(user) {

    const err = {};

    if (user.email.length === 0) {
        if (!err.hasOwnProperty('email')) err.email = [];
        err.email.push('Пожалуйста заполните');
    }
    if (user.password.length === 0) {
        if (!err.hasOwnProperty('password')) err.password = [];
        err.password.push('Пожалуйста заполните');
    }
    if (!isEmailValid(user.email)) {
        if (!err.hasOwnProperty('email')) err.email = [];
        err.email.push('Некорректный email');
    }

    if (Object.keys(err).length > 0) {
        return err;
    }

    return null;
}
