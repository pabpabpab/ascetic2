import Vue from 'vue';
import Vuex from 'vuex';
import routes from "./../router/routes";

import http from './http';
import users from './users';
import pagination from './pagination';
import lazyUsers from './lazyUsers';
import user from './user';
import categories from './categories';
import materials from './materials';
import colors from './colors';
import products from './products';
import typeinErrors from './typeinErrors';
import popupErrors from './popupErrors';
import absoluteMessage from './absoluteMessage';
import confirmationDialog from './confirmationDialog';

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        csrfToken: '',
        count: 0,
        imgFolderPrefix: 'products-photos-size',
    },
    getters: {
        csrfToken: (state) => state.csrfToken,
        imgFolderPrefix: (state) => state.imgFolderPrefix,
    },
    mutations: {
        increment: (state) => {
            state.count++;
        },
        setCsrfToken: (state, str) => {
            state.csrfToken = str;
        },
    },
    actions: {
        // только в юзерах остался
        delayedMessageCleaning({ commit }, mutationName) {
            setTimeout(() => {
                commit(mutationName, '&nbsp;');
            }, 3000);
        },
    },
    modules: {
        http,
        users,
        pagination,
        lazyUsers,
        user,
        categories,
        materials,
        colors,
        products,
        typeinErrors,
        popupErrors,
        absoluteMessage,
        confirmationDialog,
    },
});


export default store;

