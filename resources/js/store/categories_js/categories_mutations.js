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
    moveCategory: (state, {currentIndex, newIndex, entity}) => {
        const categories = state.categories[entity];
        // вырвать из массива и получить наш элемент, который двигаем
        const operatedItem = categories.splice(currentIndex, 1)[0];
        // вставить наш элемент на новое место
        categories.splice(newIndex, 0, operatedItem);
        state.categories[entity] = [ ...categories ];
    },
};
