<template>
    <div class="content_block content_block__products">

        <div class="products">
            <product-item
                v-for="product of products"
                :key="product.id"
                :product="product">
            </product-item>


            <products-context-menu
                v-if="showProductsContextMenu">
            </products-context-menu>

            <product-photo-manager v-if="showProductPhotoManager"></product-photo-manager>
        </div>

    </div>
</template>

<script>
import ProductItem from "./ProductItem";
import ProductsContextMenu from "../ContextMenu/ProductsContextMenu";
import ProductPhotoManager from "./ProductPhotoManager";
import {mapGetters} from "vuex";

export default {
    name: "Products",
    props: ['whichProducts'],
    components: {
        ProductItem,
        ProductsContextMenu,
        ProductPhotoManager,
    },
    computed: {
        ...mapGetters('products', [
            'products',
            'showProductPhotoManager',
        ]),
        ...mapGetters('contextMenu', [
            'showProductsContextMenu',
        ]),
    },
    mounted() {
        this.$store.dispatch('products/loadProducts', this.$route.params.which);
    },
}
</script>
