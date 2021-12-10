
const routes = [
    {
        path: '/admin',
        name: 'Main',
        component: () => import('../components/Admin/MainPage.vue'),
    },
    {
        path: '/admin/help',
        name: 'Help',
        component: () => import('../components/Admin/HelpPage.vue'),
    },
    {
        path: '/admin/user/add',
        name: 'SaveUser',
        component: () => import('../components/Admin/SaveUserPage.vue'),
    },
    {
        path: '/admin/users',
        name: 'Users',
        component: () => import('../components/Admin/UsersPage.vue'),
    },
    {
        path: '/admin/products/categories/:entity',
        name: 'Categories',
        component: () => import('../components/Admin/CategoriesPage.vue'),
    },
    {
        path: '/admin/product/add',
        name: 'SaveProduct',
        component: () => import('../components/Admin/SaveProductPage.vue'),
    },
    {
        path: '/admin/product/:slug-:id',
        name: 'SingleProduct',
        component: () => import('../components/Admin/SingleProductPage.vue'),
    },
    {
        path: '/admin/products/active',
        name: 'Products',
        component: () => import('../components/Admin/ProductsPage.vue'),
    },
    {
        path: '/admin/products/by/:categoryEntity/:slug',
        name: 'ProductsByCategory',
        component: () => import('../components/Admin/ProductsPage.vue'),
    },
    {
        path: '/admin/products/trashed',
        name: 'TrashedProducts',
        component: () => import('../components/Admin/TrashedProductsPage.vue'),
    },
    {
        path: '*',
        redirect: '/admin',
    },
];

export default routes;
