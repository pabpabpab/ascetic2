<template>
    <div class="products_header">
        <filters-icon v-if="$route.name === 'Products'" class="filter_icon__img">
        </filters-icon>
        <h1 class="pd0 mb0 mauto"> {{ listHeader }}</h1>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import FiltersIcon from "./FiltersIcon";

export default {
    name: "ProductListHeader",
    components: {
        FiltersIcon,
    },
    computed: {
        ...mapGetters('products', [
            'listHeader',
        ]),
    },
}
</script>

