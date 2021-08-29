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


    moveProduct: (state, {currentIndex, newIndex, vector}) => {
        const products = state.products;
        // вырвать из массива и получить наш элемент, который двигаем
        const operatedItem = products.splice(currentIndex, 1)[0];

        // заплатка (когда тащим сверху вниз, но не за нижний предел списка)
        if ((currentIndex < newIndex) && (newIndex !== state.products.length)) {
            newIndex--;
        }

        // вставить наш элемент на новое место
        products.splice(newIndex, 0, operatedItem);
        state.products = [ ...products ];
    },



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
