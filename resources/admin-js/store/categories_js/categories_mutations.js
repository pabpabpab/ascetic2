export default {
    setCategories: (state, { entity, data }) => {
        state.categories[entity].splice(0, state.categories.length);
        state.categories[entity] = [ ...data ];
    },
    setCategoriesCount: (state, { entity, val }) => {
        const categoriesCount = { ...state.categoriesCount };
        categoriesCount[entity] = val;
        state.categoriesCount = { ...categoriesCount };
    },
    setSeoData: (state, data) => {
        state.seoData = [ ...data ];
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
    resetAllCategories: (state) => {
        const zeroCategories = { ...state.zeroCategories };
        state.categories = { ...zeroCategories };
    },
    setReloadAllCategoriesCommand: (state, value) => {
        state.reloadAllCategoriesCommand = value;
    },
};
