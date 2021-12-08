import Vue from 'vue';
import Vuex from 'vuex';

import csrfToken from './csrfToken';
import http from './http';
import users from './users';
import pagination from './pagination';
import categories from './categories';
import products from './products';
import typeinErrors from './typeinErrors';
import popupErrors from './popupErrors';
import absoluteFlashMessage from './absoluteFlashMessage';
import absoluteFlashFiltersMessage from './absoluteFlashFiltersMessage';
import waitingScreen from './waitingScreen';
import confirmationDialog from './confirmationDialog';
import contextMenu from './contextMenu';
import seoManager from './seoManager';
import dragAndDropByY from './dragAndDropByY';
import dragAndDropByXY from './dragAndDropByXY';
import dragAndDropInAbsDiv from './dragAndDropInAbsDiv';
import mobileMenu from './mobileMenu';

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
        closeAllByClickOnAppTag({ dispatch, commit }, event) {
            dispatch('closePopupErrorsBox');
            dispatch('contextMenu/closeContextMenuByClick', event);
            dispatch('hideMobileMenu');
            dispatch('products/closeProductsFilters');
            commit('products/setVisibility', {
                componentName: 'productSortingSelectForMobile',
                value: false
            });
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
        dragAndDropByY,
        dragAndDropByXY,
        dragAndDropInAbsDiv,
        mobileMenu,
    },
});


export default store;

