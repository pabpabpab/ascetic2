<template>
    <div v-if="notEmptyStateSearch" class="products_filters_top_total_parameters show_block">
        <p v-if="searchMinPrice" class="products_filters_top_total_parameters__item show_block">
            от {{ stateSearchObject.minPrice }} руб.
            <span class="products_filters_top_total_parameters__item__collapse_icon"
                  @click="clearMinPrice">
                &#215;
            </span>
        </p>

        <p v-if="searchMaxPrice" class="products_filters_top_total_parameters__item show_block">
            до {{ stateSearchObject.maxPrice }} руб.
            <span class="products_filters_top_total_parameters__item__collapse_icon"
                  @click="clearMaxPrice">
                &#215;
            </span>
        </p>

        <p class="products_filters_top_total_parameters__item show_block"
           v-for="cat of selectedCategories"
           :key="cat.id">
            {{ cat.name }}
            <span class="products_filters_top_total_parameters__item__collapse_icon"
                @click="deleteSelectedItem('category', cat.id)">
                &#215;
            </span>
        </p>

        <p class="products_filters_top_total_parameters__item show_block"
           v-for="cat of selectedMaterials"
           :key="cat.id">
            {{ cat.name }}
            <span class="products_filters_top_total_parameters__item__collapse_icon"
                  @click="deleteSelectedItem('material', cat.id)">
                &#215;
            </span>
        </p>

        <p class="products_filters_top_total_parameters__item show_block"
           v-for="cat of selectedColors"
           :key="cat.id">
            {{ cat.name }}
            <span class="products_filters_top_total_parameters__item__collapse_icon"
                  @click="deleteSelectedItem('color', cat.id)">
                &#215;
            </span>
        </p>


    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "SearchTotalParameters",
    data() {
        return {
            search: {},
        };
    },
    computed: {
        ...mapGetters('products', [
            'stateSearchObject',
            'productsMaxPrice',
            'productsMinPrice',
            'visibility',
        ]),
        ...mapGetters('categories', [
            'categories',
        ]),

        searchMinPrice() {
            return this.stateSearchObject.minPrice > this.productsMinPrice;
        },
        searchMaxPrice() {
            return this.stateSearchObject.maxPrice > 0 && this.stateSearchObject.maxPrice < this.productsMaxPrice;
        },
        searchCategories() {
            return this.stateSearchObject.category_ids.length > 0;
        },
        searchMaterials() {
            return this.stateSearchObject.material_ids.length > 0;
        },
        searchColors() {
            return this.stateSearchObject.color_ids.length > 0;
        },

        notEmptyStateSearch() {
            if (this.searchMinPrice) {
                return true;
            }
            if (this.searchMaxPrice) {
                return true;
            }
            if (this.searchCategories) {
                return true;
            }
            if (this.searchMaterials) {
                return true;
            }
            if (this.searchColors) {
                return true;
            }
            return false;
        },

        selectedCategories() {
            return this.stateSearchObject.category_ids.map((id) => {
                return {
                    id: id,
                    name: this.categories['categories'].find(item => item.id === id).name
                };
            });
        },
        selectedMaterials() {
            return this.stateSearchObject.material_ids.map((id) => {
                return {
                    id: id,
                    name: this.categories['materials'].find(item => item.id === id).name
                };
            });
        },
        selectedColors() {
            return this.stateSearchObject.color_ids.map((id) => {
                return {
                    id: id,
                    name: this.categories['colors'].find(item => item.id === id).name
                };
            });
        },
    },
    methods: {
        clearMinPrice() {
            const search = this.search;
            search.minPrice = 0;
            this.search = { ...search };
            this.redoSearch();
        },
        clearMaxPrice() {
            const search = this.search;
            search.maxPrice = this.productsMaxPrice;
            this.search = { ...search };
            this.redoSearch();
        },
        deleteSelectedItem(entity, id) {
            const search = this.search;
            const index = search[entity + '_ids'].findIndex(item => item === id);
            search[entity + '_ids'].splice(index, 1);
            this.search = { ...search };
            this.redoSearch();
        },
        redoSearch() {
            this.$store.dispatch('products/setSearchObject', this.search);
            this.$store.dispatch('products/setSearchTotalParameters', this.search);
            this.$store.dispatch('products/makeSearch', this.search);
        },
    },
    watch: {
        stateSearchObject(val) {
            this.search = { ...val };
        },
    },

}
</script>

