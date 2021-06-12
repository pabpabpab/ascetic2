<template>
    <div class="products">
        <product-item
            v-for="product of products"
            :key="product.id"
            :product="product">
        </product-item>
    </div>
</template>

<script>
import ProductItem from "./ProductItem";
import {mapGetters} from "vuex";

export default {
    name: "Products",
    components: {
        ProductItem,
    },
    computed: {
        ...mapGetters('products', [
            'products',
        ]),
    },
    mounted() {
        this.$store.dispatch('products/loadProducts');
    },
}
</script>
