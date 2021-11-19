export default {

    categoriesCountUrl: {
        categories: '/api/admin/categories/count',
        materials: '/api/admin/materials/count',
        colors: '/api/admin/colors/count',
    },

    categoriesUrl: {
        categories: '/api/admin/categories/',
        materials: '/api/admin/materials/',
        colors: '/api/admin/colors/',
    },

    singleCategoryUrl: {
        categories: '/api/admin/category/',
        materials: '/api/admin/material/',
        colors: '/api/admin/color/',
    },

    saveCategoryUrl: {
        categories: '/api/admin/category/save/',
        materials: '/api/admin/material/save/',
        colors: '/api/admin/color/save/',
    },

    deleteCategoryUrl: {
        categories: '/api/admin/category/delete/',
        materials: '/api/admin/material/delete/',
        colors: '/api/admin/color/delete/',
    },

    changePositionUrl: {
        categories: '/api/admin/category/change-position/',
        materials: '/api/admin/material/change-position/',
        colors: '/api/admin/color/change-position/',
    },

    moveUrl: {
        categories: '/api/admin/category/move/',
        materials: '/api/admin/material/move/',
        colors: '/api/admin/color/move/',
    },



    categories: {
        categories: [],
        materials: [],
        colors: [],
    },

    zeroCategories: {
        categories: [],
        materials: [],
        colors: [],
    },

    categoriesCount: {
        categories: -1,
        materials: -1,
        colors: -1,
    },

    seoData: [],

    reloadAllCategoriesCommand: false,

    singleCategoryFromServer: null,
};

