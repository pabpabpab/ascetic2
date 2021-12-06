<template>
    <div @click.stop="showOrCloseProductsFilters()"
         :data-title="title"
         class="icon_with_hint icon_with_left_hint filter_icon__wrapper">
        <img :src="filterIcon" alt="" class="filter_icon__img">
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import filterIcon from "./../../../../assets/filterIcon.svg"

export default {
    name: "ProductListHeader",

    data() {
        return {
            filterIcon: filterIcon,
        };
    },
    computed: {
        ...mapGetters('products', [
            'visibility'
        ]),
        title() {
            return 'Открыть фильтр товаров';
        },
    },
    methods: {
        showOrCloseProductsFilters() {
            if (this.visibility('productsFilters')) {
                this.$store.dispatch('products/closeProductsFilters');
            } else {
                this.$store.dispatch('products/showProductsFilters');
            }
        },
    },
}
</script>
