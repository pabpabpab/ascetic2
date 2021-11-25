<template>
    <div @click.stop="showOrCloseProductsFilters()" class="product_filters__icon">
        <img :src="filterIcon" alt="" class="product_filters__icon__img">
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
/*
<span class="product_filters__icon__content">
            &#9776;
            <span class="product_filters__icon__knob product_filters__icon__knob__1"></span>
            <span class="product_filters__icon__knob product_filters__icon__knob__2"></span>
            <span class="product_filters__icon__knob product_filters__icon__knob__3"></span>
        </span>
 */
</script>
