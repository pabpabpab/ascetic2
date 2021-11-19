<template>
    <div>
        <product-form action="create"></product-form>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: "SaveProductPage",
    components: {
        ProductForm: () => import('./Products/ProductForm.vue'),
    },
    computed: {
        ...mapGetters('categories', [
            'categories',
            'categoriesCount',
        ]),
        catsCount() {
            return this.categoriesCount['categories'];
        },
        materialsCount() {
            return this.categoriesCount['materials'];
        },
        colorsCount() {
            return this.categoriesCount['colors'];
        },
    },
    watch: {
        colorsCount(value) {
            if (value === 0) {
                const text = 'Не созданы цвета товаров, ' +
                    'сначала добавьте цвета товаров по ссылке «Категории / Цвета» в меню.';
                this.$store.dispatch('showInformationDialog', text);
            }
        },
        materialsCount(value) {
            if (value === 0) {
                const text = 'Не созданы материалы товаров, ' +
                    'сначала добавьте материалы товаров по ссылке «Категории / Материалы» в меню.';
                this.$store.dispatch('showInformationDialog', text);
            }
        },
        catsCount (value) {
            if (value === 0) {
                const text = 'Не созданы категории товаров, ' +
                    'сначала добавьте категории товаров по ссылке «Категории» в меню.';
                this.$store.dispatch('showInformationDialog', text);
            }
        },
    },
    mounted() {
        if (this.categories['categories'].length === 0) {
            this.$store.dispatch('categories/loadCategories', 'categories');
        }
        if (this.categories['materials'].length === 0) {
            this.$store.dispatch('categories/loadCategories', 'materials');
        }
        if (this.categories['colors'].length === 0) {
            this.$store.dispatch('categories/loadCategories', 'colors');
        }
    },
}
</script>
