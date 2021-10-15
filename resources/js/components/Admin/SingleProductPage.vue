<template>
    <div class="content_block content_block__single_product">
        <h1 class="tal">{{ getHeader }}</h1>
        <div class="single_product__first_block">
            <div class="single_product__first_block__small_photos"
                v-html="getPhotos">
            </div>
            <div class="single_product__first_block__big_photo_wrapper"
                 v-html="getMainPhoto">
            </div>
            <div class="single_product__first_block__top_characteristics">

            </div>
        </div>
    </div>

</template>

<script>
import {mapGetters} from "vuex";
import computedForSingleProduct from './Products/someComputed/computedForSingleProduct';

export default {
    name: "SingleProductPage",
    data() {
        return {
            indexOfMainPhoto: 0,
        }
    },
    computed: {
        ...mapGetters('products', [
            'singleProductFromServer',
        ]),
        ...mapGetters([
            'imgFolderPrefix',
        ]),

        ...computedForSingleProduct,


    },
    mounted() {
        this.$store.dispatch('products/loadSingleProduct', this.$route.params.id);
    }
}
</script>
