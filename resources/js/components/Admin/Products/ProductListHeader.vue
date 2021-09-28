<template>
    <div class="products_header mauto">
        <h1 class="pd0 mb0">{{ listHeader }}</h1>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "ProductListHeader",
    computed: {
        ...mapGetters('products', [
            'listHeader',
        ]),
    },
}
</script>

