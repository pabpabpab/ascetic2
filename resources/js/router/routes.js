
const routes = [
    {
        path: '/admin',
        name: 'MainPage',
        component: () => import('../components/Admin/MainPage.vue'),
    },
    {
        path: '/admin/about',
        name: 'AboutPage',
        component: () => import('../components/Admin/AboutPage.vue'),
    },
    {
        path: '/admin/users',
        name: 'UsersPage',
        component: () => import('../components/Admin/UsersPage.vue'),
    },
    {
        path: '/admin/user/:id',
        name: 'SingleUser',
        component: () => import('../components/Admin/Users/SingleUser.vue'),
    },
/*
    {
        path: '/admin/products/category/add',
        name: 'SaveCategory',
        component: () => import('../components/Admin/oldSaveCategoryPage.vue'),
    },


    {
        path: '/admin/products/category/edit/:id',
        name: 'EditCategory',
        component: () => import('../components/Admin/oldSaveCategoryPage.vue'),
    },*/

    {
        path: '/admin/products/categories',
        name: 'Categories',
        component: () => import('../components/Admin/CategoriesPage.vue'),
    },


    {
        path: '/admin/products/add',
        name: 'SaveProduct',
        component: () => import('../components/Admin/SaveProductPage.vue'),
    },


    {
        path: '/admin/products',
        name: 'Products',
        component: () => import('../components/Admin/ProductsPage.vue'),
    },


    /*
   {
       path: '*',
       redirect: '/',
   },
   */
];

export default routes;
