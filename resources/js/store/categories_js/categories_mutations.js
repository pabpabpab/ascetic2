export default {
    setCategories: (state, data) => {
        state.categories.splice(0, state.categories.length);
        state.categories = [ ...data ];
    },
    setCategoriesCountFromServer: (state, number) => {
        state.categoriesCountFromServer = number;
    },
    setSingleCategoryFromServer: (state, category) => {
        state.singleCategoryFromServer = { ...category };
    },
};
