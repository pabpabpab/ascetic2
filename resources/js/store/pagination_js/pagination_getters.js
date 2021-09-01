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
    quantityPerPage: (state) => (entity) => state.quantityPerPage[entity],
    copyOfQuantityPerPage: (state) => (entity) => state.copyOfQuantityPerPage[entity],
    minimumPagesForComplexPagination: (state) => (entity) => state.minimumPagesForComplexPagination[entity],
    //
    inactivePaginationLinkCss: (state) => state.inactivePaginationLinkCss,
    activePaginationLinkCss: (state) => state.activePaginationLinkCss,
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
