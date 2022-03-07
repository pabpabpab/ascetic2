export default {

    namespaced: true,
    state: {
        dragTop: 0,
        currentIndex: -1,
        yCoordinatesOfItems: [],
        startY: -1,
        isDragging: false,
    },

    getters: {
        currentIndex: (state) => state.currentIndex,
        startY: (state) => state.startY,

        isDragging: (state) => (index) => state.currentIndex === index && state.isDragging,

        draggingOccurs: (state) => state.currentIndex > -1 && state.isDragging,

        topByIndex: (state) => (index) => {
            if (state.currentIndex !== index) {
                return 0;
            }
            return state.dragTop + 'px';
        },

        yCoordinatesOfItems: (state) => state.yCoordinatesOfItems,

    },

    mutations: {
        setCurrentIndex: (state, value) => {
            state.currentIndex = value;
        },
        setDragTop: (state, value) => {
            state.dragTop = value;
        },
        setStartY: (state, value) => {
            state.startY = value;
        },
        setIsDragging: (state, value) => {
            state.isDragging = value;
        },
        myDragStop: (state) => {
            state.currentIndex = -1;
            state.isDragging = false;
            state.dragTop = 0;
        },
        addYIntoYCoordinates: (state, y) => {
            state.yCoordinatesOfItems.push(y);
        },
        resetYCoordinates: (state) => {
            state.yCoordinatesOfItems = [];
        },
    },

    actions: {
        resetYCoordinates({ commit }, cycleNumber) {
            if (cycleNumber === 0) {
                commit('resetYCoordinates');
            }
            return true;
        },

        myDragStart({ dispatch, commit, getters }, {index, event}) {
            commit('setCurrentIndex', index);
            commit('setStartY', event.pageY);
            //commit('setDragTop', event.pageY);
        },

        myDragMove({ dispatch, commit, getters, state }, event) {
            if (getters.currentIndex === -1) {
                return;
            }
            if (state.isDragging) {
                commit('setDragTop', event.pageY);
            }
            if (Math.abs(getters.startY - event.pageY) > 15) {
                dispatch('closeContextMenu', null, { root: true });
                commit('setIsDragging', true);
                commit('setDragTop', event.pageY);
            }
        },

        myDragStop({ dispatch, commit, getters, state }, { event, entity }) {
            const currentIndex = getters.currentIndex;
            if (state.isDragging) {
                dispatch('moveCategoryItem', { currentIndex, event, entity });
            }
            commit('myDragStop');
        },

        moveCategoryItem({ dispatch, commit, getters }, { currentIndex, event, entity }) {
            const coordsArr = getters.yCoordinatesOfItems;
            let newIndex = -1;
            for (let i = coordsArr.length; i >= 0; i--) {
                if (event.pageY > coordsArr[i]) {
                    newIndex = i;
                    break;
                }
            }
            // курсор мыши не был ниже никакого элемента, значит был выше всех элементов (ставим первым элементом)
            if (newIndex === -1) {
                newIndex = 0;
            }
            // новый индекс больше всех индексов, значит ставим элемент последним в списке
            if (newIndex >= coordsArr.length) {
                newIndex = coordsArr.length - 1;
            }

            dispatch(
                'moveCategory',
                {
                    currentIndex: currentIndex,
                    newIndex: newIndex,
                    entity: entity
                },
                { root: true });
        },

    },

};
