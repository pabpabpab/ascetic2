<template>
   <product-form action="create"></product-form>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: "SaveProductPage",
    components: {
        ProductForm: () => import('./Products/ProductForm/ProductForm.vue'),
    },
}
</script>
