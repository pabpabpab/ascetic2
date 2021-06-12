export default {

    customized: (state) => state.customized,
    customizedLength: (state) => state.customized.length,
    //
    currentPageIndex: (state) => state.currentPage,
    currentPageNumber: (state) => state.currentPage + 1,
    //
    paginationLinksShot: (state) => state.paginationLinksShot,
    paginationLinkCssArr: (state) => state.paginationLinkCssArr,
    paginationLinkCssArrLength: (state) => state.paginationLinkCssArr.length,
    //
    filtered: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['filtered'],
    filteredLength: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['filtered'].length,
    //
    wing: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['half_length_of_pagination_shot'],
    //
    minimumPagesForComplexPagination: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['minimumPagesForComplexPagination'],
    quantityPerPage: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['quantityPerPage'],
    copyOfQuantityPerPage: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['copyOfQuantityPerPage'],
    //
    inactivePaginationLinkCss: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['inactivePaginationLinkCss'],
    activePaginationLinkCss: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['activePaginationLinkCss'],

};


/*
export default {
    filtered: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['filtered'],
    filteredLength: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['filtered'].length,
    //
    customized: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['customized'],
    customizedLength: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['customized'].length,
    //
    currentPageIndex: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['currentPage'],
    currentPageNumber: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['currentPage'] + 1,
    wing: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['half_length_of_pagination_shot'],
    //
    minimumPagesForComplexPagination: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['minimumPagesForComplexPagination'],
    quantityPerPage: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['quantityPerPage'],
    copyOfQuantityPerPage: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['copyOfQuantityPerPage'],

    inactivePaginationLinkCss: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['inactivePaginationLinkCss'],
    activePaginationLinkCss: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['activePaginationLinkCss'],


    paginationLinksShot: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['paginationLinksShot'],
    paginationLinkCssArr: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['paginationLinkCssArr'],
    paginationLinkCssArrLength: (state, getters, rootState) =>
        (moduleName) => rootState[moduleName]['paginationLinkCssArr'].length,

};
*/
