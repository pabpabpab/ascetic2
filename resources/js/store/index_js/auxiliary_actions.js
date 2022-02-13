export default {
    closeAllByClickOnAppTag({ dispatch, commit, getters }, event) {
        dispatch('closePopupErrorsBox');
        dispatch('contextMenu/closeContextMenuByClick', event);

        if (getters["mobileMenu/mobileMenuVisibility"]) {
            dispatch('hideMobileMenu');
        }

        if (getters["products/visibility"]("productsFilters")) {
            dispatch('products/closeProductsFilters');
        }

        commit('products/setVisibility', {
            componentName: 'productSortingSelectForMobile',
            value: false
        });
    },
    scrollWindowBottom() {
        window.scrollBy(0, 1000000);
    },
};
