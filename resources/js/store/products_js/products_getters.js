export default {
    productsCountUrl: (state) => state.productsCountUrl,
    productsUrl: (state) => state.productsUrl,
    singleProductUrl: (state) => state.singleProductUrl,
    saveProductUrl: (state) => state.saveProductUrl,
    deleteProductUrl: (state) => state.deleteProductUrl,
    deleteProductPhotoUrl: (state) => state.deleteProductPhotoUrl,
    rotateProductPhotoUrl: (state) => state.rotateProductPhotoUrl,
    moveProductPhotoUrl: (state) => state.moveProductPhotoUrl,
    addProductPhotoUrl: (state) => state.addProductPhotoUrl,

    products: (state) => state.products,
    productsCountFromServer: (state) => state.productsCountFromServer,
    singleProductFromServer: (state) => state.singleProductFromServer,

    showProductPhotoManager: (state) => state.showProductPhotoManager,
    enabledFadingCss: (state) => state.enabledFadingCss,

};
