export default {
    loadSingleProduct({dispatch, commit, state}, productId) {
        dispatch('showWaitingScreen', null, { root: true });
        const url = state.url['singleProduct'] + productId;
        dispatch('getJson', url, { root: true })
            .then((data) => {
                commit('setSingleProductFromServer', data);
                commit('setPhotoSeoData', data.photoSeo);
            })
            .finally(() => {
                dispatch('hideWaitingScreen', null, { root: true });
            });
    },

    async getProductsCount({ dispatch, commit, state }) {
        const url = state.url['productsCount'];
        dispatch('getJson', url, { root: true }).then((data) => {
            commit('setProductsCountFromServer', data);
        });
    },

};
