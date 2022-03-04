export default {

    url: {
        productsCount: '/admin-js/products/count',
        products: '/admin-js/products/active',
        trashedProducts: '/admin-js/products/trashed',
        productsByCategory: '/admin-js/products/by/',
        singleProduct: '/admin-js/product/',
        createProduct: '/admin-js/product/create',
        saveProduct: '/admin-js/product/save/',

        deleteProduct: '/admin-js/product/delete/',
        forceDeleteProduct: '/admin-js/product/delete/force/',
        restoreProduct: '/admin-js/product/restore/',
        moveProduct: '/admin-js/product/move/',

        deleteProductPhoto: '/admin-js/product/photo/delete/',
        rotateProductPhoto: '/admin-js/product/photo/rotate/',
        moveProductPhoto: '/admin-js/product/photo/move/',
        moveByDragAndDropPhoto: '/admin-js/product/photo/moveByDragAndDrop/',
        addProductPhoto: '/admin-js/product/photo/add/',
    },

    products: [],
    trashedProducts: [],
    seoData: [], // заполняется при открытии списка продуктов
    photoSeoData: [], // заполняется при открытии photoManager
    listHeader: '',
    productsCountFromServer: 0,
    singleProductFromServer: {},
    //previousRouteName: '',

    needReload: {
        products: false,
        trashedProducts: false,
    },


    search: {
        minPrice: 0,
        maxPrice: 0,
        category_ids: [],
        material_ids: [],
        color_ids: [],
    },

    initialSearch: {
        minPrice: 0,
        maxPrice: 0,
        category_ids: [],
        material_ids: [],
        color_ids: [],
    },

    searchTotalParameters: {
        minPrice: 0,
        maxPrice: 0,
        category_ids: [],
        material_ids: [],
        color_ids: [],
    },

    viewingMode: 'bigItems', // вида 'bigItems' / 'smallItems'
    sortingMode: 'position', // вида 'position' / 'priceUp' / 'priceDown'

    visibility: {
        productsFilters: false,
        productEditManager: false,
        productPhotoManager: false,
        productQuickViewManager: false,
        productSortingSelectForMobile: false,
    },
};
