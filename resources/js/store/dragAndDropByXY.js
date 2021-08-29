import router from "../router";

export default {

    namespaced: true,
    state: {
        dragLeft: 0,
        dragTop: 0,
        currentIndex: -1,
        xCoordinatesOfItems: [],
        yCoordinatesOfItems: [],
        startX: -1,
        startY: -1,
        isDragging: false,
    },

    getters: {
        currentIndex: (state) => state.currentIndex,
        startX: (state) => state.startX,
        startY: (state) => state.startY,

        isDragging: (state) => (index) => {
            return state.currentIndex === index && state.isDragging;
        },

        leftByIndex: (state) => (index) => {
            if (state.currentIndex !== index) {
                return 0;
            }
            return state.dragLeft + 'px';
        },

        topByIndex: (state) => (index) => {
            if (state.currentIndex !== index) {
                return 0;
            }
            return state.dragTop + 'px';
        },

        xCoordinatesOfItems: (state) => state.xCoordinatesOfItems,
        yCoordinatesOfItems: (state) => state.yCoordinatesOfItems,

        getIndexByXY: (state) => (xy) => {
            const maxIndex = state.yCoordinatesOfItems.length - 1;

            if ((xy.y < state.yCoordinatesOfItems[0]) && (xy.x < state.xCoordinatesOfItems[0])) {
                return 0;
            }

            if ((xy.y > state.yCoordinatesOfItems[maxIndex]) && (xy.x > state.xCoordinatesOfItems[maxIndex])) {
                return maxIndex + 1;
            }

            return -1;
        },
    },

    mutations: {
        setCurrentIndex: (state, value) => {
            state.currentIndex = value;
        },
        setDragLeft: (state, value) => {
            state.dragLeft = value;
        },
        setDragTop: (state, value) => {
            state.dragTop = value;
        },
        setStartX: (state, value) => {
            state.startX = value;
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
            state.dragLeft = 0;
            state.dragTop = 0;
        },
        addXIntoXCoordinates: (state, x) => {
            state.xCoordinatesOfItems.push(x);
        },
        addYIntoYCoordinates: (state, y) => {
            state.yCoordinatesOfItems.push(y);
        },
        resetCoordinates: (state) => {
            state.xCoordinatesOfItems = [];
            state.yCoordinatesOfItems = [];
        },
    },

    actions: {
        resetCoordinates({ commit }, cycleNumber) {
            if (cycleNumber === 0) {
                commit('resetCoordinates');
            }
            return true;
        },

        myDragStart({ dispatch, commit, getters }, {index, event}) {
            if (router.currentRoute.params.which === 'trashed') {
                return;
            }

            commit('setCurrentIndex', index);
            commit('setStartX', event.pageX);
            commit('setStartY', event.pageY);
        },

        myDragMove({ dispatch, commit, getters, state }, event) {
            if (getters.currentIndex === -1) {
                return;
            }
            if (state.isDragging) {
                commit('setDragLeft', event.pageX);
                commit('setDragTop', event.pageY);
            }
            if ((Math.abs(getters.startX - event.pageX) > 15) || (Math.abs(getters.startY - event.pageY) > 15)) {
                dispatch('closeContextMenu', null, { root: true });
                commit('setIsDragging', true);
                commit('setDragLeft', event.pageX);
                commit('setDragTop', event.pageY);
            }
        },

        myDragStop({ dispatch, commit, getters, state }, { event, clickedIndex, entity }) {
            if (!state.isDragging) {
                commit('myDragStop');
                return;
            }

            const currentIndex = getters.currentIndex;

            const newIndex = clickedIndex > -1
                ? clickedIndex
                : getters.getIndexByXY({ x: event.pageX, y: event.pageY });

            dispatch('moveItem', { currentIndex, newIndex, entity });
            commit('myDragStop');
        },

        moveItem({ dispatch, commit, getters, state }, { currentIndex, newIndex, entity }) {
            if (newIndex === -1) {
                return;
            }

            let vector = 'Above';
            if (newIndex === state.yCoordinatesOfItems.length) {
                newIndex = state.yCoordinatesOfItems.length - 1;
                vector = 'Below';
            }

            dispatch(
                'move' + entity,
                {
                    currentIndex: currentIndex,
                    newIndex: newIndex,
                    vector: vector
                },
                { root: true });
        },

    },

};
