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
                <products-context-menu v-if="showProductsContextMenu"></products-context-menu>
            </transition>

        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex";
import TrashedProductItem from "./TrashedProductItem";
import Pagination from "../../Blocks/Pagination";
import ProductsContextMenu from "../../ContextMenu/ProductsContextMenu";
export default {
    name: "ProductsTrashed",
    components: {
        TrashedProductItem,
        Pagination,
        ProductsContextMenu,
    },
    computed: {
        ...mapGetters('products', [
            'trashedProductsLength',
        ]),
        ...mapGetters('contextMenu', [
            'showProductsContextMenu',
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
