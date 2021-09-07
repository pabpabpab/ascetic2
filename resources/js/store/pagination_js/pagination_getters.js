import getCookie from './functions/getCookie';

export default {
    customized: (state) => (entity) => state.customized[entity],
    customizedLength: (state) => (entity) => state.customized[entity].length,
    //
    currentPageIndex: (state) => (entity) => state.currentPage[entity],
    currentPageNumber: (state) => (entity) => state.currentPage[entity] + 1,
    //
    paginationLinksShot: (state) => (entity) => state.paginationLinksShot[entity],
    paginationLinkCssArr: (state) => (entity) => state.paginationLinkCssArr[entity],
    paginationLinkCssArrLength: (state) => (entity) => state.paginationLinkCssArr[entity].length,
    //
    filtered: (state) => (entity) => state.filtered[entity],
    filteredLength: (state) => (entity) => state.filtered[entity].length,
    //
    wing: (state) => state.half_length_of_pagination_shot,
    //
    quantityPerPage: (state) => (entity) => getCookie(entity + 'QuantityPerPage') ?? state.quantityPerPage[entity],
    //
    minimumPagesForComplexPagination: (state) => (entity) => state.minimumPagesForComplexPagination[entity],
    //
    inactivePaginationLinkCss: (state) => state.inactivePaginationLinkCss,
    activePaginationLinkCss: (state) => state.activePaginationLinkCss,
};

