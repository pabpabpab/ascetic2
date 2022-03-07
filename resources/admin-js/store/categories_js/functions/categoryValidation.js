export default function categoryValidation(category, categories) {

    // для длинныхх сообщений в pop-up блоке
    const err = {};
    // для коротких сообщений под input-полями при type-in
    const err2 = {};

    if (category.name.length === 0) {
        if (!err.hasOwnProperty('name')) {err.name = []; err2.name = [];}
        err.name.push('заполните «Название».');
        err2.name.push('Пожалуйста заполните');
    }
    if ((category.name.length > 0) && (category.name.length < 2)) {
        if (!err.hasOwnProperty('name')) {err.name = []; err2.name = [];}
        err.name.push('«Название» не менее 2 символов.');
        err2.name.push('не менее 2 символов');
    }

    if (hasTheSameCategoryName(category, categories)) {
        if (!err.hasOwnProperty('name')) {err.name = []; err2.name = [];}
        err.name.push('такое название уже есть.');
        err2.name.push('уже есть такое название');
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


function hasTheSameCategoryName(category, categories) {
    const categoryName = category.name.trim().toLowerCase();
    const categoryId = category.id;

    let index = categories.findIndex((item) => {
        return (categoryName === item.name.toLowerCase()) && (categoryId != item.id);
    });

    return index >= 0;
}




/*
    if (category.description.length === 0) {
        if (!err.hasOwnProperty('description')) {err.description = []; err2.description = [];}
        err.description.push('заполните «Описание категории».');
        err2.description.push('Пожалуйста заполните');
    }
*/
