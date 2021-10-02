<template>
    <div class="products_header">
        <img v-if="$route.params.which !== 'trashed'"
             @click.stop="showOrCloseProductsFilters()"
            :src="filter_icon5"
            alt=""
            class="filter_icon__img">
        <h1 class="pd0 mb0 mauto"> {{ listHeader }}</h1>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

//import filter_icon from "./../../../../assets/filter_icon.png"
import filter_icon5 from "./../../../../assets/filter_icon5.png"
//import filter_icon3 from "./../../../../assets/filter_icon3.png"

export default {
    name: "ProductListHeader",
    data() {
        return {
            //filter_icon: filter_icon,
            filter_icon5: filter_icon5,
            //filter_icon3: filter_icon3,
        };
    },
    computed: {
        ...mapGetters('products', [
            'listHeader',
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

