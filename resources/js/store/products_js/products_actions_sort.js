import sortByPosition from './functions/sortByPosition';
import sortByPriceUp from './functions/sortByPriceUp';

export default {

    setSortingMode({commit}, mode) {
        commit('setSortingMode', mode);
    },

    doSort({dispatch}, mode) {
        dispatch('sortProducts', {mode, data: []})
            .then((sorted) => {
                dispatch('paginateProducts', sorted);
            })
            .then(() => {
                const txt = `Отсортировано.`;
                dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.7}, { root: true });
            });
    },

    sortProducts({dispatch, rootGetters}, {mode, data}) {
        //const filteredProducts = [ ...rootGetters['pagination/filtered']('products') ];
        //let products = data.length > 0 ? data : filteredProducts;

        const products = [ ...data ];

        const func = {
            position: sortByPosition,
            priceUp: sortByPriceUp,
        }

        return func[mode](products);
    },


}
