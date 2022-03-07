export default {
    loadSingleProduct({dispatch, commit, state}, productId) {
        const url = state.url['singleProduct'] + productId;
        dispatch('getJsonWithWaitingScreen', url, { root: true })
            .then((data) => {
                commit('setSingleProductFromServer', data);
                commit('setPhotoSeoData', data.photoSeo);
            });
    },

    async getProductsCount({ dispatch, commit, state }) {
        const url = state.url['productsCount'];
        dispatch('getJsonWithWaitingScreen', url, { root: true }).then((data) => {
            commit('setProductsCountFromServer', data);
        });
    },

};
