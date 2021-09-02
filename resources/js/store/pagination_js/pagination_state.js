export default {
    // filtered
    filtered: {
        users: [],
        products: [],
    },
    // items из filtered, разбитые по страницам // массив массивов (страниц)
    customized: {
        users: [],
        products: [],
    },
    // текущая страница в пагинаторе
    currentPage: {
        users: 0,
        products: 0,
    },
    // активный кадр ссылок пагинации // [1, 2, 3, 4, 5, 6]
    paginationLinksShot: {
        users: [],
        products: [],
    },
    // массив стилей для линков активного кадра ссылок // ['', '', '']
    paginationLinkCssArr: {
        users: [],
        products: [],
    },





    // установка пользователем в выпадающем списке кол-ва items на страницу
    quantityPerPage: {
        users: 6,
        products: 3,
    },
    // для выхода из View all обратно в пагинацию
    copyOfQuantityPerPage: {
        users: 6,
        products: 3,
    },
    // если страниц меньше, показывать все
    minimumPagesForComplexPagination: {
        users: 9,
        products: 9,
    },

    // css ссылки на активную страницу
    activePaginationLinkCss: 'pagination_link active_pagination_link',
    // css ссылки на неактивную страницу
    inactivePaginationLinkCss: 'pagination_link',
    // половина длины активного кадра ссылок пагинации
    half_length_of_pagination_shot: 1,
};
