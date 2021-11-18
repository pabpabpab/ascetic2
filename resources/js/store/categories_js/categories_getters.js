export default {
    categories: (state) => {return {...state.categories};},
    categoriesCount: (state) => state.categoriesCount,
    singleCategoryFromServer: (state) => state.singleCategoryFromServer,
    seoData: (state) => state.seoData,
};
