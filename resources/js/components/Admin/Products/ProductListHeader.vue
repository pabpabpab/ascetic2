<template>

    <div class="products_header mauto">

        <div class="w100px"></div>

        <template v-if="$route.params.which === 'trashed'">
            <h1>Удаленные товары</h1>
            <div>
                <router-link :to="{ name: 'Products', params: { which: 'active' } }" class="products_header__link">
                    Активные
                </router-link>
            </div>
        </template>
        <template v-else>
            <h1>{{ listHeader }}</h1>
            <div>
                <router-link :to="{ name: 'Products', params: { which: 'trashed' } }" class="products_header__link">
                    Удаленные
                </router-link>
            </div>
        </template>

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

