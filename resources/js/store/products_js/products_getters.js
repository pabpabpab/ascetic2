export default {

    products: (state) => state.products,
    productsLength: (state) => state.products.length,

    allProducts: (state) => (categoryId = 0) => state.products,

    getProductsByCategory: (state) => (categoryId) => {
        return state.products.filter((item) => {
            const parametersArr = JSON.parse(item.parameters);
            const category_ids = parametersArr.categories.map((el) => el.id);
            return category_ids.includes(categoryId);
        });
    },
    getProductsByMaterial: (state) => (materialId) => {
        return state.products.filter((item) => {
            const parametersArr = JSON.parse(item.parameters);
            const material_ids = parametersArr.materials.map((el) => el.id);
            return material_ids.includes(materialId);
        });
    },
    getProductsByColor: (state) => (colorId) => {
        return state.products.filter((item) => {
            const parametersArr = JSON.parse(item.parameters);
            const color_ids = parametersArr.colors.map((el) => el.id);
            return color_ids.includes(colorId);
        });
    },

    trashedProducts: (state) => state.trashedProducts,
    trashedProductsLength: (state) => state.trashedProducts.length,

    seoData: (state) => state.seoData,
    photoSeoData: (state) => state.photoSeoData,
    listHeader: (state) => state.listHeader,
    productsCountFromServer: (state) => state.productsCountFromServer,
    singleProductFromServer: (state) => state.singleProductFromServer,

    productsMaxPrice: (state) => state.products.reduce(
        (previousValue, item) => Number(item.price) > previousValue ? Number(item.price) : previousValue
    ,0),
    productsMinPrice: (state) => state.products.reduce(
        (previousValue, item) => Number(item.price) < previousValue ? Number(item.price) : previousValue
    ,1000000),

    stateSearchObject: (state) => {return {...state.search};},
    searchTotalParameters: (state) => {return {...state.searchTotalParameters};},

    viewingMode: (state) => state.viewingMode,
    sortingMode: (state) => state.sortingMode,



    visibility: (state) => (componentName) => state.visibility[componentName],
    needReload: (state) => (entity) => state.needReload[entity],

    previousRouteName: (state) => state.previousRouteName,
};
