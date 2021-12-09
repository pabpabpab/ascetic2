<template>
    <div class="content_block content_block__products">

        <div class="products">
            <pagination v-if="trashedProductsLength > 1" entity="trashedProducts" class="pdb0"></pagination>

            <trashed-product-item
                v-for="(item, index) of items"
                :key="item.id"
                :product="item"
                :index="index">
            </trashed-product-item>

            <pagination v-if="trashedProductsLength > 1" entity="trashedProducts" class="pdt10"></pagination>

            <transition name="fade">
                <products-context-menu v-if="showContextMenu('Products')"></products-context-menu>
            </transition>

            <transition name="fade">
                <product-edit-manager v-if="visibility('productEditManager')"></product-edit-manager>
            </transition>
        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex";
import TrashedProductItem from "./TrashedProductItem";
import Pagination from "../../Pagination/Pagination";
import ProductsContextMenu from "../../ContextMenu/ProductsContextMenu";
import ProductEditManager from "../EditManager/ProductEditManager";
export default {
    name: "ProductsTrashed",
    components: {
        TrashedProductItem,
        Pagination,
        ProductsContextMenu,
        ProductEditManager,
    },
    computed: {
        ...mapGetters('products', [
            'trashedProductsLength',
            'visibility',
        ]),
        ...mapGetters('contextMenu', [
            'showContextMenu',
        ]),
        ...mapGetters('pagination', [
            'currentPageIndex',
            'customized',
        ]),
        items() {
            return this.customized('trashedProducts')[this.currentPageIndex('trashedProducts')];
        },
    },
    mounted() {
        this.$store.dispatch('products/showTrashedProducts');
    },
}
</script>
