export default {

    setViewMode: (state, value) => {
        state.viewSettings.mode = value;
    },

    setSortMode: (state, value) => {
        state.sortSettings.mode = value;
    },


    setSectionData: (state, data) => {
        state.sectionSettings.productSectionName = data.sectionName;
        state.sectionSettings.additionalData = data.additionalData;
        state.sectionSettings.h1Text = data.h1Text;
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
    resetSearchSettings: (state) => {
        state.searchSettings.minPrice = 0;
        state.searchSettings.maxPrice = 0;
        state.searchSettings.categoriesIds = [ ...[] ];
    },



    setSectionProductsCount: (state, value) => {
        state.paginatorSettings.sectionProductsCount = value;
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

    setPerPage: (state, value) => {
        state.paginatorSettings.perPage = value;
    },
}
