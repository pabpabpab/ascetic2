<template>
    <div class="content_block content_block__products">

        <div class="products">
            <pagination v-if="productsLength > 1" entity="products" class="pdb10"></pagination>

            <sorting-modes></sorting-modes>

            <search-total-parameters></search-total-parameters>

            <product-item
                v-for="(item, index) of items"
                :key="item.id"
                :product="item"
                :index="index">
            </product-item>

            <pagination v-if="productsLength > 1" entity="products" class="pdt10"></pagination>

            <products-filters
                v-if="$route.params.which === 'active'">
            </products-filters>

            <products-context-menu
                v-if="showProductsContextMenu">
            </products-context-menu>

            <product-edit-manager v-if="showProductEditManager"></product-edit-manager>
            <product-photo-manager v-if="showProductPhotoManager"></product-photo-manager>
            <seo-manager entity="product" v-if="showSeoManager && !showProductPhotoManager"></seo-manager>
        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex";
import ProductItem from "./ProductItem";
import ProductsFilters from "./ProductsFilters";
import SearchTotalParameters from "./SearchTotalParameters";
import Pagination from "./../Blocks/Pagination";
import ProductsContextMenu from "../ContextMenu/ProductsContextMenu";
import ProductPhotoManager from "./ProductPhotoManager";
import SeoManager from "./../Blocks/SeoManager";
import ProductEditManager from "./ProductEditManager";
import SortingModes from "./SortingModes";


export default {
    name: "Products",
    props: ['whichProducts'],
    components: {
        ProductItem,
        SortingModes,
        ProductsFilters,
        SearchTotalParameters,
        Pagination,
        ProductsContextMenu,
        ProductPhotoManager,
        SeoManager,
        ProductEditManager,
    },
    computed: {
        ...mapGetters('products', [
            'productsLength',
            'showProductEditManager',
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
        if (!this.$route.params.withoutReload) {
            this.$store.dispatch('products/loadProducts', this.$route);
            this.$store.dispatch('products/resetSearchObject');
        }

        this.$store.dispatch('products/setShowProductsFilters', false);
    },
}
</script>
