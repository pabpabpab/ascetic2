export default {

    url: {
        productsCount: '/api/admin/products/count',
        products: '/api/admin/products/',
        productsByCategory: '/api/admin/products/by/',
        singleProduct: '/api/admin/product/',
        saveProduct: '/api/admin/product/save/',

        deleteProduct: '/api/admin/product/delete/',
        forceDeleteProduct: '/api/admin/product/delete/force/',
        restoreProduct: '/api/admin/product/restore/',
        moveProduct: '/api/admin/product/move/',

        deleteProductPhoto: '/api/admin/product/photo/delete/',
        rotateProductPhoto: '/api/admin/product/photo/rotate/',
        moveProductPhoto: '/api/admin/product/photo/move/',
        moveByDragAndDropPhoto: '/api/admin/product/photo/moveByDragAndDrop/',
        addProductPhoto: '/api/admin/product/photo/add/',
    },

    products: [],
    seoData: [], // заполняется при открытии списка продуктов
    photoSeoData: [], // заполняется при открытии photoManager
    listHeader: '',
    productsCountFromServer: 0,
    singleProductFromServer: {},

    showProductsFilters: false,
    enabledFiltersHidingCss: false,

    showProductEditManager: false,
    showProductPhotoManager: false,
    enabledFadingCss: false,
};
