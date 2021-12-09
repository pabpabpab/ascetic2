<template>
    <div @click.stop="showOrCloseProductsFilters()"
         :data-title="title"
         class="icon_with_hint icon_with_left_hint filter_icon__wrapper">
        <img :src="filterIcon" alt="" class="filter_icon__img">
        <div v-if="totalCount > 0" class="filter_icon__total_indicator">{{ totalCount }}</div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import filterIcon from "../../../../../assets/filterIcon.svg"

export default {
    name: "ProductListHeader",

    data() {
        return {
            filterIcon: filterIcon,
            totalCount: 0,
        };
    },
    computed: {
        ...mapGetters('products', [
            'visibility',
            'stateSearchObject',
            'productsMinPrice',
            'productsMaxPrice',
        ]),
        title() {
            return 'Открыть фильтр товаров';
        },
    },
    watch:{
        stateSearchObject(val) {
            //const total = { ...val };
            let totalCount = 0;
            if (val.minPrice > this.productsMinPrice) {
                totalCount += 1;
            }
            if (val.maxPrice > 0 && val.maxPrice < this.productsMaxPrice) {
                totalCount += 1;
            }
            totalCount += val.category_ids.length;
            totalCount += val.material_ids.length;
            totalCount += val.color_ids.length;

            //console.log(total);
            this.totalCount = totalCount;

            //return totalCount;
        },
    },
    methods: {
        showOrCloseProductsFilters() {
            if (this.visibility('productsFilters')) {
                this.$store.dispatch('products/closeProductsFilters');
            } else {
                this.$store.dispatch('products/showProductsFilters');
            }
        },
    },
}
</script>
