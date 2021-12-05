export default {

    setCoordinatesForCategoriesContext: (state, event) => {
        const icon = event.target.getBoundingClientRect();

        const x = {
            left: (icon.x + 20) + 'px'
        }

        // проверка на расстояние от точки клика до нижнего края
        const y = window.innerHeight - event.clientY < 300
            ? {
                bottom: (window.innerHeight - event.pageY) + 'px'
            }
            : {
                top: icon.y + window.pageYOffset + 10 + 'px'
            };

        state.coordinates = { ...x, ...y };
    },

    setCoordinatesForProductsContext: (state, event) => {
        const icon = event.target.getBoundingClientRect();

        // проверка на расстояние от точки клика до левого края
        const x = event.clientX < 180
            ? {
                left: '5px'
            }
            : {
                left: icon.x - 170 + 'px' // 170 - примерная ширина меню
            };

        const y = {
            top: icon.y + window.pageYOffset + 4 + 'px'
        };

        state.coordinates = { ...x, ...y };
    },

    setCoordinatesForPhotosContext: (state, event) => {
        const icon = event.target.getBoundingClientRect();

        // проверка на расстояние от точки клика до левого края
        const x = event.clientX < 180
            ? {
                left: '5px'
            }
            : {
                left: icon.x - 175 + 'px' // 175 - примерная ширина меню
            };

        const y = {
            top: (icon.y - 2) + 'px' // 2 - offset
        };

        state.coordinates = { ...x, ...y };
    },

    setCoordinatesForUsersContext: (state, event) => {
        const icon = event.target.getBoundingClientRect();

        const x = {
            left: (icon.x + 20) + 'px'
        }

        // проверка на расстояние от точки клика до нижнего края
        const y = window.innerHeight - event.clientY < 300
            ? {
                bottom: (window.innerHeight - event.pageY) + 'px'
            }
            : {
                top: icon.y + window.pageYOffset + 10 + 'px'
            };

        state.coordinates = { ...x, ...y };
    },

    setTarget: (state, target) => {
        state.target = target;
    },

    resetTarget: (state) => {
        state.target = '';
    },

    setCategoriesContextData: (state, data) => {
        const { category, currentListIndex, lastListIndex } = data;
        state.category = category;
        state.currentListIndex = currentListIndex;
        state.lastListIndex = lastListIndex;
    },

    setProductsContextData: (state, data) => {
        const { product } = data;
        state.product = product;
    },

    setPhotosContextData: (state, data) => {
        const { productId, photoName, currentListIndex, lastListIndex } = data;
        state.productId = productId;
        state.photoName = photoName;
        state.currentListIndex = currentListIndex;
        state.lastListIndex = lastListIndex;
    },

    setUsersContextData: (state, data) => {
        const { user } = data;
        state.user = user;
    },
}
