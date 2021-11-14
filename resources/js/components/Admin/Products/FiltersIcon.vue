<template>
    <div @click.stop="showOrCloseProductsFilters()" class="product_filters__icon">
        <span class="product_filters__icon__content">
            &#9776;
            <span class="product_filters__icon__knob product_filters__icon__knob__1"></span>
            <span class="product_filters__icon__knob product_filters__icon__knob__2"></span>
            <span class="product_filters__icon__knob product_filters__icon__knob__3"></span>
        </span>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
//import filter_icon5 from "./../../../../assets/filter_icon5.png"
//<img @click.stop="showOrCloseProductsFilters()" :src="filter_icon5" alt="">

export default {
    name: "ProductListHeader",
    /*
    data() {
        return {
            filter_icon5: filter_icon5,
        };
    },*/
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
</script>
