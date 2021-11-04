<template>
    <div class="single_product_page__content_wrapper">

        <single-product from="singleProductPage"></single-product>

        <transition name="fade">
            <products-context-menu v-if="showProductsContextMenu"></products-context-menu>
        </transition>
        <transition name="fade">
            <product-edit-manager v-if="showProductEditManager"></product-edit-manager>
        </transition>
        <transition name="fade">
            <product-photo-manager v-if="showProductPhotoManager"></product-photo-manager>
        </transition>
        <transition name="fade">
            <seo-manager entity="product" v-if="showSeoManager && !showProductPhotoManager"></seo-manager>
        </transition>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import SingleProduct from "./Products/SingleProduct";
import ProductsContextMenu from "./ContextMenu/ProductsContextMenu";
import ProductPhotoManager from "./Products/ProductPhotoManager";
import SeoManager from "./Blocks/SeoManager";
import ProductEditManager from "./Products/ProductEditManager";


export default {
    name: "SingleProductPage",
    components: {
        SingleProduct,
        ProductPhotoManager,
        SeoManager,
        ProductEditManager,
        ProductsContextMenu,
    },

    computed: {
        ...mapGetters('products', [
            'showProductEditManager',
            'showProductPhotoManager',
        ]),
        ...mapGetters([
            'imgFolderPrefix',
        ]),
        ...mapGetters('contextMenu', [
            'showProductsContextMenu',
        ]),
        ...mapGetters('seoManager', [
            'showSeoManager',
        ]),
    },
}
</script>
