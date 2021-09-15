export default {
    categories: (state) => {return {...state.categories};},
    categoriesCountFromServer: (state) => state.categoriesCountFromServer,
    singleCategoryFromServer: (state) => state.singleCategoryFromServer,
};
