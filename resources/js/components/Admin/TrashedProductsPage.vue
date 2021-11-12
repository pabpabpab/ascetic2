<template>
    <div class="show_block">
        <product-list-header></product-list-header>
        <trashed-products></trashed-products>
    </div>
</template>

<script>
import ProductListHeader from "./Products/ProductListHeader";
import TrashedProducts from "./Products/TrashedProducts/TrashedProducts";

export default {
    name: "TrashedProductsPage",
    components: {
        ProductListHeader,
        TrashedProducts,
    },
}
</script>
