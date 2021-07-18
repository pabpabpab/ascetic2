<template>
    <div class="categories">
        <component
            v-for="(category, index) of categories"
            :key="category.id"
            :category="category"
            :index="index"
            :is="currentItemComponents['id' + category.id]"
            @change-item-component="changeItemComponent(category.id);">
        </component>
    </div>
</template>

<script>
import {mapGetters} from "vuex";


import ItemCategoryEditForm from "./ItemCategoryEditForm";
import CategoryItem from "./CategoryItem";

export default {
    name: "Categories",
    components: {
        CategoryItem,
        ItemCategoryEditForm,
    },
    props: ['rollChildItems'],
    data() {
        return {
            currentItemComponents: {
                // id1: 'CategoryItem',
                // id2: 'CategoryItem',
                // id3: 'CategoryItem',
            },
            itemComponentName: 'CategoryItem',
            itemEditFormComponentName: 'ItemCategoryEditForm',
        };
    },
    computed: {
        ...mapGetters('categories', [
            'categories',
        ]),
    },
    methods: {
        changeItemComponent(itemId) {
            this.$emit('close-adding-component');
            const newComponentName = this.currentItemComponents['id' + itemId] === this.itemComponentName
                ? this.itemEditFormComponentName
                : this.itemComponentName;
            const temp = {...this.currentItemComponents};
            for (let key in temp) temp[key] = this.itemComponentName;
            temp['id' + itemId] = newComponentName;
            this.currentItemComponents = {...temp};
        },

    },

    watch: {

        categories(newCategories, oldCategories) {
            const temp = {};
            newCategories.forEach((item) => {
                temp['id' + item.id] = this.itemComponentName;
            });
            this.currentItemComponents = {...temp};
        },

        rollChildItems(newValue, oldValue) {
            if (newValue === true) {
                const temp = {...this.currentItemComponents};
                for (let key in temp) temp[key] = this.itemComponentName;
                this.currentItemComponents = {...temp};
            }
        },
    },
    mounted() {
        this.$store.dispatch('categories/loadCategories');
    },
}

/*
components: {
    CategoryItem: () => import('./CategoryItem.vue')
},
*/
</script>


