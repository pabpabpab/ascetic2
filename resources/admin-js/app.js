
import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router/index';
import store from './store/index';
import App from './App.vue';


Vue.use(VueRouter);

//Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
});

