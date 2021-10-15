
const routes = [
    {
        path: '/admin',
        name: 'Main',
        component: () => import('../components/Admin/MainPage.vue'),
    },
    {
        path: '/admin/users',
        name: 'Users',
        component: () => import('../components/Admin/UsersPage.vue'),
    },
    {
        path: '/admin/user/add',
        name: 'SaveUser',
        component: () => import('../components/Admin/SaveUserPage.vue'),
    },




    {
        path: '/admin/products/categories/:entity',
        name: 'Categories',
        component: () => import('../components/Admin/CategoriesPage.vue'),
    },


    {
        path: '/admin/products/:which',
        name: 'Products',
        component: () => import('../components/Admin/ProductsPage.vue'),
    },
    {
        path: '/admin/products/by/:categoryEntity/:slug',
        name: 'ProductsByCategory',
        component: () => import('../components/Admin/ProductsPage.vue'),
    },
    {
        path: '/admin/product/add',
        name: 'SaveProduct',
        component: () => import('../components/Admin/SaveProductPage.vue'),
    },



    {
        path: '/admin/products/one/:id',
        name: 'SingleProduct',
        component: () => import('../components/Admin/SingleProductPage.vue'),
    },




    {
        path: '*',
        redirect: '/',
    },
];

export default routes;
