export default function userValidation(user, editTask) {

    // для длинных сообщений в pop-up блоке
    const err = {};
    // для коротких сообщений под input-полями при type-in
    const err2 = {};

    if (!user.id || editTask === 'editEmail') {
        if (user.email.length === 0) {
            if (!err.hasOwnProperty('email')) {
                err.email = [];
                err2.email = [];
            }
            err.email.push('заполните «E-mail пользователя».');
            err2.email.push('Пожалуйста заполните E-mail');
        }
        if (!isEmailValid(user.email)) {
            if (!err.hasOwnProperty('email')) {
                err.email = [];
                err2.email = [];
            }
            err.email.push('Некорректный email.');
            err2.email.push('Некорректный email');
        }
        if (user.name.length === 0) {
            if (!err.hasOwnProperty('name')) {
                err.name = [];
                err2.name = [];
            }
            err.name.push('заполните «Имя пользователя».');
            err2.name.push('Пожалуйста заполните «Имя пользователя»');
        }
    }


    if (!user.id) {
        if (user.password.length === 0) {
            if (!err.hasOwnProperty('password')) {err.password = []; err2.password = [];}
            err.password.push('заполните «Пароль для входа».');
            err2.password.push('Пожалуйста заполните «Пароль для входа»');
        }
        if ((user.password.length > 0) && (user.password.length < 6)) {
            if (!err.hasOwnProperty('password')) {err.password = []; err2.password = [];}
            err.password.push('заполните «Пароль» не менее 6 символов.');
            err2.password.push('Не менее 6 символов');
        }
    }


    if (editTask === 'editPassword') {
        if ((user.password.length > 0) && (user.password.length < 6)) {
            if (!err.hasOwnProperty('password')) {err.password = []; err2.password = [];}
            err.password.push('заполните «Пароль» не менее 6 символов.');
            err2.password.push('Не менее 6 символов');
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


function isEmailValid(email) {
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return re.test(email);
}
