<template>
    <div>
        <h1>Список товаров</h1>
        <products></products>
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
