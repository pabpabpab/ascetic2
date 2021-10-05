<template>
    <div v-if="defaultSorting" @click="closeProductsFilters()" class="show_block"
         @mousemove="myDragMove({event: $event, entity: 'Product'})"
         @mouseup="myDragStop({ event: $event, clickedIndex: -1, entity: 'Product' })">
        <product-list-header></product-list-header>
        <products></products>
    </div>
    <div v-else @click="closeProductsFilters()" class="show_block">
        <product-list-header></product-list-header>
        <products></products>
    </div>
</template>

<script>
import Products from "./Products/Products";
import ProductListHeader from "./Products/ProductListHeader";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ProductsPage",
    components: {
        ProductListHeader,
        Products,
    },
    computed: {
        ...mapGetters('products', [
            'sortingMode',
        ]),
        defaultSorting() {
            return this.sortingMode === 'position';
        }
    },
    methods: {
        ...mapActions('dragAndDropByXY', [
            'myDragMove',
            'myDragStop',
        ]),
        ...mapActions('products',[
            'closeProductsFilters',
        ]),
    },
}
</script>
