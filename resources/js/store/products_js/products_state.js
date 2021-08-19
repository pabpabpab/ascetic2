export default {
    productsCountUrl: '/api/admin/products/count',
    productsUrl: '/api/admin/products/',
    singleProductUrl: '/api/admin/product/',
    saveProductUrl: '/api/admin/product/save/',

    deleteProductUrl: '/api/admin/product/delete/',
    deleteProductPhotoUrl: '/api/admin/product/photo/delete/',
    rotateProductPhotoUrl: '/api/admin/product/photo/rotate/',
    moveProductPhotoUrl: '/api/admin/product/photo/move/',
    addProductPhotoUrl: '/api/admin/product/photo/add/',

    products: [],
    productsCountFromServer: 0,
    singleProductFromServer: null,

    // productPhotosUrl: '/api/admin/product/photos/',
    showProductPhotoManager: false,
    enabledFadingCss: false,
};
