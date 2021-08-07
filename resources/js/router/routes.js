
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
        path: '/admin/products/add',
        name: 'SaveProduct',
        component: () => import('../components/Admin/SaveProductPage.vue'),
    },

    {
        path: '/admin/products',
        name: 'Products',
        component: () => import('../components/Admin/ProductsPage.vue'),
    },

    {
        path: '/admin/products/categories/:entity',
        name: 'Categories',
        component: () => import('../components/Admin/CategoriesPage.vue'),
    },
/*
    {
        path: '/admin/products/materials',
        name: 'Materials',
        component: () => import('../components/Admin/CategoriesPage.vue'),
    },

    {
        path: '/admin/products/colors',
        name: 'Colors',
        component: () => import('../components/Admin/CategoriesPage.vue'),
    },
*/
    {
        path: '*',
        redirect: '/',
    },
];

export default routes;
