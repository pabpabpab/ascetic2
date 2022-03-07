<template>
   <product-form action="create"></product-form>
</template>

<script>
export default {
    name: "SaveProductPage",
    components: {
        ProductForm: () => import('./Products/ProductForm/ProductForm.vue'),
    },
}
</script>
