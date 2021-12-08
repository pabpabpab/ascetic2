import sortByPosition from './functions/sortByPosition';
import sortByPriceUp from './functions/sortByPriceUp';
import sortByPriceDown from './functions/sortByPriceDown';

export default {

    setSortingMode({commit}, mode) {
        commit('setSortingMode', mode);
    },

    doSort({dispatch, rootGetters}, mode) {
        const filteredProducts = [ ...rootGetters['pagination/filtered']('products') ];

        dispatch('sortProducts', { mode, data: filteredProducts })
            .then((sorted) => {
                dispatch('paginateProducts', sorted);
            })
            .then(() => {
                const txt = `Отсортировано.`;
                dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.7}, { root: true });
            });
    },

    sortProducts({dispatch, rootGetters}, {mode, data}) {
        const products = [ ...data ];

        const func = {
            position: sortByPosition,
            priceUp: sortByPriceUp,
            priceDown: sortByPriceDown,
        }

        return func[mode](products);
    },


}
