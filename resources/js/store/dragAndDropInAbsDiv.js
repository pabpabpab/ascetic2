import router from "../router";

export default {

    namespaced: true,
    state: {
        entity: '',
        dragLeft: 0,
        dragTop: 0,
        currentIndex: -1,
        //xCoordinatesOfItems: [],
        //yCoordinatesOfItems: [],

        xCoordinatesOfPhotos: [],
        yCoordinatesOfPhotos: [],

        startX: -1,
        startY: -1,
        isDragging: false,
    },

    getters: {
        entity: (state) => state.entity,
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

        //xCoordinatesOfItems: (state) => state.xCoordinatesOfItems,
        //yCoordinatesOfItems: (state) => state.yCoordinatesOfItems,

        xCoordinatesOfPhotos: (state) => state.xCoordinatesOfPhotos,
        yCoordinatesOfPhotos: (state) => state.yCoordinatesOfPhotos,

        getIndexByXY: (state) => (data) => {

            const entity = data.entity;
            const maxIndex = state['yCoordinatesOf' + entity + 's'].length - 1;

            if ((data.y < state['yCoordinatesOf' + entity + 's'][0]) && (data.x < state['xCoordinatesOf' + entity + 's'][0])) {
                return 0;
            }

            if ((data.y > state['yCoordinatesOf' + entity + 's'][maxIndex]) && (data.x > state['xCoordinatesOf' + entity + 's'][maxIndex])) {
                return maxIndex + 1;
            }

            return -1;
        },
    },

    mutations: {
        setEntity: (state, value) => {
            state.entity = value;
        },
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
            state.entity = '';
            state.currentIndex = -1;
            state.isDragging = false;
            state.dragLeft = 0;
            state.dragTop = 0;
        },
        addXIntoXCoordinates: (state, {x, entity}) => {
            state['xCoordinatesOf' + entity + 's'].push(x);
        },
        addYIntoYCoordinates: (state, {y, entity}) => {
            state['yCoordinatesOf' + entity + 's'].push(y);
        },
        resetCoordinates: (state, entity) => {
            state['xCoordinatesOf' + entity + 's'] = [];
            state['yCoordinatesOf' + entity + 's'] = [];
        },
    },

    actions: {
        resetCoordinates({ commit }, {cycleNumber, entity}) {
            if (cycleNumber === 0) {
                commit('resetCoordinates', entity);
            }
            return true;
        },

        myDragStart({ dispatch, commit, getters }, {index, event, entity}) {
            if (router.currentRoute.params.which === 'trashed') {
                return;
            }

            commit('setEntity', entity);
            commit('setCurrentIndex', index);
            commit('setStartX', event.x);
            commit('setStartY', event.y);
        },

        myDragMove({ dispatch, commit, getters, state }, {event, entity}) {
            if (getters.currentIndex === -1) {
                return;
            }
            if (state.isDragging) {
                commit('setDragLeft', event.x);
                commit('setDragTop', event.y);
            }
            if ((Math.abs(getters.startX - event.x) > 15) || (Math.abs(getters.startY - event.y) > 15)) {
                dispatch('closeContextMenu', null, { root: true });
                commit('setIsDragging', true);
                commit('setDragLeft', event.x);
                commit('setDragTop', event.y);
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
                : getters.getIndexByXY({ x: event.x, y: event.y, entity: entity });

            dispatch('moveItem', { currentIndex, newIndex, entity });
            commit('myDragStop');
        },

        moveItem({ dispatch, commit, getters, state }, { currentIndex, newIndex, entity }) {
            if (newIndex === -1) {
                return;
            }

            let vector = 'Above';
            if (newIndex === state['yCoordinatesOf' + entity + 's'].length) {
                newIndex = state['yCoordinatesOf' + entity + 's'].length - 1;
                vector = 'Below';
            }

            dispatch(
                'move' + entity + 'ByDragAndDrop',
                {
                    currentIndex: currentIndex,
                    newIndex: newIndex,
                    vector: vector
                },
                { root: true });
        },

    },

};
