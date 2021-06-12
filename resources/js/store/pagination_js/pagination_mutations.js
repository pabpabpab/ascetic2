export default {

    setCurrentPage: (state, index) => {
        state.currentPage = index;
    },

    // =================PaginationLinkCssArr======================
    clearPaginationLinkCssArr: (state) => {
        const len = state.paginationLinkCssArr.length;
        state.paginationLinkCssArr.splice(0, len);
    },
    pushIntoPaginationLinkCssArr: (state, cssClass) => {
        state.paginationLinkCssArr.push(cssClass);
    },
    setPaginationLinkCssArrByIndex: (state, payload) => {
        const { index, cssClass } = payload;
        state.paginationLinkCssArr.splice(index, 1, cssClass);
    },

    // ==================paginationLinksShot=======================
    clearPaginationLinksShot: (state) => {
        state.paginationLinksShot.splice(0, state.paginationLinksShot.length);
    },
    pushIntoPaginationLinkShot: (state, item) => {
        state.paginationLinksShot.push(item);
    },
    fillPaginationLinkShot: (state, payload) => {
        const { border1, border2 } = payload;
        for (let i = border1; i <= border2; i += 1) {
            state.paginationLinksShot.push(i);
        }
    },

    // ======================customized=========================
    clearCustomized: (state) => {
        state.customized.splice(0, state.customized.length);
    },
    pushIntoCustomized: (state, payload) => {
        const { pageCounter, item } = payload;
        state.customized[pageCounter].push(item);
    },

    // =================quantityPerPage===================
    setQuantityPerPage: (state, payload) => {
        const { rootState, moduleName, quantityPerPage } = payload;
        rootState[moduleName]['quantityPerPage'] = quantityPerPage;
        if (quantityPerPage < 1000000) {
            rootState[moduleName]['copyOfQuantityPerPage'] = quantityPerPage;
        }
    },
};


/*
    setCurrentPage: (state, payload) => {
        const { rootState, moduleName, index } = payload;
        rootState[moduleName]['currentPage'] = index;
    },

    // =================PaginationLinkCssArr======================
    clearPaginationLinkCssArr: (state, payload) => {
        const { rootState, moduleName } = payload;
        const len = rootState[moduleName]['paginationLinkCssArr'].length;
        rootState[moduleName]['paginationLinkCssArr'].splice(0, len);
    },
    pushIntoPaginationLinkCssArr: (state, payload) => {
        const { rootState, moduleName, cssClass } = payload;
        rootState[moduleName]['paginationLinkCssArr'].push(cssClass);
    },
    setPaginationLinkCssArrByIndex: (state, payload) => {
        const { rootState, moduleName, index, cssClass } = payload;
        rootState[moduleName]['paginationLinkCssArr'].splice(index, 1, cssClass);
    },

    // ==================paginationLinksShot=======================
    clearPaginationLinksShot: (state, payload) => {
        const { rootState, moduleName } = payload;
        rootState[moduleName]['paginationLinksShot'].splice(0, rootState[moduleName]['paginationLinksShot'].length);
    },
    pushIntoPaginationLinkShot: (state, payload) => {
        const { rootState, moduleName, item } = payload;
        rootState[moduleName]['paginationLinksShot'].push(item);
    },
    fillPaginationLinkShot: (state, payload) => {
        const { rootState, moduleName, border1, border2 } = payload;
        for (let i = border1; i <= border2; i += 1) {
            rootState[moduleName]['paginationLinksShot'].push(i);
        }
    },

    // =================quantityPerPage===================
    setQuantityPerPage: (state, payload) => {
        const { rootState, moduleName, quantityPerPage } = payload;
        rootState[moduleName]['quantityPerPage'] = quantityPerPage;
        if (quantityPerPage < 1000000) {
            rootState[moduleName]['copyOfQuantityPerPage'] = quantityPerPage;
        }
    },

    // ======================customized=========================
    clearCustomized: (state, payload) => {
        const { rootState, moduleName } = payload;
        rootState[moduleName]['customized'].splice(0, rootState[moduleName]['customized'].length);
    },
    pushIntoCustomized: (state, payload) => {
        const { rootState, moduleName, pageCounter, item } = payload;
        rootState[moduleName]['customized'][pageCounter].push(item);
    },

*/

