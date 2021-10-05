export default {

    products: (state) => state.products,
    productsLength: (state) => state.products.length,
    seoData: (state) => state.seoData,
    photoSeoData: (state) => state.photoSeoData,
    listHeader: (state) => state.listHeader,
    productsCountFromServer: (state) => state.productsCountFromServer,
    singleProductFromServer: (state) => state.singleProductFromServer,

    showProductsFilters: (state) => state.showProductsFilters,
    enabledFiltersHidingCss: (state) => state.enabledFiltersHidingCss,

    showProductEditManager: (state) => state.showProductEditManager,
    showProductPhotoManager: (state) => state.showProductPhotoManager,
    enabledFadingCss: (state) => state.enabledFadingCss,


    productsMaxPrice: (state) => state.products.reduce(
        (previousValue, item) => Number(item.price) > previousValue ? Number(item.price) : previousValue
    ,0),
    productsMinPrice: (state) => state.products.reduce(
        (previousValue, item) => Number(item.price) < previousValue ? Number(item.price) : previousValue
    ,1000000),

    stateSearchObject: (state) => {return {...state.search};},
    searchTotalParameters: (state) => {return {...state.searchTotalParameters};},

    sortingMode: (state) => state.sortingMode,
};
