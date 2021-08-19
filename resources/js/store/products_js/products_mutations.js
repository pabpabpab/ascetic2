export default {
    setProducts: (state, data) => {
        state.products.splice(0, state.products.length);
        state.products = [ ...data ];
    },

    setSingleProductFromServer: (state, product) => {
        state.singleProductFromServer = { ...product };
    },

    setSingleProductPhoto: (state, photoSet) => {
        const data = state.singleProductFromServer;
        data.product.photo_set = photoSet;
        state.singleProductFromServer = { ...data };
    },


    updateProductsBySingleProduct: (state) => {
        const product = state.singleProductFromServer.product;
        const index = state.products.findIndex(item => item.id === product.id);
        state.products.splice(index, 1, product);
    },

   /*
    setProductsItem: (state, product) => {
        const index = state.products.findIndex(item => item.id === product.id);
        state.products.splice(index, 1, product);
    },
    */

    setShowProductPhotoManager: (state, value) => {
        state.showProductPhotoManager = value;
    },

    setProductsCountFromServer: (state, number) => {
        state.productsCountFromServer = number;
    },

    setEnabledFadingCss: (state, value) => {
        state.enabledFadingCss = value;
    },
};
