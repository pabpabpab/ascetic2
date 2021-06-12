export default {
    setProducts: (state, data) => {
        state.products.splice(0, state.products.length);
        state.products = [ ...data ];
    },
    setProductsCountFromServer: (state, number) => {
        state.productsCountFromServer = number;
    },
    setSingleProductFromServer: (state, product) => {
        state.singleProductFromServer = { ...product };
    },
};
