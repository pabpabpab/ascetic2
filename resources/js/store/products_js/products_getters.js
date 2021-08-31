export default {
    productsCountUrl: (state) => state.productsCountUrl,
    productsUrl: (state) => state.productsUrl,
    singleProductUrl: (state) => state.singleProductUrl,
    saveProductUrl: (state) => state.saveProductUrl,
    deleteProductUrl: (state) => state.deleteProductUrl,
    restoreProductUrl: (state) => state.restoreProductUrl,
    forceDeleteProductUrl: (state) => state.forceDeleteProductUrl,
    moveProductUrl: (state) => state.moveProductUrl,

    deleteProductPhotoUrl: (state) => state.deleteProductPhotoUrl,
    rotateProductPhotoUrl: (state) => state.rotateProductPhotoUrl,
    moveProductPhotoUrl: (state) => state.moveProductPhotoUrl,
    moveByDragAndDropPhotoUrl: (state) => state.moveByDragAndDropPhotoUrl,
    addProductPhotoUrl: (state) => state.addProductPhotoUrl,

    products: (state) => state.products,
    productsCountFromServer: (state) => state.productsCountFromServer,
    singleProductFromServer: (state) => state.singleProductFromServer,

    showProductPhotoManager: (state) => state.showProductPhotoManager,
    enabledFadingCss: (state) => state.enabledFadingCss,

};
