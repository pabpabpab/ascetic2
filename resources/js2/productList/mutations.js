export default {

    setSortMode: (state, value) => {
        state.sortSettings.mode = value;
    },


    setSectionData: (state, data) => {
        state.sectionSettings.productSectionName = data.sectionName;
        state.sectionSettings.additionalData = data.additionalData;
    },


    setMinPrice: (state, value) => {
        state.searchSettings.minPrice = value;
    },
    setMaxPrice: (state, value) => {
        state.searchSettings.maxPrice = value;
    },
    setCategoriesIds:  (state, value) => {
        state.searchSettings.categoriesIds = [ ...value ];
    },


    setStartOffset: (state, value) => {
        state.paginatorSettings.startOffset = value;
    },
    setPageNumber: (state, value) => {
        state.paginatorSettings.pageNumber = value;
    },
    setPageCount: (state, value) => {
        state.paginatorSettings.pageCount = value;
    },
}
