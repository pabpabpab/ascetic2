<template>
    <div class="products_header">
        <reload-icon></reload-icon>
        <h1 class="pd0 mb0 mauto"> {{ listHeader }}</h1>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ReloadIcon from "./../Blocks/ReloadIcon";

export default {
    name: "ProductListHeader",
    components: {
        ReloadIcon,
    },
    computed: {
        ...mapGetters('products', [
            'listHeader',
        ]),
    },
}
</script>

