import Vue from 'vue';
import Vuex from 'vuex';

import http from './http';
import users from './users_js/users';
import pagination from './pagination_js/pagination';
import categories from './categories_js/categories';
import products from './products_js/products';
import typeinErrors from './validationErrors_js/typeinErrors';
import popupErrors from './validationErrors_js/popupErrors';
import absoluteFlashMessage from './message_js/absoluteFlashMessage';
import absoluteFlashFiltersMessage from './message_js/absoluteFlashFiltersMessage';
import waitingScreen from './waitingScreen';
import confirmationDialog from './message_js/confirmationDialog';
import contextMenu from './contextMenu_js/contextMenu';
import seoManager from './seoManager_js/seoManager';
import settingsManager from './settingsManager_js/settingsManager';
import dragAndDropByY from './dragAndDrop_js/dragAndDropByY';
import dragAndDropByXY from './dragAndDrop_js/dragAndDropByXY';
import dragAndDropInAbsDiv from './dragAndDrop_js/dragAndDropInAbsDiv';
import mobileMenu from './mobileMenu';
import auxiliary_actions from "./index_js/auxiliary_actions";

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        csrfUrl: '/admin-js/csrf',
        imgFolderPrefix: 'products-photos-size',
    },
    getters: {
        csrfUrl: (state) => state.csrfUrl,
        imgFolderPrefix: (state) => state.imgFolderPrefix,
    },
    actions: {
        ...auxiliary_actions,
    },
    modules: {
        http,
        users,
        pagination,
        categories,
        products,
        typeinErrors,
        popupErrors,
        absoluteFlashMessage,
        absoluteFlashFiltersMessage,
        waitingScreen,
        confirmationDialog,
        contextMenu,
        seoManager,
        settingsManager,
        dragAndDropByY,
        dragAndDropByXY,
        dragAndDropInAbsDiv,
        mobileMenu,
    },
});


export default store;

