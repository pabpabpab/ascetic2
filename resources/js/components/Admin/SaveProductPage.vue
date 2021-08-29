<template>
    <div>
        <div class="display-none">{{ checkCategoriesCount() }}</div>
        <product-form></product-form>
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
            'categoriesCountFromServer',
        ]),
    },
    methods: {
        checkCategoriesCount() {
            if (this.categoriesCountFromServer === 0) {
                this.$router.push({ name: 'Categories'});
            }
        },
    },
    mounted() {
        this.$store.dispatch('categories/getCategoriesCount');
        //this.$store.dispatch('updateCSRF', 5);
    },
}
</script>
