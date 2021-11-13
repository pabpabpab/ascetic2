export default {
    // filtered
    filtered: {
        users: [],
        products: [],
        trashedProducts: [],
    },
    // items из filtered, разбитые по страницам // массив массивов (страниц)
    customized: {
        users: [],
        products: [],
        trashedProducts: [],
    },
    // текущая страница в пагинаторе
    currentPage: {
        users: -1,
        products: -1,
        trashedProducts: -1,
    },
    // активный кадр ссылок пагинации // [1, 2, 3, 4, 5, 6]
    paginationLinksShot: {
        users: [],
        products: [],
        trashedProducts: [],
    },
    // массив стилей для линков активного кадра ссылок // ['', '', '']
    paginationLinkCssArr: {
        users: [],
        products: [],
        trashedProducts: [],
    },



    // установка пользователем в выпадающем списке кол-ва items на страницу
    quantityPerPage: {
        users: 6,
        products: 3,
        trashedProducts: 3,
    },

    // если страниц меньше, показывать все
    minimumPagesForComplexPagination: {
        users: 9,
        products: 9,
        trashedProducts: 9,
    },

    // css ссылки на активную страницу
    activePaginationLinkCss: 'pagination_link pagination_link_active',
    // css ссылки на неактивную страницу
    inactivePaginationLinkCss: 'pagination_link',
    // половина длины активного кадра ссылок пагинации
    half_length_of_pagination_shot: 1,
};
