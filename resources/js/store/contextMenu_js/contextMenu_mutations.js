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

        const xOffset = -185;

        const x = {
            left: (icon.x + xOffset) + 'px'
        }

        const y = {
            top: icon.y + window.pageYOffset + 4 + 'px'
        };

        state.coordinates = { ...x, ...y };
    },

    setCoordinatesForPhotosContext: (state, event) => {
        const icon = event.target.getBoundingClientRect();

        const xOffset = -162;
        const yOffset = -2;

        const x = {
            left: (icon.x + xOffset) + 'px'
        }

        const y = {
            top: (icon.y + yOffset) + 'px'
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
