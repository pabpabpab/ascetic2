export default {

    products: (state) => state.products,
    productsLength: (state) => state.products.length,
    seoData: (state) => state.seoData,
    photoSeoData: (state) => state.photoSeoData,
    listHeader: (state) => state.listHeader,
    productsCountFromServer: (state) => state.productsCountFromServer,
    singleProductFromServer: (state) => state.singleProductFromServer,

    showProductEditManager: (state) => state.showProductEditManager,
    showProductPhotoManager: (state) => state.showProductPhotoManager,
    enabledFadingCss: (state) => state.enabledFadingCss,

};
