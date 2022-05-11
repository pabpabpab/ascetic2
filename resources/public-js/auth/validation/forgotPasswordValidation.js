import isEmailValid from './isEmailValid.js';

export default function forgotPasswordValidation(data) {

    const err = {};

    if (data.email.length === 0) {
        if (!err.hasOwnProperty('email')) err.email = [];
        err.email.push('Пожалуйста заполните');
    }
    if (!isEmailValid(data.email)) {
        if (!err.hasOwnProperty('email')) err.email = [];
        err.email.push('Некорректный email');
    }

    if (Object.keys(err).length > 0) {
        return err;
    }

    return null;
}
