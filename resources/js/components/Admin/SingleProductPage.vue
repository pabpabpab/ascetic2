<template>
    <div class="single_product_page__content_wrapper">

        <single-product from="singleProductPage"></single-product>

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
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import SingleProduct from "./Products/SingleProduct/SingleProduct";
import ProductsContextMenu from "./ContextMenu/ProductsContextMenu";
import ProductPhotoManager from "./Products/PhotoManager/PhotoManager";
import SeoManager from "./SeoManager/SeoManager";
import ProductEditManager from "./Products/EditManager/ProductEditManager";


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
            'visibility',
        ]),
        ...mapGetters([
            'imgFolderPrefix',
        ]),
        ...mapGetters('contextMenu', [
            'showContextMenu',
        ]),
        ...mapGetters('seoManager', [
            'showSeoManager',
        ]),
    },
}
</script>
