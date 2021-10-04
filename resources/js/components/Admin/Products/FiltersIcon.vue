<template>
    <img @click.stop="showOrCloseProductsFilters()"
        :src="filter_icon5"
        alt="">
</template>

<script>
import {mapGetters} from "vuex";
import filter_icon5 from "./../../../../assets/filter_icon5.png"

export default {
    name: "ProductListHeader",
    data() {
        return {
            filter_icon5: filter_icon5,
        };
    },
    computed: {
        ...mapGetters('products', [
            'showProductsFilters'
        ]),
    },
    methods: {
        showOrCloseProductsFilters() {
            if (this.showProductsFilters) {
                this.$store.dispatch('products/closeProductsFilters');
            } else {
                this.$store.dispatch('products/showProductsFilters');
            }
        },
    },
}
</script>
