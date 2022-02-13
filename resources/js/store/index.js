import Vue from 'vue';
import Vuex from 'vuex';

import csrfToken from './csrfToken';
import http from './http';
import users from './users_js/users';
import pagination from './pagination_js/pagination';
import categories from './categories_js/categories';
import products from './products_js/products';
import typeinErrors from './typeinErrors';
import popupErrors from './popupErrors';
import absoluteFlashMessage from './absoluteFlashMessage';
import absoluteFlashFiltersMessage from './absoluteFlashFiltersMessage';
import waitingScreen from './waitingScreen';
import confirmationDialog from './confirmationDialog';
import contextMenu from './contextMenu_js/contextMenu';
import seoManager from './seoManager';
import settingsManager from './settingsManager';
import dragAndDropByY from './dragAndDropByY';
import dragAndDropByXY from './dragAndDropByXY';
import dragAndDropInAbsDiv from './dragAndDropInAbsDiv';
import mobileMenu from './mobileMenu';
import auxiliary_actions from "./index_js/auxiliary_actions";

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        count: 0,
        imgFolderPrefix: 'products-photos-size',
    },
    getters: {
        imgFolderPrefix: (state) => state.imgFolderPrefix,
    },
    actions: {
        ...auxiliary_actions,
    },
    modules: {
        csrfToken,
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

