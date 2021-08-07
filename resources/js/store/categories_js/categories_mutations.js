export default {
    setCategories: (state, { entity, data }) => {
        state.categories[entity].splice(0, state.categories.length);
        state.categories[entity] = [ ...data ];
    },
    setCategoriesCountFromServer: (state, number) => {
        state.categoriesCountFromServer = number;
    },
    setSingleCategoryFromServer: (state, category) => {
        state.singleCategoryFromServer = { ...category };
    },
};
