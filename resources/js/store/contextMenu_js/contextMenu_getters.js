export default {
    coordinates: (state) => state.coordinates,
    showContextMenu: (state) => (entity) => state.target === entity,
    currentListIndex: (state) => state.currentListIndex,
    lastListIndex: (state) => state.lastListIndex,

    category: (state) => state.category,
    product: (state) => state.product,
    productId: (state) => state.productId,
    photoName: (state) => state.photoName,
    user: (state) => state.user,
}
