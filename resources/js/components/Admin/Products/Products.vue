<template>
    <div class="content_block content_block__products">

        <div class="products">
            <pagination entity="products" class="pdb20"></pagination>

            <product-item
                v-for="(item, index) of items"
                :key="item.id"
                :product="item"
                :index="index">
            </product-item>

            <pagination entity="products" class="pdt20"></pagination>

            <products-context-menu
                v-if="showProductsContextMenu">
            </products-context-menu>

            <product-photo-manager v-if="showProductPhotoManager"></product-photo-manager>
            <seo-manager entity="product" v-if="showSeoManager && !showProductPhotoManager"></seo-manager>
        </div>

    </div>
</template>

<script>
import ProductItem from "./ProductItem";
import Pagination from "./../Blocks/Pagination";
import ProductsContextMenu from "../ContextMenu/ProductsContextMenu";
import ProductPhotoManager from "./ProductPhotoManager";
import SeoManager from "./../Blocks/SeoManager";
import {mapGetters} from "vuex";

export default {
    name: "Products",
    props: ['whichProducts'],
    components: {
        ProductItem,
        Pagination,
        ProductsContextMenu,
        ProductPhotoManager,
        SeoManager,
    },
    computed: {
        ...mapGetters('products', [
            'showProductPhotoManager',
        ]),
        ...mapGetters('seoManager', [
            'showSeoManager',
        ]),
        ...mapGetters('contextMenu', [
            'showProductsContextMenu',
        ]),
        ...mapGetters('pagination', [
            'currentPageIndex',
            'customized',
        ]),
        items() {
            return this.customized('products')[this.currentPageIndex('products')];
        },
    },
    mounted() {
        this.$store.dispatch('products/loadProducts', this.$route.params.which);
    },
}
</script>
