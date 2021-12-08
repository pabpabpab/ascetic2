<template>
    <div class="products_sorting_modes">
        Сортировать по:
        <a href="#" @click.prevent="doSort('position')"
            :class="defaultSortingLinkClass">
            По умолчанию
        </a>
        <a href="#" @click.prevent="doSort(priceModeValue)"
           :class="priceSortingLinkClass"
            v-html="priceSortingLinkText">
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
                'products_sorting_modes__link_inactive': this.sortingMode.indexOf('price') === -1,
                'products_sorting_modes__link_active': this.sortingMode.indexOf('price') >= 0,
            }
        },
        priceSortingLinkText() {
            const textBook = {
                position: 'Цене',
                priceUp: 'Цене &uarr;',
                priceDown: 'Цене &darr;',
            }
            return textBook[this.sortingMode];
        },
        priceModeValue() {
            const valueBook = {
                position: 'priceUp',
                priceUp: 'priceDown',
                priceDown: 'priceUp',
            }
            return valueBook[this.sortingMode];
        },

    },
    methods: {
        doSort(mode) {
            this.$store.dispatch('products/setSortingMode', mode)
                .then(() => {
                    this.$store.dispatch('products/doSort', mode);
                });
        },
    },
}
</script>
