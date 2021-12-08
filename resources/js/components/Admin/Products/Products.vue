<template>
    <div class="content_block content_block__products">

        <div class="products"
             :class="{ cursor_move: draggingOccurs }">

            <pagination-mobile v-if="productsLength > 1" entity="products" class="pdb0"></pagination-mobile>
            <pagination v-if="productsLength > 1" entity="products" class="pdb0"></pagination>

            <div class="top_viewing_sorting_filtering_container">
                <viewing-icon></viewing-icon>
                <sorting-modes></sorting-modes>
                <sorting-modes-for-mobile></sorting-modes-for-mobile>
                <filters-icon v-if="$route.name === 'Products'"></filters-icon>
            </div>


            <search-total-parameters></search-total-parameters>

            <product-item
                v-for="(item, index) of items"
                :key="item.id"
                :product="item"
                :index="index"
                :numberOfItems="items.length">
            </product-item>

            <pagination v-if="productsLength > 1" entity="products" class="pdt10"></pagination>
            <pagination-mobile v-if="productsLength > 1" entity="products" class="pdb0"></pagination-mobile>

            <transition name="product_filters">
                <products-filters v-show="$route.name === 'Products' && visibility('productsFilters')"></products-filters>
            </transition>

            <transition name="fade">
                <products-context-menu v-if="showContextMenu('Products')"></products-context-menu>
            </transition>


            <transition name="fade">
                <product-edit-manager v-if="visibility('productEditManager')"></product-edit-manager>
            </transition>
            <transition name="fade">
                <product-photo-manager v-if="visibility('productPhotoManager')"></product-photo-manager>
            </transition>
            <transition name="fade">
                <seo-manager entity="product" v-if="showSeoManager && !visibility('productPhotoManager')"></seo-manager>
            </transition>

            <transition name="fade">
                <product-quick-view-manager v-if="visibility('productQuickViewManager')"></product-quick-view-manager>
            </transition>

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
import ViewingIcon from "./ViewingIcon";
import SortingModes from "./SortingModes";
import SortingModesForMobile from "./SortingModesForMobile";
import ProductQuickViewManager from "./ProductQuickViewManager";
import FiltersIcon from "./FiltersIcon";
import PaginationMobile from "../Blocks/PaginationMobile";


export default {
    name: "Products",
    components: {
        PaginationMobile,
        ProductItem,
        ViewingIcon,
        SortingModes,
        SortingModesForMobile,
        ProductsFilters,
        SearchTotalParameters,
        Pagination,
        ProductsContextMenu,
        ProductPhotoManager,
        SeoManager,
        ProductEditManager,
        ProductQuickViewManager,
        FiltersIcon,
    },
    computed: {
        ...mapGetters('products', [
            'productsLength',
            'visibility',
        ]),
        ...mapGetters('seoManager', [
            'showSeoManager',
        ]),
        ...mapGetters('contextMenu', [
            'showContextMenu',
        ]),
        ...mapGetters('pagination', [
            'currentPageIndex',
            'customized',
        ]),
        ...mapGetters('dragAndDropByXY', [
            'draggingOccurs',
        ]),
        items() {
            return this.customized('products')[this.currentPageIndex('products')];
        },
    },
    mounted() {
        this.$store.dispatch('products/setProductsFiltersVisibility', false);
        this.$store.dispatch('products/showProducts', this.$route);
    },
}
</script>
