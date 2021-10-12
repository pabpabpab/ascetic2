export default {
    coordinates: (state) => state.coordinates,
    showCategoriesContextMenu: (state) => state.target === 'Categories',
    showProductsContextMenu: (state) => state.target === 'Products',
    showPhotosContextMenu: (state) => state.target === 'Photos',
    showUsersContextMenu: (state) => state.target === 'Users',
    currentListIndex: (state) => state.currentListIndex,
    lastListIndex: (state) => state.lastListIndex,
    category: (state) => state.category,
    product: (state) => state.product,
    productId: (state) => state.productId,
    photoName: (state) => state.photoName,
    user: (state) => state.user,
}
