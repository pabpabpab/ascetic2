<template>
    <div class="products_sorting_modes">
        Сортировать по:
        <a href="#" @click.prevent="doSort('position')"
            :class="defaultSortingLinkClass">
            По умолчанию
        </a>
        <a href="#" @click.prevent="doSort('priceUp')"
           :class="priceSortingLinkClass">
            По цене
        </a>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "SortingModes",
    computed: {
        ...mapGetters('products', [
            'sortingMode',
        ]),
        defaultSortingLinkClass() {
            return {
                'products_sorting_modes__link_inactive': this.sortingMode !== 'position',
                'products_sorting_modes__link_active': this.sortingMode === 'position',
            }
        },
        priceSortingLinkClass() {
            return {
                'products_sorting_modes__link_inactive': this.sortingMode !== 'priceUp',
                'products_sorting_modes__link_active': this.sortingMode === 'priceUp',
            }
        },
    },
    methods: {
        doSort(mode) {
            this.$store.dispatch('products/setSortingMode', mode);
            this.$store.dispatch('products/doSort', {mode, data: [], initiator: ''}); // data для совместимости
        },
    },
}
</script>
