export default {

    products: (state) => state.products,
    // productItem: (state) => (id) => state.products.find(item => item.id === id),
    productsLength: (state) => state.products.length,
    seoData: (state) => state.seoData,
    photoSeoData: (state) => state.photoSeoData,
    listHeader: (state) => state.listHeader,
    productsCountFromServer: (state) => state.productsCountFromServer,
    singleProductFromServer: (state) => state.singleProductFromServer,

    showProductsFilters: (state) => state.showProductsFilters,

    showProductEditManager: (state) => state.showProductEditManager,
    showProductPhotoManager: (state) => state.showProductPhotoManager,
    showProductQuickViewManager: (state) => state.showProductQuickViewManager,


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
