<template>
    <div @click.stop class="product_filters">
        <div @click="closeAllCheckboxesLists()" class="product_filters__content">

            <p class="product_form__property_header mt30 mb20">
                Цена, руб.
            </p>

            <div class="filter_price__text_input__wrapper">
                <input class="input_text filter_price__text_input"
                       type="text" maxlength="6"
                       v-model="search.minPrice">
                <input class="input_text filter_price__text_input"
                       type="text" maxlength="6"
                       v-model="search.maxPrice">
            </div>

            <div class="filter_price__range_input__wrapper">
                <div class="filter_price__range_input__kernel">&nbsp;</div>

                <input type="range" class="filter_price__range_input filter_price__range_input_min"
                       v-model="search.minPrice"
                       :min="productsMinPrice"
                       step="100"
                       :max="productsMaxPrice"><br>
                <input type="range" class="filter_price__range_input filter_price__range_input_max"
                       v-model="search.maxPrice"
                       :min="productsMinPrice"
                       step="100"
                       :max="productsMaxPrice">
            </div>


            <filters-checkboxes-list
                @closeAllCheckboxesLists="closeAllCheckboxesLists()"
                :close-list-cmd="closeCheckboxesListsCmd"
                v-model="search.category_ids"
                :search="search"
                entity="category"
                header="Категория"
                class="mt30">
            </filters-checkboxes-list>

            <filters-checkboxes-list
                @closeAllCheckboxesLists="closeAllCheckboxesLists()"
                :close-list-cmd="closeCheckboxesListsCmd"
                v-model="search.material_ids"
                :search="search"
                entity="material"
                header="Материал"
                class="mt30">
            </filters-checkboxes-list>

            <filters-checkboxes-list
                @closeAllCheckboxesLists="closeAllCheckboxesLists()"
                :close-list-cmd="closeCheckboxesListsCmd"
                v-model="search.color_ids"
                :search="search"
                entity="color"
                header="Цвет"
                class="mt30">
            </filters-checkboxes-list>

            <button class="button__save_product mauto mt30"
                    @click="closeProductsFilters()">
                Готово
            </button>


            <div class='product_filters__collapse_icon'
                 @click.stop="closeProductsFilters()">
                &#215;
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import FiltersCheckboxesList from "./FiltersCheckboxesList";


export default {
    name: "ProductsFilters",
    components: {FiltersCheckboxesList},
    data() {
        return {
            search: {
                minPrice: 1000000,
                maxPrice: 0,
                category_ids: [],
                material_ids: [],
                color_ids: [],
            },
            searchHasNotBeenChanged: true,
            closeCheckboxesListsCmd: false,
        };
    },
    computed: {
        ...mapGetters('products', [
            'productsMaxPrice',
            'productsMinPrice',
            'searchTotalParameters',
            'visibility',
        ]),
        ...mapGetters('categories', [
            'categories',
        ]),

        localMinPrice() {
            return this.search.minPrice;
        },
        localMaxPrice() {
            return this.search.maxPrice;
        },

        localSearchObject() {
            return { ...this.search };
        },

        emptySearch() {
            if (this.search.minPrice > this.productsMinPrice) {
                return false;
            }
            if (this.search.maxPrice < this.productsMaxPrice) {
                return false;
            }
            if (this.search.category_ids.length > 0) {
                return false;
            }
            if (this.search.material_ids.length > 0) {
                return false;
            }
            if (this.search.color_ids.length > 0) {
                return false;
            }
            return true;
        },

    },
    methods: {
        ...mapActions('products',[
            'closeProductsFilters',
        ]),
        closeAllCheckboxesLists() {
            this.closeCheckboxesListsCmd = true;
            setTimeout(() => {
                this.closeCheckboxesListsCmd = false;
            }, 100);
        },
    },
    watch: {

        localSearchObject() {
            if (!this.visibility('productsFilters')) {
                return;
            }
            if (this.emptySearch && this.searchHasNotBeenChanged) {
               return;
            }
            this.searchHasNotBeenChanged = false;
            this.$store.dispatch('products/setSearchObject', this.search);
            this.$store.dispatch('products/makeSearch', this.search);
        },

        searchTotalParameters(val) {
            this.search = { ...val };
        },

        productsMinPrice(val) {
            this.search.minPrice = Number(val);
        },
        productsMaxPrice(val) {
            this.search.maxPrice = Number(val);
        },

        localMinPrice(val) {
            // заплатка
            if (this.$route.name !== 'Products') {
                return;
            }

            const minPrice = Number(this.search.minPrice);
            const maxPrice = Number(this.search.maxPrice);
            if (minPrice >= maxPrice) {
                this.search.minPrice = maxPrice - 100;
            }

            const productsMinPrice = Number(this.productsMinPrice);
            if (minPrice < productsMinPrice) {
                this.search.minPrice = productsMinPrice;
            }
        },
        localMaxPrice(val) {
            // заплатка
            if (this.$route.name !== 'Products') {
                return;
            }

            const minPrice = Number(this.search.minPrice);
            const maxPrice = Number(this.search.maxPrice);
            if (maxPrice <= minPrice) {
                this.search.maxPrice = minPrice + 100;
            }
            const productsMaxPrice = Number(this.productsMaxPrice);
            if (maxPrice > productsMaxPrice) {
                this.search.maxPrice = productsMaxPrice;
            }
        },
    },
    mounted() {
        setTimeout(() => {
            if (this.categories['categories'].length === 0) {
                this.$store.dispatch('categories/loadCategories', 'categories');
            }
            if (this.categories['materials'].length === 0) {
                this.$store.dispatch('categories/loadCategories', 'materials');
            }
            if (this.categories['colors'].length === 0) {
                this.$store.dispatch('categories/loadCategories', 'colors');
            }
        }, 100);


        setTimeout(() => {
            this.search.minPrice = Number(this.productsMinPrice);
            this.search.maxPrice = Number(this.productsMaxPrice);
        }, 500);
    },
}
</script>
