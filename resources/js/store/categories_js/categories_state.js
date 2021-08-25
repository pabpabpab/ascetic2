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

    //categories: [],


    categories: {
        categories: [],
        materials: [],
        colors: [],
    },


    categoriesCountFromServer: -1,
    singleCategoryFromServer: null,
};


/*
export default {
    //categoriesCountUrl: '/api/admin/categories/count',

    categoriesCountUrl: {
        categories: '/api/admin/categories/count',
        materials: '/api/admin/materials/count',
        colors: '/api/admin/colors/count',
    },


    categoriesUrl: '/api/admin/categories/',
    singleCategoryUrl: '/api/admin/category/',
    saveCategoryUrl: '/api/admin/category/save/',
    deleteCategoryUrl: '/api/admin/category/delete/',
    changePositionUrl: '/api/admin/category/change-position/',


    materialsCountUrl: '/api/admin/materials/count',
    materialsUrl: '/api/admin/materials/',
    singleMaterialUrl: '/api/admin/material/',
    saveMaterialUrl: '/api/admin/material/save/',
    deleteMaterialUrl: '/api/admin/material/delete/',
    MaterialChangePositionUrl: '/api/admin/material/change-position/',


    categories: [],
    categoriesCountFromServer: -1,
    singleCategoryFromServer: null,
};
 */
