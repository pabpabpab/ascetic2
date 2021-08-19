<template>
    <div class="show_block">
        <h1>Список товаров</h1>
        <div class="content_block content_block__products">
            <products></products>
        </div>
    </div>
</template>

<script>
import Products from "./Products/Products";

export default {
    name: "ProductsPage",
    components: {
        Products,
    },
}
</script>
