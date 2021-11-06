export default {

    setProducts: (state, data) => {
        //state.products.splice(0, state.products.length);
        state.products = [ ...data ];
    },

    addProductToProductsByFirst: (state, product) => {
        const products = state.products;
        products.splice(0, 0, product);
        state.products = [ ...products ];
    },

    deleteItemFromProducts: (state, productId) => {
        if (state.products.length === 0) {
            return;
        }
        const products = state.products;
        let index = products.findIndex(item => item.id === productId);
        if (index === -1) {
            return;
        }
        products.splice(index, 1);
        state.products = [ ...products ];
    },


    // при открытии списка продуктов
    setSeoData: (state, data) => {
        state.seoData = [ ...data ];
    },

    // при открытии photoManager
    setPhotoSeoData: (state, data) => {
        state.photoSeoData = [ ...data ];
    },

    setListHeader: (state, { route, data }) => {
        const paramName = {
            Products: 'which',
            ProductsByCategory: 'categoryEntity'
        }

        const header = {
            Products: {
                active: 'Список товаров',
                trashed: 'Удаленные товары',
            },
            ProductsByCategory: {
                category: data?.category?.name,
                material: `Товары из материала «${data?.category?.name}»`,
                color: `Товары цвета «${data?.category?.name}»`,
            }
        }

        state.listHeader = header[route.name][route.params[paramName[route.name]]];
    },

    setProductsCountFromServer: (state, number) => {
        state.productsCountFromServer = number;
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
        if (index === -1) {
            return;
        }
        state.products.splice(index, 1, product);
    },


    // при выборе пунктов в фильтре
    setSearchObject: (state, data) => {
        state.search = { ...data };
    },
    // итоговые параметры поиска в верху списка товаров
    setSearchTotalParameters: (state, data) => {
        state.searchTotalParameters = { ...data };
    },
    // режим сортировки
    setSortingMode: (state, mode) => {
        state.sortingMode = mode;
    },


    // ---------------------при drag and drop --------------------------
    moveProductInProductsById: (state, {operatedId, targetId}) => {
        const products = state.products;

        // найти индексы элементов по id
        let currentIndex = products.findIndex(item => item.id === operatedId);
        let newIndex = products.findIndex(item => item.id === targetId);

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


    // ---------------------при drag and drop --------------------------
    movePhoto: (state, {currentIndex, newIndex, vector}) => {
        const singleProduct = state.singleProductFromServer;
        const photoSet = JSON.parse(singleProduct.product.photo_set)

        // вырвать из массива и получить наш элемент, который двигаем
        const operatedItem = photoSet.splice(currentIndex, 1)[0];

        // заплатка (когда тащим сверху вниз, но не за нижний предел списка)
        if ((currentIndex < newIndex) && (newIndex !== photoSet.length)) {
            newIndex--;
        }

        // вставить наш элемент на новое место
        photoSet.splice(newIndex, 0, operatedItem);
        singleProduct.product.photo_set = JSON.stringify(photoSet);
        state.singleProductFromServer = { ...singleProduct };
    },

    // ------------------------------------------------------------------
    setShowProductsFilters: (state, value) => {
        state.showProductsFilters = value;
    },
    setShowProductEditManager: (state, value) => {
        state.showProductEditManager = value;
    },
    setShowProductPhotoManager: (state, value) => {
        state.showProductPhotoManager = value;
    },
    setShowProductQuickViewManager: (state, value) => {
        state.showProductQuickViewManager = value;
    },

};
