<template>
    <div class="show_block"
         @mousemove="myDragMove({event: $event, entity: 'Product'})"
         @mouseup="myDragStop({ event: $event, clickedIndex: -1, entity: 'Product' })">
        <product-list-header></product-list-header>
        <products></products>
    </div>
</template>

<script>
import Products from "./Products/Products";
import ProductListHeader from "./Products/ProductListHeader";
import {mapActions} from "vuex";

export default {
    name: "ProductsPage",
    components: {
        ProductListHeader,
        Products,
    },
    methods: {
        ...mapActions('dragAndDropByXY', [
            'myDragMove',
            'myDragStop',
        ]),
    },
}
</script>
