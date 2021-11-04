<template>
    <div class="quick_view_manager__screen">
        <div class="quick_view_manager__content_wrapper">
            <div class="quick_view_manager__content">
                <single-product from="quickViewManager"></single-product>
            </div>

            <div class='quick_view_manager__collapse_icon'
                 @click="closeProductQuickViewManager()">
                &#215;
            </div>

        </div>
    </div>
</template>

<script>
import SingleProduct from "./SingleProduct";
import {mapActions} from "vuex";
export default {
    name: "ProductQuickViewManager",
    components: {
        SingleProduct,
    },
    methods: {
        ...mapActions('products', [
            'closeProductQuickViewManager',
        ]),
    },
}
</script>
