import Vue from 'vue';
import Vuex from 'vuex';
import routes from "./../router/routes";

import csrfToken from './csrfToken';
import http from './http';
import users from './users';
import pagination from './pagination';
import lazyUsers from './lazyUsers';
import user from './user';
import categories from './categories';
import products from './products';
import typeinErrors from './typeinErrors';
import popupErrors from './popupErrors';
import absoluteFlashMessage from './absoluteFlashMessage';
import waitingScreen from './waitingScreen';
import confirmationDialog from './confirmationDialog';
import contextMenu from './contextMenu';
import dragAndDrop from './dragAndDrop';

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        count: 0,
        imgFolderPrefix: 'products-photos-size',
    },
    getters: {
        imgFolderPrefix: (state) => state.imgFolderPrefix,
    },
    mutations: {
        increment: (state) => {
            state.count++;
        },
    },
    actions: {
        closeAllByClickOnAppTag({ dispatch }, event) {
            dispatch('closePopupErrorsBox');
            dispatch('contextMenu/closeContextMenuByClick', event);
        },
        scrollWindowBottom() {
            window.scrollBy(0, 1000000);
        },
    },
    modules: {
        csrfToken,
        http,
        users,
        pagination,
        lazyUsers,
        user,
        categories,
        products,
        typeinErrors,
        popupErrors,
        absoluteFlashMessage,
        waitingScreen,
        confirmationDialog,
        contextMenu,
        dragAndDrop,
    },
});


export default store;

