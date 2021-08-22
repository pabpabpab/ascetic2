<template>
    <div class="show_block">
        <product-list-header></product-list-header>
        <products></products>
    </div>
</template>

<script>
import Products from "./Products/Products";
import ProductListHeader from "./Products/ProductListHeader";

export default {
    name: "ProductsPage",
    components: {
        ProductListHeader,
        Products,
    },
}
</script>
