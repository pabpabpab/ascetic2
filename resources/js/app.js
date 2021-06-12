
require('./bootstrap');
//window.Vue = require('vue').default;

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router/index';
import store from './store/index';
import App from './App.vue';

/*
import getFormattedPrice from './store/products_js/functions/getFormattedPrice';
Vue.filter('priceFormat', function (price) {
    return getFormattedPrice(price);
});
*/

Vue.use(VueRouter);

//Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
});


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/*
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('user-edit-component', require('./components/Admin/Users/OldUserEditComponent.vue').default);

const app = new Vue({
    el: '#app',
});
*/
