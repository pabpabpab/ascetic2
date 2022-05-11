export default function productValidation(product) {

    // для длинных сообщений в pop-up блоке
    const err = {};
    // для коротких сообщений под input-полями при type-in
    const err2 = {};

    if (product.category_ids.length === 0) {
        if (!err.hasOwnProperty('category_ids')) {err.category_ids = []; err2.category_ids = [];}
        err.category_ids.push('укажите категорию товара.');
        err2.category_ids.push('Укажите категорию');
    }

    if (product.name.length === 0) {
        if (!err.hasOwnProperty('name')) {err.name = []; err2.name = [];}
        err.name.push('заполните «Наименование товара».');
        err2.name.push('Пожалуйста заполните');
    }
    if ((product.name.length > 0) && (product.name.length < 2)) {
        if (!err.hasOwnProperty('name')) {err.name = []; err2.name = [];}
        err.name.push('«Наименование товара» не менее 2 символов.');
        err2.name.push('не менее 2 символов');
    }

    if (product.material_ids.length === 0) {
        if (!err.hasOwnProperty('material_ids')) {err.material_ids = []; err2.material_ids = [];}
        err.material_ids.push('укажите материал товара.');
        err2.material_ids.push('Укажите материал');
    }

    if (product.color_ids.length === 0) {
        if (!err.hasOwnProperty('color_ids')) {err.color_ids = []; err2.color_ids = [];}
        err.color_ids.push('укажите цвет товара.');
        err2.color_ids.push('Укажите цвет');
    }

    if (product.price.length === 0) {
        if (!err.hasOwnProperty('price')) {err.price = []; err2.price = [];}
        err.price.push('укажите цену товара.');
        err2.price.push('Пожалуйста укажите цену');
    }

    if (product.description.length === 0) {
        if (!err.hasOwnProperty('description')) {err.description = []; err2.description = [];}
        err.description.push('заполните «Описание товара».');
        err2.description.push('Пожалуйста заполните');
    }
    if ((product.description.length > 0) && (product.description.length < 10)) {
        if (!err.hasOwnProperty('description')) {err.description = []; err2.description = [];}
        err.description.push('«Описание товара» не менее 10 символов.');
        err2.description.push('не менее 10 символов');
    }

    if (Object.keys(err).length > 0) {
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

