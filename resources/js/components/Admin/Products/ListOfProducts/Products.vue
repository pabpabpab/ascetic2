<template>
    <div class="content_block content_block__products">

        <div class="products"
             :class="{ cursor_move: draggingOccurs }">

            <pagination-mobile v-if="productsLength > 1" entity="products" class="pdb0"></pagination-mobile>
            <pagination v-if="productsLength > 1" entity="products" class="pdb0"></pagination>

            <div class="top_viewing_sorting_filtering_container">
                <div class="viewing_icon__wrapper">
                    <viewing-icon></viewing-icon>
                </div>
                <div v-if="1 === 2">
                    <sorting-modes></sorting-modes>
                </div>
                <div class="sorting_modes_for_mobile__wrapper">
                    <sorting-modes-for-mobile></sorting-modes-for-mobile>
                </div>
                <div v-if="$route.name === 'Products'" class="filter_icon_and_lot_number__wrapper">
                    <lot-number-control></lot-number-control>
                    <filters-icon></filters-icon>
                </div>
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
import ProductsFilters from "../Filtering/ProductsFilter";
import SearchTotalParameters from "../Filtering/SearchTotalParameters";
import Pagination from "../../Pagination/Pagination";
import ProductsContextMenu from "../../ContextMenu/ProductsContextMenu";
import ProductPhotoManager from "../PhotoManager/PhotoManager";
import SeoManager from "../../SeoManager/SeoManager";
import ProductEditManager from "../EditManager/ProductEditManager";
import ViewingIcon from "../Viewing/ViewingIcon";
import SortingModes from "../Sorting/SortingModes";
import SortingModesForMobile from "../Sorting/SortingModesForMobile";
import ProductQuickViewManager from "../QuickViewManager/ProductQuickViewManager";
import FiltersIcon from "../Filtering/FilterIcon";
import PaginationMobile from "../../Pagination/PaginationMobile";
import LotNumberControl from "../Filtering/LotNumberControl";


export default {
    name: "Products",
    components: {
        LotNumberControl,
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
