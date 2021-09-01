export default {

    setFiltered: (state, { entity, data }) => {
        // state.filtered[entity].splice(0, state.filtered[entity].length);
        const filtered = state.filtered;
        filtered[entity] = [];
        for (let i = 0; i < data.length; i += 1) {
            filtered[entity].push(data[i]);
        }
        state.filtered = filtered;
        // console.log(state.filtered);
    },
    // =========================================================
    setCurrentPage: (state, { entity, index }) => {
        const currentPage = state.currentPage;
        currentPage[entity] = index;
        state.currentPage = currentPage;
    },

    // =================PaginationLinkCssArr======================
    clearPaginationLinkCssArr: (state, entity) => {
        const paginationLinkCssArr = state.paginationLinkCssArr;
        paginationLinkCssArr[entity] = [];
        state.paginationLinkCssArr = paginationLinkCssArr;
    },
    pushIntoPaginationLinkCssArr: (state, {entity, cssClass}) => {
        const paginationLinkCssArr = state.paginationLinkCssArr;
        paginationLinkCssArr[entity].push(cssClass);
        state.paginationLinkCssArr = paginationLinkCssArr;
    },
    setPaginationLinkCssArrByIndex: (state, { entity, index, cssClass }) => {
        const paginationLinkCssArr = state.paginationLinkCssArr;
        paginationLinkCssArr[entity].splice(index, 1, cssClass);
        state.paginationLinkCssArr = paginationLinkCssArr;
    },

    // ==================paginationLinksShot=======================
    clearPaginationLinksShot: (state, entity) => {
        const paginationLinksShot = state.paginationLinksShot;
        paginationLinksShot[entity] = [];
        state.paginationLinksShot = paginationLinksShot;
    },
    pushIntoPaginationLinkShot: (state, {entity, item}) => {
        const paginationLinksShot = state.paginationLinksShot;
        paginationLinksShot[entity].push(item);
        state.paginationLinksShot = paginationLinksShot;
    },
    fillPaginationLinkShot: (state, { entity, border1, border2 }) => {
        const paginationLinksShot = state.paginationLinksShot;
        for (let i = border1; i <= border2; i += 1) {
            paginationLinksShot[entity].push(i);
        }
        state.paginationLinksShot = paginationLinksShot;
    },

    // ======================customized=========================
    clearCustomized: (state, entity) => {
        const customized = state.customized;
        customized[entity] = [];
        state.customized = customized;
    },
    pushIntoCustomized: (state, { entity, pageCounter, item }) => {
        const customized = state.customized;
        customized[entity][pageCounter].push(item);
        state.customized = customized;
    },
    pushNewPageIntoCustomized: (state, entity) => {
        const customized = state.customized;
        customized[entity].push([]);
        state.customized = customized;
    },
    // =================quantityPerPage===================
    setQuantityPerPage: (state, { entity, quantityPerPage }) => {
        if (!quantityPerPage) {
            return;
        }
        state.quantityPerPage[entity] = quantityPerPage;
        if (quantityPerPage < 1000000) {
            state.copyOfQuantityPerPage[entity] = quantityPerPage;
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

