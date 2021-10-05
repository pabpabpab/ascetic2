import sortByPosition from './functions/sortByPosition';
import sortByPriceUp from './functions/sortByPriceUp';

export default {

    setSortingMode({commit}, mode) {
        commit('setSortingMode', mode);
    },

    doSort({dispatch, rootState}, {mode, data}) {
        let filtered = data.length > 0 ? data : [ ...rootState.pagination.filtered.products ];

        const func = {
            position: sortByPosition,
            priceUp: sortByPriceUp,
        }

        filtered = func[mode](filtered);

        dispatch('setFiltered', { entity: 'products', data: filtered }, { root: true }).then(() => {
            dispatch('divideIntoPages',  {
                entity: 'products',
                customQuantityPerPage: 0
            }, { root: true });
            const txt = `Отсортировано.`
            dispatch('showAbsoluteFlashMessage', {text: txt, sec: 0.7}, { root: true });
        });

        return filtered;
    },

}
