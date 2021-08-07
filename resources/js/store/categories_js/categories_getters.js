export default {
    categoriesCountUrl: (state) => (entity) => state.categoriesCountUrl[entity],
    categoriesUrl: (state) => (entity) => state.categoriesUrl[entity],
    singleCategoryUrl: (state) => (entity) => state.singleCategoryUrl[entity],
    saveCategoryUrl: (state) => (entity) => state.saveCategoryUrl[entity],
    deleteCategoryUrl: (state) => (entity) => state.deleteCategoryUrl[entity],
    changePositionUrl: (state) => (entity) => state.changePositionUrl[entity],

    categories: (state) => {return {...state.categories};},

    categoriesCountFromServer: (state) => state.categoriesCountFromServer,
    singleCategoryFromServer: (state) => state.singleCategoryFromServer,
};
