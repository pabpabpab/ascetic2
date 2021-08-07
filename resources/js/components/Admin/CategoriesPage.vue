<template>
    <div class="show_block">
        <h1>{{ getHeader }}</h1>
        <div class="content_block content_block__categories">
            <component
                :is="currentAddingComponent"
                @change-adding-component="changeAddingComponent()">
            </component>
            <categories
                :collapseItemsCommand="collapseItemsCommand"
                @close-adding-component="closeAddingComponent()">
            </categories>
        </div>
    </div>
</template>

<script>
import AddCategoryButton from "./Categories/AddCategoryButton";
import CategoryForm from "./Categories/CategoryForm";
import Categories from "./Categories/Categories";

export default {
    name: "CategoriesPage",
    components: {
        AddCategoryButton,
        CategoryForm,
        Categories,
    },
    data() {
        return {
            currentAddingComponent: 'AddCategoryButton',
            collapseItemsCommand: false,
            header: {
                categories: 'Категории товаров',
                materials: 'Материалы',
                colors: 'Цвета',
            },
        };
    },
    computed: {
        getHeader() {
            const entity = this.$route.params.entity;
            return this.header[entity];
        },
    },
    methods: {
        changeAddingComponent() {
            if (this.currentAddingComponent === 'AddCategoryButton') {
                this.currentAddingComponent = 'CategoryForm';
                this.collapseItemsCommand = true;
                this.$store.dispatch('categories/cleanValidationErrors');
            } else {
                this.currentAddingComponent = 'AddCategoryButton';
                this.collapseItemsCommand = false;
            }
        },
        closeAddingComponent() {
            this.currentAddingComponent = 'AddCategoryButton';
            this.collapseItemsCommand = false;
        },
    },
}
</script>
