export default {

    namespaced: true,
    state: {
        //draggableIndexes: {},
        //dragLeft: 0,
        dragTop: 0,
        currentIndex: -1,
        yCoordinatesOfItems: [],
    },

    getters: {
        currentIndex: (state) => state.currentIndex,

        isDragging: (state) => (index) => {
            return state.currentIndex === index;
        },

        topOfIndex: (state) => (index) => {
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
        myDragStop: (state) => {
            state.currentIndex = -1;
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
            commit('setDragTop', event.pageY);
        },

        myDragMove({ dispatch, commit, getters }, event) {
            if (getters.currentIndex > -1) {
                commit('setDragTop', event.pageY);
            }
        },

        myDragStop({ dispatch, commit, getters }, { event, entity }) {
            const currentIndex = getters.currentIndex;
            dispatch('moveCategoryItem', { currentIndex, event, entity });
            commit('myDragStop');
        },

        moveCategoryItem({ dispatch, commit, getters }, { currentIndex, event, entity }) {
            const coordsArr = getters.yCoordinatesOfItems;
            let newIndex = -1;
            for (let i = coordsArr.length; i >= 0; i--) {
                if (event.pageY > coordsArr[i]) {
                    newIndex = i + 1;
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
            console.log('currentIndex - ' + currentIndex);
            console.log('newIndex - ' + newIndex);
            console.log('entity - ' + entity);
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
